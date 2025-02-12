import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
// import menu from "@/public/burger.svg";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-center px-4 md:hidden my-2 border-b border-blue-100">
        <div className="w-32">
          <Image src={logo} alt="logo" />
        </div>
        {/* <div className="w-8">
          <Image src={menu} alt="menu" />
        </div> */}
      </div>
      <div className="hidden md:flex justify-between px-24 py-2">
        <div className="s">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex items-center text-[19px] font-semibold">
          <ul className="flex mx-2 gap-10">
            <li className="l">Home</li>
            <li className="l">About Us</li>
            <li className="l">Service</li>
            <li className="l">Contact Us</li>
          </ul>
          <button className="rounded-lg px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-700 hover:from-purple-500 hover:to-purple-500 text-white mx-2">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
