"use client"

import Image from 'next/image'
import React, { useRef } from 'react'

import stadium from "../public/stadium.png"
import { Button } from './ui/button';


function MovingCards() {

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
  return (
    <>
    
        {/* // Cards */}
        <div className='flex flex-row gap-6 '>
            {/* CARD */}
            
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                    <Image 
                        src={stadium} 
                        alt='picture' 
                        className='w-full h-full rounded-3xl cursor-pointer' 
                        onClick={handlePlayAudio} 
                    />
                    <Button 
                        onClick={handlePlayAudio} 
                        className='absolute inset-0 m-auto flex items-center justify-center bg-white  text-black rounded-3xl w-fit hover:bg-black hover:text-white'
                        >
                        Play
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Stadium sound</div>
                </div>
                <audio  ref={audioRef} src='/birds_chirping.mp3' />
            </div>
            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                    <Image src={stadium} alt='picture' className='w-full h-full rounded-3xl'/>                    
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Glass clicking in a disco party</div>
                </div>
            </div>

            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                <Image src={stadium} alt='picture' className='w-full h-full rounded-3xl'/>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A man screaming then falling down stairs</div>
                </div>
            </div>
            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                 <Image src={stadium} alt='picture' className='w-full h-full rounded-3xl'/>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A man screaming then falling down stairs</div>
                </div>
            </div>
            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                 <Image src={stadium} alt='picture' className='w-full h-full rounded-3xl'/>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A man screaming</div>
                </div>
            </div>
        </div>

    </>
  )
}

export default MovingCards