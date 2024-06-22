"use client"

import Image from 'next/image'
import React, { useRef } from 'react'

import bird from "../public/birds.jpg"
import car from "../public/car.jpg"
import cat from "../public/kitten.jpg"
import horse from "../public/horse.jpg"
import clock from "../public/clock.jpg"
import robot from "../public/robot-moew.webp"


import { Button } from './ui/button';
import { PlayCircle } from '@phosphor-icons/react/dist/ssr';


function MovingCards() {

    const stadiumAudioRef = useRef<HTMLAudioElement | null>(null);
    const birdAudioRef = useRef<HTMLAudioElement | null>(null);
    const carAudioRef = useRef<HTMLAudioElement | null>(null);
    const catAudioRef = useRef<HTMLAudioElement | null>(null);
    const horseAudioRef = useRef<HTMLAudioElement | null>(null);
    const clockAudioRef = useRef<HTMLAudioElement | null>(null);
    const robotAudioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayStadiumAudio = () => {
        if (birdAudioRef.current) {
            birdAudioRef.current.play();
        }
    };

    const handlePlayCarAudio = () => {
        if (carAudioRef.current) {
            carAudioRef.current.play();
        }
    };
    const handlePlayCatAudio = () => {
        if (catAudioRef.current) {
            catAudioRef.current.play();
        }
    };
    const handlePlayHorseAudio = () => {
        if (horseAudioRef.current) {
            horseAudioRef.current.play();
        }
    };
    const handlePlayClockAudio = () => {
        if (clockAudioRef.current) {
            clockAudioRef.current.play();
        }
    };
    const handlePlayRobotAudio = () => {
        if (robotAudioRef.current) {
            robotAudioRef.current.play();
        }
    };

  return (
    <>
    
        {/* // Cards */}
        <div className='flex flex-row gap-6 '>
            {/* Bird CARD */}
            
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={bird} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayStadiumAudio} 
                    />
                    <Button 
                        onClick={handlePlayStadiumAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Birds chirping</div>
                </div>
                {/* Birds audio */}
                <audio  ref={birdAudioRef} src='/birds_chirping.mp3' />
            </div>
            {/* Kitten CARD */}
            
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={cat} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayCatAudio} 
                    />
                    <Button 
                        onClick={handlePlayCatAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Kitten moewing</div>
                </div>
                {/* Kitten audio */}
                <audio  ref={catAudioRef} src='/kitten-moewing.mp3' />
            </div>
            {/* CARD */}
            
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={bird} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayStadiumAudio} 
                    />
                    <Button 
                        onClick={handlePlayStadiumAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Birds chirping</div>
                </div>
                {/* Stadium audio */}
                <audio  ref={birdAudioRef} src='/birds_chirping.mp3' />
            </div>
            {/* CARD */}

            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={car} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayCarAudio} 
                    />
                    <Button 
                        onClick={handlePlayCarAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A car whizzing by</div>
                </div>
                {/* Car whizzing audio */}
                <audio  ref={carAudioRef} src='/a_car_whizzing_by.mp3' />
            </div>

            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={horse} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayHorseAudio} 
                    />
                    <Button 
                        onClick={handlePlayHorseAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Horse running</div>
                </div>
                {/* Horse running audio */}
                <audio  ref={horseAudioRef} src='/horse.mp3' />
            </div>

            {/* CARD */}

            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={robot} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayRobotAudio} 
                    />
                    <Button 
                        onClick={handlePlayRobotAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Robot saying meow</div>
                </div>
                {/* Robot saying meow audio */}
                <audio  ref={robotAudioRef} src='/robot_saying_meow.mp3' />
            </div>

            {/* CARD */}
            
            <div className='h-fit w-fit'>
                <div className='relative rounded-3xl h-36 w-36 md:h-[250px] md:w-[250px]'>
                    <Image 
                        src={clock} 
                        alt='picture' 
                        className='w-full h-full cursor-pointer rounded-3xl' 
                        onClick={handlePlayClockAudio} 
                    />
                    <Button 
                        onClick={handlePlayClockAudio} 
                        className='absolute inset-0 flex items-center justify-center m-auto bg-transparent rounded-3xl w-fit hover:bg-transparent '
                        >
                        <PlayCircle size={40} color="#eeecec" weight="fill" className='md:size-[80px] hover:text-black' />
                    </Button>
                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Clock ticking slowly</div>
                </div>
                {/* Clock ticking slowly audio */}
                <audio  ref={clockAudioRef} src='/clock_slow_ticktok.mp3' />
            </div>
        </div>

    </>
  )
}

export default MovingCards