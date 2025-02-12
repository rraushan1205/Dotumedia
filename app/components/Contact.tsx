import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center">
        <header className="text-[35px] font-bold ">Let's Connect</header>
        <h4 className="text-[14px] text-gray-500">
          Enquire about us hassle-free
        </h4>
        <div className="form grid grid-cols-1 md:grid-cols-2 border border-gray-200 my-10">
          <input
            type="text"
            className="py-1 outline-none focus:border-red-500 bg-gray-100 rounded-xl px-2 h-[50px] w-[270px] md:w-[350px] mx-[30px] md:mx-[50px] my-[10px] md:my-[20px]  border border-gray-100 "
            placeholder="Name"
          />
          <input
            type="text"
            className="py-1 outline-none focus:border-red-500 bg-gray-100 rounded-xl px-2 h-[50px] w-[270px] md:w-[350px] mx-[30px] md:mx-[50px] my-[10px] md:my-[20px]  border border-gray-100 "
            placeholder="Email Address"
          />
          <input
            type="text"
            className="py-1 outline-none focus:border-red-500 bg-gray-100 rounded-xl px-2 h-[50px] w-[270px] md:w-[350px] mx-[30px] md:mx-[50px] my-[10px] md:my-[20px]  border border-gray-100 "
            placeholder="Subject"
          />
          <input
            type="text"
            className="py-1 outline-none focus:border-red-500 bg-gray-100 rounded-xl px-2 h-[50px] w-[270px] md:w-[350px] mx-[30px] md:mx-[50px] my-[10px] md:my-[20px]  border border-gray-100 "
            placeholder="Phone Number"
          />
          <textarea
            className="py-1 outline-none focus:border-red-500 bg-gray-100 rounded-xl px-2 h-[150px] md:h-[500px] w-[270px] md:w-[350px] mx-[30px] md:mx-[50px] my-[10px] md:my-[20px]  border border-gray-100 resize-none "
            placeholder="Your message..."
          />
          <button
            type="submit"
            className="rounded-lg px-5 py-1 bg-[linear-gradient(30deg,_#ec4899,_#6366f1,_#ec4899)] text-white h-fit self-center mx-[30px] md:mx-[50px] text-[20px] w-fit my-5 md:my-0"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
