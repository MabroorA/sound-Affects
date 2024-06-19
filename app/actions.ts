"use server";
import { auth } from "@/lib/auth"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { env } from "process";


// fetch user credits
export async function getUserCredits(): Promise<number> {
    const session = await auth();
    const user = session?.user; 
    if (!user) return 0;
    
    const userData = await prisma.user.findUnique({
        where: {
            id: user.id,
            email: user.email!
        },
        select: {
            credits: true
        }
    });
    
    return userData?.credits ?? 0;
}

// Reduce user credits
export async function reduceUserCredits(): Promise<number | null> {

    try {
        const session = await auth();
        const user = session?.user;
        const userId = user?.id
        const userEmail = user?.email!

        if (!user) return null;

        const updatedUserCredits = await prisma.user.update({
            where: {
                id: userId,
                email: userEmail,
            },
            data: {
                credits: {
                    decrement: 1,
                },
            },
        });
        console.log("USER CREDITS REDUCES")
        revalidatePath("/dashboard")

        return updatedUserCredits.credits;
    } catch (error) {
        console.error('Error reducing credits:', error);
        return null;
    }
}

// GENERATE SOUND 
// https://api.elevenlabs.io/v1/sound-generation


const API_KEY = process.env.ELEVENLABS_API_KEY!;
const API_URL = process.env.ELEVENLABS_API_URL!;


interface SoundGenerationResponse {
    audio_url: string;
}

export async function generateSounds(inputText: string, durationSeconds: number, promptInfluence: number): Promise<any | null> {

    try {

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'xi-api-key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: inputText,
                duration_seconds: durationSeconds,
                prompt_influence: promptInfluence
            })
        });

        if (!response.ok) {
            throw new Error("Failed to generate sound");
          }
      
          const contentType = response.headers.get("Content-Type");
          if (!contentType || !contentType.startsWith("audio/")) {
            throw new Error("Expected audio response but received something else");
          }
      
          const buffer = await response.arrayBuffer();
          const audioData = btoa(
            new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
          );
      
          return { audio_data: audioData };

    } catch (error) {
        console.error('Error generating sound:', error);
        return null;
    }
}
