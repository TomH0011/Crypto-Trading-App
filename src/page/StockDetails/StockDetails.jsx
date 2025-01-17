import { Avatar, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const StockDetails = () => {
  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 justify-center'>

          <Avatar>
            <AvatarImage 
            src = {'https://cryptologos.cc/logos/ethereum-eth-logo.png'}/>
          </Avatar>

        </div>
      </div>
    </div>
  )
}

export default StockDetails