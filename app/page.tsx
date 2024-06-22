
import Image from 'next/image'
import vid from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"


import Marquee from "@/components/magicui/marquee";
import MovingCards from "@/components/movingCards";
import Faq from '@/components/faq';
import ShineBorder from '@/components/magicui/shine-border';
import { Button } from '@/components/ui/button';
import NumberTicker from '@/components/magicui/number-ticker';
import Footer from '@/components/footer';



export default function Home() {

  return (
    <>
      
      <div className="flex flex-col justify-center py-20 md:flex-col lg:justify-center sm:flex-col lg:py-20 ">
        <div className="flex flex-col justify-center ">
          <div className="text-center text-black ">
            <div className="mx-auto max-w-max" >
              <ShineBorder color={["#0074E1", "#FF4B5C", "#8DFFCD"]} borderWidth={4} borderRadius={10} duration={10} className="text-center bg-inherit">
                <div className="text-5xl font-extrabold md:text-6xl">
                  Breathe  life into your videos
                </div>
              </ShineBorder>
            </div>
            <p className="py-3 text-black lg:py-3 lg:pt-8 lg:text-lg sm:py-1 sm:pt-2 ">
            Generate Any Sound from Text, No More Extracting from Clips
            </p>
            <div className='flex flex-row justify-center gap-3'>
              
              <Button className='font-extrabold '>Generate for free</Button>
             
              
            </div>
            <div className='flex flex-row justify-center p-4'>
                 Users{" "}
                <div className='font-black text-md'>
                  <NumberTicker value={459} />
                </div>
                + Have heard their imaginations
                
              </div>
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
        <div className="text-3xl font-bold md:text-4xl">
        The Sound Effects You Imagine, Delivered.
        </div>
        <p className='py-3 text-black'>
          End the search for the right sound. Describe it, and we’ll create it.
        </p>
        <div className='flex justify-center'>
             <Image src={vid} alt="demo picture" className="p-3 rounded-3xl"/>
        </div>
      </div>
      
      <Faq/>
      <Footer/>

    </>
  );
}