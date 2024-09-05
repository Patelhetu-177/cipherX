// app/api/dashboard/route.js
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    if (!user || user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Fetch active cases
    const analyses1 = await db.analysis.findMany({
      where: {
        score: {
          gt: 0,
        },
      },
    });
    
    const uniqueEvidenceIds = new Set(analyses1.map(a => a.evidenceId));
    const activeCases = uniqueEvidenceIds.size;
    

    // Fetch total evidence count
    const totalEvidence = await db.evidence.count();

    // Fetch recent analyses
    const analyses = await db.analysis.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        evidence: true,
      },
      distinct: ["evidenceId"],
    });

    return NextResponse.json({ activeCases, totalEvidence, analyses });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
