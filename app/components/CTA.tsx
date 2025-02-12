import Link from "next/link";

export default function CTA() {
  return (
    <>
      <div className="flex items-center my-20 bg-[linear-gradient(30deg,_#ec4899,_#6366f1,_#ec4899)] py-[4rem] text-white flex-col">
        <h3 className="text-[16px]">So what's next?</h3>
        <h1 className="text-[45px] py-3">
          Are You Ready? Let's get the Service!
        </h1>
        <button className="rounded-lg px-5 py-2 bg-white text-black mx-2 w-fit ">
          Get Started
        </button>
      </div>
    </>
  );
}
