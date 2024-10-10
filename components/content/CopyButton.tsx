import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { BsCopy } from 'react-icons/bs'
import { IoCheckmarkOutline } from 'react-icons/io5'
export default function CopyButton({id}: {id: any}) {
    const [copy, setCopy] = useState(false)
    const [done, setDone] = useState(false)
    const handleCopy = async () => {
        const text = document.getElementById(id)?.textContent;
        try{
          await  navigator.clipboard.writeText(text!)
          setCopy(true)
        } catch(err) {
            console.log(err);
            
        }
    }
  return (
    <div onClick={handleCopy} className='hover:cursor-pointer rounded-md relative'>
      <IoCheckmarkOutline className={cn("transition-all h-5 w-5 text-blue-500", done ? "scale-100" : "scale-0")}
      onTransitionEnd={()=> {
        setTimeout(()=> {
          setCopy(false)
          setDone(false)
        }, 500)
      }}
      />
      <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center">
      <BsCopy className={cn("transition-all", copy ? "scale-0" : "scale-100")}
      onTransitionEnd={()=> {
        if(copy) {
          setDone(true)
        }
      }}
      />
      </div>
    </div>
  )
}
