import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <AboutUs />
      <p>hello</p>
    </>
  );
}
