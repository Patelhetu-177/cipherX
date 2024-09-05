"use client";
import { WavyBackground } from "./ui/wavi-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Dhruv Bhatt",
    designation: "Group Leader",
    image: "/user.png",
  },
  {
    id: 2,
    name: "Krishna Pandya",
    designation: "Blockchain",
    image: "/user.png",
  },
  {
    id: 3,
    name: "Parshad Kyada",
    designation: "Cyber Security",
    image: "/user.png",
  },
  {
    id: 4,
    name: "Ananta Nadapara",
    designation: "Cyber Security",
    image: "/user.png",
  },
  {
    id: 5,
    name: "Tirth Doshi",
    designation: "AI/ML",
    image: "/user.png",
  },
  {
    id: 6,
    name: "Hetu Patel",
    designation: "Web Developer",
    image: "/user.png",
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
