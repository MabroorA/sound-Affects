
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import demoGif from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"



import TextAnimation from "@/components/textAnimation";
import Marquee from "@/components/magicui/marquee";
import MovingCards from "@/components/movingCards";


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
      
      <MovingCards/>

    </>
  );
}