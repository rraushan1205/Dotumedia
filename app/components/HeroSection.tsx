import Link from "next/link";
import Image from "next/image";
import hero from "@/public/hero.png";
export default function HeroSection() {
  return (
    <>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 mx-[50px]">
        <div className="md:px-[50px] mx-[10px] py-2 md:py-10">
          <p className="border-l-4 border-red-700 px-2">Dotumedia at Service</p>
          <header className="text-start text-[30px] md:text-[50px] font-extrabold ">
            Social Media Agency and Management Expert
          </header>
          <button className="rounded-full px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-700 hover:from-purple-500 hover:to-purple-500 text-white">
            Get Started
          </button>
        </div>
        <div className="">
          <Image src={hero} className="md:w-[500px]" alt="hero" />
        </div>
      </div>
    </>
  );
}
