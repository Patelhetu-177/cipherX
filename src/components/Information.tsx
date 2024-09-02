
export default function Information() {
  return (
    <>
      <div className="bg-black/[0.9] mt-10 mb-4 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2 flex flex-col items-center">
          <img
            className="w-400 h-400"
            src="/cyber.png"
            alt="overlaying phone image"
          />
        </div>

        <div className="sm:col-span-12 md:col-span-9 text-base flex flex-col items-center">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className=" font-bold text-white">Highlights</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>
                  AI/ML integration: Detail the role of AI/ML algorithms in
                  anomaly detection, pattern recognition, scoring, and
                  recommendation.
                </li>
                <li>
                  Automated data collection: Describe the process of ingesting
                  data from various sources, including RAW images and other
                  formats.e
                </li>
                <li>
                  Automated analysis: Explain how the tool will automatically
                  scan and analyze data for artifacts, IOCs, and suspicious
                  activities.
                </li>
                <li>
                  Comprehensive reporting: Discuss the ability to generate
                  detailed reports in various formats for analysis and
                  documentation.
                </li>
              </ol>
            </div>

            <div>
              <p className="font-bold text-white">Benefits</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>
                  Efficiency and Speed: Quantify the potential time savings and
                  increased efficiency that the tool will bring to
                  investigations.
                </li>
                <li>
                  Accuracy and Reliability: Discuss how the tool will improve
                  the accuracy and reliability of forensic analysis through
                  automation and AI/ML.
                </li>
                <li>
                  Scalability: Explain how the tool can handle large datasets
                  and adapt to evolving threat landscapes.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
