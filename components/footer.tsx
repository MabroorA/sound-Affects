
import React from 'react'

function Footer() {
  return (

    <div className="flex flex-row gap-10 py-10 justify-center text-middle text-black w-full border-t-2 border-black"> 
        {/* Footer */}
        <div className="flex flex-col ">
            <div className='mb-4 text-lg font-medium text-gray-500 '>
            Getting Started
            </div>
            
            <div className='flex flex-col text-sm '>
                {/* LINKS to be added */}
                <div>
                    Sign in
                </div>
                <div>
                    Sign up
                </div>
            </div>
        </div>

        <div className='flex- flex-col'>
            <div className='mb-4 text-lg font-medium text-gray-500'>
                Resources
            </div>
            {/* LINKS to be added */}
            <div className='flex flex-col text-sm'>
                <div>
                    Guides
                </div>
                <div>
                    Prompting
                </div>
            </div>
            
        </div>
        
      </div>
  )
}

export default Footer