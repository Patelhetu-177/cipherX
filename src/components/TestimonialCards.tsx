"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const cipherXTestimonials = [
  {
    name: "Automated Data Collection:",
    description:
      "Ingests RAW images and other forensic data formats for analysis.",
  },
  {
    name: "Automated Data Analysis:",
    description:
      "Scans and analyzes data for files, system logs, registry entries, and network activity.",
  },
  {
    name: "IOCs Identification:",
    description:
      "Identifies indicators of compromise (IOCs) and suspicious activities.",
  },
  {
    name: "AI/ML Integration:",
    description:
      "Utilizes AI/ML algorithms for anomaly detection, pattern recognition, scoring, and recommendations.",
  },
  {
    name: "User-Friendly Interface:",
    description:
      "Provides an intuitive interface with clear navigation and real-time data visualization.",
  },
  {
    name: "Comprehensive Reporting:",
    description:
      "Generates detailed reports in various formats (PDF, JSON, CSV) for analysis and documentation.",
  },
];

function CipherTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl text-white font-bold text-center mb-8 z-10">
      CipherX: Automated Analysis, Intelligent Insights


      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={cipherXTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default CipherTestimonials;
