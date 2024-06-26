"use client";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { generateSounds } from '../actions';
import { Button } from '@/components/ui/button';
import RetroGrid from '@/components/magicui/retro-grid';



const Dashboard = () => {
  
    const [inputText, setInputText] = useState<string>('');
    const [audioData, setAudioData] = useState<string | null>(null);
    const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
    const [image,setImage] = useState<string>("");
    const [OpenAiResponse,setOpenAiResponse] = useState<string>("");


    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);


    const handleGenerateSound = async () => {
      try {
        const durationSeconds = 3; 
        const promptInfluence = 0.5; // Adjust based on your needs
  
        const response = await generateSounds(
          description,
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
    
    async function handleSubmit(event:FormEvent<HTMLFormElement>){
      
      event.preventDefault();
      setLoading(true);
      setDescription('');
      if (image === ""){
        alert("Upload an image")
        return
      }


      try {
        const response = await fetch('/api/analyseImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image }),
        });
  
        const data = await response.json();
        setDescription(data.description);
      } catch (error) {
        console.error('Error:', error);
        setDescription('Failed to get description.');
      } finally {
        setLoading(false);
      }
      
    }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files === null){
      window.alert("No files selected")
      return;
    }
    const file = e?.target.files[0]

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string"){
        console.log(reader.result)
        setImage(reader.result )
      }

      
    }
    
    reader.onerror = (error) =>{
      console.log("reader error")
    }
  }

    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-80">



        {image !== "" ? 
            <div className='mb-4 overflow-hidden'>
              <img
              src={image}
              className='w-full object-contain max-h-72'
              />
            </div>
          :
            <div>
              <p>Once you upload an image it will be displayed here</p>
            </div>
        }
      <form onSubmit={ handleSubmit}>
        <input
          type="file"

          className="w-full max-w-md p-2 mb-4 text-white border border-black rounded reground bg-slate-700"
          onChange={handleFileChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Description'}
        </Button>
      </form>
      {description && <p>Description: {description}</p>}



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
