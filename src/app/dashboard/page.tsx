'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getFileType } from '@/utils/fileUtils';

import { useEffect, useState } from 'react';

// Define the types for Analysis and the response
interface Analysis {
  id: string;
  score: number;
  createdAt: string;
  recommendations: string;
  evidence: {
    name: string;
  };
  fileName?: string; // Ensure fileName is included in the Analysis type
  placeOfCrime?: string; // Ensure placeOfCrime is included in the Analysis type
}

const Page = () => {
  const [analyses, setAnalyses] = useState<Analysis[]>([]); // Explicitly declare analyses as an array of Analysis objects
  const [activeCases, setActiveCases] = useState<number>(0);
  const [totalEvidence, setTotalEvidence] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/dashboard');
        const data = await res.json();

        // Destructure the returned data and ensure proper types
        const { activeCases, totalEvidence, analyses }: { 
          activeCases: number;
          totalEvidence: number;
          analyses: Analysis[];
        } = data;

        setActiveCases(activeCases);
        setTotalEvidence(totalEvidence);
        setAnalyses(analyses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader className='pb-2'>
                <CardDescription>Active Cases</CardDescription>
                <CardTitle className='text-4xl'>{activeCases}</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className='pb-2'>
                <CardDescription>Total Evidence</CardDescription>
                <CardTitle className='text-4xl'>{totalEvidence}</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">Recent Analyses</h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evidence Name</TableHead>
                <TableHead>Document Type</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Place of Crime</TableHead>
                <TableHead className='text-right'>Recommendations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(analyses) && analyses.length > 0 ? (
                analyses.map((analysis: any) => {
                  const fileName = analysis.fileName || 'unknown.file';
                  console.log(`File: ${fileName}, Type: ${getFileType(fileName)}`); // Log for debugging
                  return (
                    <TableRow key={analysis.id} className='bg-accent'>
                      <TableCell>
                        {analysis.evidence?.name || 'Unknown Evidence'}
                      </TableCell>
                      <TableCell>
                        {getFileType(fileName)}
                      </TableCell>
                      <TableCell>
                        {analysis.score ? analysis.score.toFixed(2) : 'N/A'}
                      </TableCell>
                      <TableCell>
                        {new Date(analysis.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {analysis.placeOfCrime || 'Unknown Place'}
                      </TableCell>
                      <TableCell className='text-right'>
                        {analysis.recommendations || 'No recommendations'}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className='text-center'>
                    No analyses found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Page;
