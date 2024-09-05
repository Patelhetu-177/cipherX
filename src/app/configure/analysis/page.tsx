'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';



type Progress = {
  files: number;
  systemLogs: number;
  registryEntries: number;
  networkActivity: number;
  iocs: number;
  score: number;
};

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const evidenceId = searchParams.get('id');
  
  const [progress, setProgress] = useState<Progress>({
    files: 0,
    systemLogs: 0,
    registryEntries: 0,
    networkActivity: 0,
    iocs: 0,
    score: 0,
  });

  const [recommendations, setRecommendations] = useState<string>('');
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    const analyzeEvidence = async () => {
      try {
        // Simulate progress for each step
        for (const key of Object.keys(progress)) {
          setProgress((prev) => ({ ...prev, [key]: 100 }));
          await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate time delay
        }

        // Automatically generate random analysis data
        const analysisData = {
          files: { total: 1, scanned: 1 },
          systemLogs: { total: 100, scanned: 100 },
          registryEntries: { total: 50, scanned: 50 },
          networkActivity: { total: 200, scanned: 200 },
          iocs: { total: 5, detected: 0 },
          score: Math.random() * 100,
          recommendations: "No significant threats detected. Continue monitoring."
        };

        // Post the analysis data to the backend
        const response = await fetch(`/api/configure/analysis/${evidenceId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(analysisData),
        });

        const result = await response.json();
        setReport(result);
        setRecommendations(analysisData.recommendations);
      } catch (error) {
        console.error('Failed to analyze evidence:', error);
      }
    };

    if (evidenceId) {
      analyzeEvidence();
    }
  }, [evidenceId]);

  const downloadPDF = async () => {
    if (!report) return;

    const doc = await PDFDocument.create();
    const page = doc.addPage([600, 400]);
    const { width, height } = page.getSize();

    page.drawText('Analysis Report', { x: 50, y: height - 50, size: 30, color: rgb(0, 0, 0) });
    page.drawText(`Evidence ID: ${evidenceId || 'N/A'}`, { x: 50, y: height - 100, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`Recommendations: ${recommendations}`, { x: 50, y: height - 150, size: 20, color: rgb(0, 0, 0) });

    // Draw the report JSON below the recommendations
    const reportText = JSON.stringify(report, null, 2);
    page.drawText(reportText, { x: 50, y: height - 250, size: 12, color: rgb(0, 0, 0) });

    const pdfBytes = await doc.save();
    saveAs(new Blob([pdfBytes], { type: 'application/pdf' }), 'analysis-report.pdf');
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Evidence Analysis</h1>
      {Object.keys(progress).map((key) => (
        <div key={key}>
          <p>{key}</p>
          <ProgressBar value={progress[key as keyof Progress]} />
          <p>{progress[key as keyof Progress] === 100 ? 'Successfully scanned' : 'Scanning...'}</p>
        </div>
      ))}

      <p>{recommendations}</p>

      {report && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Analysis Report</h2>
          <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(report, null, 2)}</pre>
          <button
            onClick={downloadPDF}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Save Report as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
