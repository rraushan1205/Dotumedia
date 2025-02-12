import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <p>hello</p>
    </>
  );
}
