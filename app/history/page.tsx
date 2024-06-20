import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table'

import React from 'react'

type SoundEffectsHistory = {
    array:[],
}

function Page() {
  return (
    <div>
        <div className='flex justify-center text-4xl font-extrabold'>
            History
        </div>
        <Table>
            <TableCaption>A list of your generated Sound effects.</TableCaption>
            <TableHeader className=' hover:bg-transparent group-hover:bg-transparent'>
                <TableRow>
                <TableHead className="w-[100px]">Prompt</TableHead>
    
                <TableHead className=" text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="whitespace-nowrap font-medium">cat sounds</TableCell>

                <TableCell className=" text-right">June 19</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </div>
  )
}

export default Page