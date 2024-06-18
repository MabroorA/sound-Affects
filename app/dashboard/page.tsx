
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


import CreditsComponent from "@/components/creditsComponent";
import { Button } from "@/components/ui/button";




export default async function Page() {

  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");

  }

  

  return (
    <>
      <div className="flex flex-col ">
        <h1 className='p-6 text-5xl font-black text-center text-teal-800'>
          Dashboard
        </h1>
        <div className="flex flex-row justify-center w-full ">
          
          <input type="search" className="w-3/5 h-16 p-2 border rounded-lg " placeholder="Describe your sound effect and then click generate"></input>

          <div className="flex flex-col justify-end px-2">
            <Button>Generate</Button>
          </div>
          
        </div>
        

      </div>
    </>
  )
}

