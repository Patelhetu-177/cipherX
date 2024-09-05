import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const analysis = await prisma.analysis.findMany({
      where: { evidenceId: params.id },
    });

    if (!analysis.length) {
      return NextResponse.json({ message: "No analysis found for the given ID" }, { status: 404 });
    }

    return NextResponse.json(analysis, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch analysis:", error);
    return NextResponse.json({ error: "Failed to fetch analysis" }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const { files, systemLogs, registryEntries, networkActivity, iocs, score, recommendations } = await request.json();

    const analysis = await prisma.analysis.create({
      data: {
        evidenceId: params.id,
        files,
        systemLogs,
        registryEntries,
        networkActivity,
        iocs,
        score,
        recommendations,
      },
    });

    return NextResponse.json(analysis, { status: 201 });
  } catch (error) {
    console.error("Failed to create analysis:", error);
    return NextResponse.json({ error: "Failed to create analysis" }, { status: 500 });
  }
}