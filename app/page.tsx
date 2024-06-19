
import Image from 'next/image'
import vid from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"


import Marquee from "@/components/magicui/marquee";
import MovingCards from "@/components/movingCards";
import Faq from '@/components/faq';


export default function Home() {

  return (
    <>
      
      <div className="flex flex-col justify-center py-20 md:flex-col lg:justify-center sm:flex-col lg:py-20 ">
        <div className="flex flex-col justify-center ">
          <div className="text-center text-black text-middle ">
            
            
            <div className="text-5xl font-extrabold ">
              Breathe life into your videos
            </div>
            <p className="py-3 text-gray-500 lg:py-3 lg:pt-8 lg:text-lg sm:py-1 sm:pt-2 ">
            Generate Any Sound from Text, No More Extracting from Clips
            </p>
            
          </div>
        </div>
      </div>
      
      <Marquee pauseOnHover  >
        <MovingCards/>
      </Marquee>

      <Marquee pauseOnHover reverse>
        <MovingCards/>
      </Marquee>

      <div className="py-20 text-center">
        <div className="text-3xl font-bold">
        The Sound Effects You Imagine, Delivered.
        </div>
        <p>
          End the search for the right sound. Describe it, and we’ll create it.
        </p>
        <Image src={vid} alt="demo picture" className="p-3 rounded-3xl"/>
      </div>
      
      <Faq/>

    </>
  );
}