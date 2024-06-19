
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import vid from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"



import TextAnimation from "@/components/textAnimation";
import Marquee from "@/components/magicui/marquee";
import MovingCards from "@/components/movingCards";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


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
      <MovingCards/>

      <div className="py-20 text-center">
        <div className="text-3xl font-bold">
        The Sound Effects You Imagine, Delivered.
        </div>
        <p>
          End the search for the right sound. Describe it, and we’ll create it.
        </p>
        <Image src={vid} alt="demo picture" className="p-3 rounded-3xl"/>
      </div>
      
      {/* FAQ */}
      <div className="flex flex-col justify-center text-left "> 
        {/* FAQ */}
        <div className="mb-4 text-3xl font-medium">Frequently asked questions</div>
        <Accordion type="single" collapsible className="w-full max-w-md">
          {/* 1st Q */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-full text-left">Can the content I generate be used for commercial purposes?</AccordionTrigger>
            <AccordionContent className="text-left">
              TO BE DONE
            </AccordionContent>
          </AccordionItem>
          {/* 2nd Q */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="w-full text-left">What types of sounds can I generate?</AccordionTrigger>
            <AccordionContent className="text-left">
              TO BE DONE
            </AccordionContent>
          </AccordionItem>
          {/* 3rd Q */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="w-full text-left">Am I charged for every request?</AccordionTrigger>
            <AccordionContent className="text-left">
              TO BE DONE
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </>
  );
}