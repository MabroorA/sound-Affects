import {OpenAI} from 'openai';


export const runtime ="edge"
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export async function POST(request:Request){

    try {
        const { image } = await request.json();
    
        const response = await openai.chat.completions.create({
          model: 'gpt-4o',
          max_tokens: 300,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "What’s in this image?"
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