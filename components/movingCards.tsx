import React from 'react'


function MovingCards() {
  return (
    <>
    
        {/* // Cards */}
        <div className='flex flex-row gap-6 '>
            {/* CARD */}
            
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 bg-slate-400'>

                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Shotgun sound</div>
                </div>
            </div>
            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 bg-slate-400'>

                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>Glass clicking in a disco party</div>
                </div>
            </div>

            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 bg-slate-400'>

                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A man screaming then falling down stairs</div>
                </div>
            </div>
            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 bg-slate-400'>

                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A man screaming then falling down stairs</div>
                </div>
            </div>
            {/* CARD */}
            <div className='h-fit w-fit'>
                <div className=' rounded-3xl h-36 w-36 bg-slate-400'>

                </div>
                <div className='pt-2'>
                    <div  className='text-sm text-gray-600 '>Prompt</div>
                    <div className='text-base text-black max-w-36'>A man screaming</div>
                </div>
            </div>
        </div>

    </>
  )
}

export default MovingCards