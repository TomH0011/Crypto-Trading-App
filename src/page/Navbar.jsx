import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {DragHandleHorizontalIcon} from '@radix-ui/react-icons'


export const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-50 sticky top-0 left-0 right-0 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
      <Sheet>
        <SheetTrigger></SheetTrigger>
          <button 
            variant = "ghost" 
            size = "icon" 
            className='rounded-full h-11 w-11'
          >
            <DragHandleHorizontalIcon className = 'h-7 w-7'/>
          </button>
        <SheetContent 
        className = "w-72 border-r-0 flex flex-col justify-center" 
        side = "left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      </div>
    </div>
  )
}
