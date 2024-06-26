import {OpenAI} from 'openai';


export const runtime ="edge"
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export async function POST(request:Request){

    try {
        const { image } = await request.json();


        const overviewText = `
        Overview
        Get the most out of our Sound Effects Generator tool and learn how to create everything from blockbuster sound design for films to everyday sounds for your video game.

        It is said that audio is more important than visuals. Most people can accept bad visuals, but most can’t stand bad audio. Audio also evokes emotions and sets moods for your audience; it can be subtle, or it can be bombastic. Depending on the type of sounds and music that you use in your production, it can completely change the emotional context and meaning behind what you are trying to tell.

        However, sometimes it’s quite difficult to find that perfect sound. But it has now gotten a whole lot easier with ElevenLabs, as our sound effects generator allows you to generate any sound imaginable by inputting a prompt, streamlining the process tremendously. Of course, this is not only a great tool for independent filmmakers or indie games. It is also a fantastic resource for big productions, sound designers, and producers, because you can generate such a vast array of sounds

        We will go through some of them here in this documentation. Keep in mind that this is just scratching the surface. While the feature might seem simple at first glance, the understanding that the AI has of natural language, together with the type of sound effects it can generate, gives way to infinite possibilities.

        The general layout for sound effects is fairly straightforward. You have a window where you will input a prompt, you have some settings, and you have a generate button. When you first open the web page, you will have a few suggestions below the text box to showcase what some of the prompts might look like that you can easily try out.

        Each time you press generate, the AI will generate full variations of the prompt that you’ve given. The cost for using the sound effects generator is based on the length of the generated audio. If you let the AI decide the audio length for itself, the cost is 200 characters per generation. If you set the duration yourself, the cost is 40 characters per second.

        Prompting
        A prompt is a piece of text or instruction that communicates to the AI model what kind of response or output is expected from it. The prompt serves as a starting point or context for the AI to understand the user’s intent and generate relevant and coherent output accordingly.

        In this section, we will go through how to construct a good prompt as well as what a prompt is. We will then split these prompts into simple prompts and complex prompts. In general, simple prompts are prompting the AI to generate one sound, while complex prompts are instructing the AI to generate a series of sounds.

        The AI understands both natural language which will go into a little bit more in complex prompts but it also understands a lot of music terminology.

        Simple Prompts
        Simple prompts are just that: they are simple, one-sided prompts where we try to get the AI to generate a single sound effect. This could be, for example, “person walking on grass” or “glass breaking.” These types of prompts will generate a single type of sound effect with a few variations either in the same generation or in subsequent generations. All in all, they are fairly simple.

        There are a few ways to improve these prompts, however, and that is by adding a little bit more detail. Even if they are simple prompts, they can be made to give better output by improving the prompt itself. For example, something that sometimes works is adding details like “high-quality, professionally recorded footsteps on grass, sound effects foley.” It can require some experimentation to find a good balance between being descriptive and keeping it brief enough to have AI understand the prompt.
        `;
    
        const response = await openai.chat.completions.create({
          model: 'gpt-4o',
          max_tokens: 300,
          messages: [
            
                {
                    role: "system",
                    content: overviewText
                },
                {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Describe the image and from that create a prompt which will be used to create sound effects which will be related to the image. Return nothing but the prompt."
                },
                {
                  type: "image_url",
                  image_url: {
                    url: image,
                    detail: "high" 
                  }
                }
              ]
            },
          ],
        });
    
        const description = response.choices[0]?.message?.content || 'No description available';
    
        return new Response(JSON.stringify({ description }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error processing request' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    }