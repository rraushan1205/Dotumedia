import Image from "next/image";
import Link from "next/link";
import web from "@/public/web.png";
import dub from "@/public/dub.png";
import graphic from "@/public/graphic.png";
import content from "@/public/content.png";
import business from "@/public/business.png";
import video from "@/public/video.png";
export default function Service() {
  const services = [
    {
      image: web,
      head: "Website Development",
      body: `Transform your digital presence with our stunning websites, 
           ensuring the site is functional, secure, and responsive across 
           devices. The goal is to provide a seamless, user-friendly 
           online experience.`,
    },
    {
      image: dub,
      head: "Professional Dubbing",
      body: `Break the language barrier by getting your videos dubbed by professionals in Hindi to capture the 700 Million Hindi Speaking Viewers in India and grow your fanbase worldwide.`,
    },
    {
      image: graphic,
      head: "Graphic Design",
      body: `Creative and detail-oriented graphic designer specializing in branding, like Youtube thumbnails, logo, posters, web design, and all those you want. Passionate about creating impactful and engaging designs.`,
    },
    {
      image: content,
      head: "Content Creation",
      body: `We craft compelling content that captivates audiences and strengthens brands. From engaging posts to dynamic campaigns, we tell your story, amplify your message, and drive impact.`,
    },
    {
      image: business,
      head: "Business Promotions Video",
      body: `We create impactful business promotion videos that captivate your audience and elevate your brand. With expert content, voice-overs, and stunning visuals, we tell your story and drive results. Let’s showcase your business like never before.`,
    },
    {
      image: video,
      head: "Video Editing",
      body: `Dotumedia Agency brings your videos to life with expert editing, smooth transitions, and stunning effects. We ensure every frame tells your story flawlessly. Let’s make your content unforgettable with our professional touch.`,
    },
  ];

  return (
    <>
      <div className="my-24">
        <header className="text-center text-[45px] font-[700]">
          Our Service
        </header>
        <div className="grid grid-cols-3 gap-10 mx-32 text-center ">
          {services.map((service, index) => (
            <div key={index} className="z-50">
              <div className="relative z-40 flex items-center border-2 border-gray-200 rounded-lg w-full py-12 px-5 text-center flex-col peer group h-[400px]">
                <Image
                  src={service.image}
                  className="w-[220px] group-hover:w-[100px] h-fit"
                  alt="web"
                />
                <header className="text-blue-500 text-[22px] font-bold">
                  {service.head}
                </header>
                <span className="absolute z-10 bottom-0 bg-gray-600 h-0 text-[0px] group-hover:text-[18px] group-hover:h-[200px] opacity-50 group-hover:opacity-100 transition-all duration-[1000ms]">
                  <p className=" text-gray-400 my-1">{service.body}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
