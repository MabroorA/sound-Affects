"use client";
import { useState } from 'react';
import { generateSounds, getUserCredits, reduceUserCredits } from '../actions';
import { Button } from '@/components/ui/button';


const Dashboard = () => {
  
    const [inputText, setInputText] = useState<string>('');
    const [audioData, setAudioData] = useState<string | null>(null);
    const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement | null>(null);

    const handleGenerateSound = async () => {
      try {
        const durationSeconds = 3; // Adjust based on your needs
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

    const handlePlayAudio = () => {
      if (audioData && audioPlayer) {
        const audioSrc = `data:audio/mpeg;base64,${audioData}`;
        audioPlayer.src = audioSrc;
        audioPlayer.play().catch((error) => {
          console.error("Failed to play audio:", error);
        });
      } else {
        console.log("No audio data available");
      }
    };

    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-80">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text for sound generation"
        className="w-full max-w-md p-2 mb-4 border border-gray-300 rounded"
      />
      <Button onClick={handleGenerateSound}>Generate Sound</Button>
      {audioData && (
        <div className="w-full max-w-md mt-6 text-center">
          <h2 className="mb-4 text-xl font-semibold">Generated Sound</h2>
          <button
            onClick={handlePlayAudio}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Play Audio
          </button>
          <audio
            ref={(ref) => setAudioPlayer(ref)}
            controls
            style={{ marginTop: "10px" }}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  
    );
};

export default Dashboard;
