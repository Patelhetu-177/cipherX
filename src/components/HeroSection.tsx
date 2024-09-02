import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] bg-black w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1>
        <TypewriterEffectSmooth
          words={[
            {
              text: "",
            },
            {
              text: "Enhance Forensic Efficiency",
              className:
                "mt-20 md:mt-0 text-4xl md:text-7xl font-white font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
            },
          ]}
          className=""
        />
        </h1>

        {/* </TypewriterEffectSmooth> */}
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Unveil the future of digital forensics with a tool specifically
          designed to enhance investigative efficiency. Our innovative platform
          allows for seamless evidence importation, automated data analysis, and
          comprehensive reporting. Investigators can effortlessly scan system
          logs, network activity, and files to identify indicators of compromise
          (IOCs) with the aid of cutting-edge AI/ML algorithms.
        </p>
        <div className="mt-4">
          <Link href={"/configure/upload"}>
            <Button
              borderRadius="1.75rem"
              className=" dark:bg-black  dark:text-white border-slate-200 dark:border-slate-800"
            >
              Start Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
