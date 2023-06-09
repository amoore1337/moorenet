import Image from "next/image";
import profilePic from "@/components/about/profile_2.jpg";
import { InfoPill } from "@/components/about/InfoPill";

export default function About() {
  return (
    <div className="mx-[10vw] py-16">
      <div className="max-w-7xl grid grid-cols-12 gap-x-6">
        <div className="col-span-full md:col-span-5 flex flex-col items-center">
          <h2 className="text-2xl font-semibold flex items-center relative">
            About
          </h2>
          <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden flex items-center justify-center mt-6">
            <Image
              src={profilePic}
              className="max-w-none w-[400px] md:[500px]"
              alt="Profile pic"
            />
          </div>
        </div>
        <div className="col-span-full md:col-span-7 flex flex-col items-center pt-6 gap-4 md:pt-20">
          <p className="max-w-lg text-xl font-semibold">
            Hi, I&apos;m Austin Moore, I&apos;m a software engineer with a
            passion for understanding how things work and teaching others.
          </p>

          <p className="max-w-lg text-lg">
            I love building things and enjoy any opportunity to collaborate with
            others that share an interest in technology.
          </p>

          <InfoPill className="mt-4" />
        </div>
      </div>
    </div>
  );
}
