
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

function Faq() {
  return (
    <div className='flex justify-center'>

    <div className="flex flex-col justify-center text-left  "> 
        {/* FAQ */}
        <div className="mb-4 text-3xl font-medium">Frequently asked questions</div>
        <Accordion type="single" collapsible className="w-full max-w-md">
          {/* 1st Q */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-full text-left">Can the content I generate be used for commercial purposes?</AccordionTrigger>
            <AccordionContent className="text-left">
              TO BE DONE
            </AccordionContent>
          </AccordionItem>
          {/* 2nd Q */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="w-full text-left">What types of sounds can I generate?</AccordionTrigger>
            <AccordionContent className="text-left">
              TO BE DONE
            </AccordionContent>
          </AccordionItem>
          {/* 3rd Q */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="w-full text-left">Am I charged for every request?</AccordionTrigger>
            <AccordionContent className="text-left">
              TO BE DONE
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq