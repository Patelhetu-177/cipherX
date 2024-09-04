"use client";
import { WavyBackground } from "./ui/wavi-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Dhruv Bhatt",
    designation: "Group Leader",
    image:
      "https://images.unsplash.com/photo-1609372254316-029635bbabe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Krishna Pandya",
    designation: "Blockchain",
    image:
    "https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Parshad Kyada",
    designation: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Ananta Nadapara",
    designation: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1620510625142-b45cbb784397?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Tirth Doshi",
    designation: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1609372254316-029635bbabe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Hetu Patel",
    designation: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1609372254316-029635bbabe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Creators() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex items-center justify-center flex-col h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
        Complete Your Investigations Faster
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
        cipherX was designed and built by...
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Creators;
