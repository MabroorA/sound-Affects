
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import demoGif from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"



import TextAnimation from "@/components/textAnimation";


export default function Home() {

  return (
    <>
      
      <div className="flex flex-col justify-center md:flex-col lg:justify-center sm:flex-col lg:py-20 ">
        <div className="flex flex-col justify-center  ">
          <div className="text-center text-black text-middle  ">
            
            
            <h1 className="text-5xl font-extrabold  ">

                Bypass
                <TextAnimation/>
                AI DETECTION
            </h1>
            <p className="py-3 text-gray-500 lg:py-3 lg:pt-8 lg:text-lg sm:py-1 sm:pt-2 ">
            Save hours of writing in a click.
            </p>
            
          </div>
          <div className="flex  justify-center">
            <Button size="xlg" variant="default" className="text-2xl text-black rounded-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400 ">
                Get Humanize
            </Button>
          </div>
        </div>
        


      </div>
      

    </>
  );
}