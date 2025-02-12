import Image from "next/image";
import Link from "next/link";
import about from "@/public/about.jpg";
import Stats from "./Stats";
export default function AboutUs() {
  return (
    <>
      <div className="mx-[150px] flex gap-10">
        <Image src={about} alt="about" className="w-[450px]  " />
        <div className="s">
          <header className="text-[35px] font-bold underline underline-offset-8 decoration-violet-600 decoration-4">
            About Us
          </header>
          <p className="my-2 text-[18px] text-gray-500">
            Welcome to Dotumedia Agency, where creativity meets strategy to
            amplify your digital presence. We specialize in social media content
            creation, voice-over work, thumbnail design, and video editing,
            helping brands stand out in a crowded digital world.
          </p>
          <header className="text-[25px] font-semibold">Who We Are</header>
          <p className="my-2 text-[18px] text-gray-500">
            Our team is driven by innovation, passion, and a commitment to
            delivering exceptional results. With a blend of cutting-edge
            technology and creative expertise, we craft tailored solutions that
            resonate with your audience and achieve your goals.
          </p>
          <header className="text-[25px] font-semibold">Our Success</header>
          <Stats />
        </div>
      </div>
    </>
  );
}
