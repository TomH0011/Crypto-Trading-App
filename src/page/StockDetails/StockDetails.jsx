import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from '@radix-ui/react-icons'
import { Dialog, DialogTrigger, DialogTitle, DialogContent, DialogHeader } from '@/components/ui/dialog'
import TradingForm from './TradingForm' // Import TradingForm component
import React from 'react'
import StockChart from '../Home/Home/StockChart'

const StockDetails = () => {
  return (
    <div className='p-5 mt-5 relative'>
      {/* Buttons in the top-right corner */}
      <div className='absolute top-5 right-5 flex flex-col items-end gap-4'>
        {/* Bookmark Button */}
        <Button>
          {true ? (
            <BookmarkFilledIcon className='h-6 w-6' />
          ) : (
            <BookmarkIcon className='h-6 w-6' />
          )}
        </Button>

        {/* Trade Button */}
        <Dialog>
          <DialogTrigger>
            <Button size='lg'>
              Trade
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How Much Do You Want To Purchase?</DialogTitle>
            </DialogHeader>
            {/* Place TradingForm inside the DialogContent */}
            <TradingForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Content */}
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-5'>
          <Avatar>
            <AvatarImage
              src={'https://cryptologos.cc/logos/ethereum-eth-logo.png'}
            />
          </Avatar>
          <div className='flex items-center gap-2'>
            <p>BTC</p>
            <DotIcon className='text-gray-400' />
            <p className='text-gray-400'>Bitcoin</p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-xl font-bold'>£1234</p>
          <p className='text-red-600'>
            <span>-1219049822.578</span>
            <span> (-0.29803%)</span>
          </p>
        </div>
      </div>
      <div className='mt-14'>
      <StockChart/>
      </div>
    </div>
  )
}

export default StockDetails
