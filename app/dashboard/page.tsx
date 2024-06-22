"use client";
import { useEffect, useRef, useState } from 'react';
import { generateSounds, getUserCredits, reduceUserCredits } from '../actions';
import { Button } from '@/components/ui/button';
import RetroGrid from '@/components/magicui/retro-grid';


const Dashboard = () => {
  
    const [inputText, setInputText] = useState<string>('');
    const [audioData, setAudioData] = useState<string | null>(null);
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

    const handleGenerateSound = async () => {
      try {
        const durationSeconds = 3; 
        const promptInfluence = 0.5; // Adjust based on your needs
  
        const response = await generateSounds(
          inputText,
          durationSeconds,
          promptInfluence
        );
        if (response && response.audio_data) {
          setAudioData(response.audio_data);
        } else {
          console.log("Failed to generate sound");
        }
      } catch (error) {
        console.error("Error generating sound:", error);
      }
    };

    useEffect(() => {
      if (audioData && audioPlayerRef.current) {
        const audioSrc = `data:audio/mpeg;base64,${audioData}`;
        audioPlayerRef.current.src = audioSrc;
      }
    }, [audioData]);
    

    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-80">

      <input
        type="file"

        className="w-full max-w-md p-2 mb-4 text-white border border-black rounded reground bg-slate-700"
      />

      {/* <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text for sound generation"
        className="w-full max-w-md p-2 mb-4 border border-gray-300 rounded"
      /> */}
      <Button onClick={handleGenerateSound}>Generate Sound</Button>
      {audioData && (
        <div className="w-full max-w-md mt-6 text-center">
          <h2 className="mb-4 text-xl font-semibold">Generated Sound</h2>

            <audio
              ref={audioPlayerRef}
              controls
            >
              Your browser does not support the audio element.
            </audio>

        </div>
      )}
      <RetroGrid />
    </div>
    
    );
};

export default Dashboard;
