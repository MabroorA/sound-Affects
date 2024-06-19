"use client"

import Image from 'next/image'
import React, { useRef } from 'react'

import stadium from "../public/stadium.png"
import { Button } from './ui/button';
import { PlayCircle } from '@phosphor-icons/react/dist/ssr';


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
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayAudio} 
                    />
                    <Button 
                        onClick={handlePlayAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={52} color="#eeecec" weight="fill" className=' hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Stadium sound</div>
                </div>
                {/* Stadium audio */}
                <audio  ref={audioRef} src='/birds_chirping.mp3' />
            </div>
            {/* CARD */}

            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                    <Image 
                        src={stadium} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayAudio} 
                    />
                    <Button 
                        onClick={handlePlayAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={52} color="#eeecec" weight="fill" className=' hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Stadium sound</div>
                </div>
                {/* Stadium audio */}
                <audio  ref={audioRef} src='/birds_chirping.mp3' />
            </div>

            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                    <Image 
                        src={stadium} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayAudio} 
                    />
                    <Button 
                        onClick={handlePlayAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={52} color="#eeecec" weight="fill" className=' hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Stadium sound</div>
                </div>
                {/* Stadium audio */}
                <audio  ref={audioRef} src='/birds_chirping.mp3' />
            </div>

            {/* CARD */}

            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                    <Image 
                        src={stadium} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayAudio} 
                    />
                    <Button 
                        onClick={handlePlayAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={52} color="#eeecec" weight="fill" className=' hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Stadium sound</div>
                </div>
                {/* Stadium audio */}
                <audio  ref={audioRef} src='/birds_chirping.mp3' />
            </div>

            {/* CARD */}
            
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-64 md:w-64'>
                    <Image 
                        src={stadium} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayAudio} 
                    />
                    <Button 
                        onClick={handlePlayAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={52} color="#eeecec" weight="fill" className=' hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Stadium sound</div>
                </div>
                {/* Stadium audio */}
                <audio  ref={audioRef} src='/birds_chirping.mp3' />
            </div>
        </div>

    </>
  )
}

export default MovingCards