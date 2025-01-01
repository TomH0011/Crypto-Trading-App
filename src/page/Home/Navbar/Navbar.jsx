import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import Sidebar from './Sidebar'
import { Button } from '@/components/ui/button'
import { AvatarFallback } from '@/components/ui/avatar'


export const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-50 sticky top-0 left-0 right-0 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
      <Sheet>
        <SheetTrigger>
        <Button 
            variant = "ghost" 
            size = "icon" 
            className='rounded-full p-2'
          >
            <DragHandleHorizontalIcon className = 'h-7 w-7'/>
          </Button>
        </SheetTrigger>

        <SheetContent 
        // className = "w-72 border-r-0 flex flex-col justify-center"
        className="h-full max-h-screen overflow-y-auto w-72 border-r-0 flex flex-col justify-start" 
        side = "left">
          <SheetHeader>
            <SheetTitle>
              <div className='text-3xl flex justify-center items-center gap-1'>
                <Avatar>
                  <AvatarImage src = 'https://cdn.pixabay.com/photo/2018/04/28/18/13/bitcoin-3357883_1280.png'/>
                </Avatar>
                <div>
                  <span className='font-bold text-orange-700'>Tom's </span>
                  <span>Trading</span>
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>
          <Sidebar/>
        </SheetContent>
      </Sheet>

      <p className='tesxt-sm lg:text-base cursor-pointer'>
        Tom's Trading
      </p>
      <div className='p-0 ml-9'>
        <Button variant='outline'
        className="flex items-center gap-3">
          <MagnifyingGlassIcon/>
          <span>Search</span>
        </Button>
      </div>
      </div>

      <div>
        <Avatar>
          <AvatarFallback className='p-3'>
            Tom
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
