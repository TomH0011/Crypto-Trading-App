import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const TradingForm = () => {
  const [orderType, setOrderType] = useState("Buy")
  const handleChange = () => {}

  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Enter Amount..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              4563
            </p>
          </div>
        </div>
        {false && (
          <p className="text-red-600 text-center pt-4">Insufficient Balance in Wallet</p>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <Avatar>
            <AvatarImage
              src={'https://cryptologos.cc/logos/ethereum-eth-logo.png'}
            />
          </Avatar>
          <div className="flex items-center gap-2">
            <p>BTC</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">Bitcoin</p>
          </div>
        </div>

        {/* Updated layout here */}
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold">£1234</p>
          <p className="text-red-600 text-sm">
            <span>-1219049822.578</span>
            <span> (-0.29803%)</span>
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className='flex items-center justify-between'>
        <p>{orderType == "Buy" ? "Available Cash" : "Available Quantity"}</p>
        <p>{orderType == "Buy" ? "£9000" : 23.08}</p>
      </div>
      <div>
        <Button
          className={`w-full py-6 mb-2 ${
            orderType == "Buy" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {orderType}
        </Button>
        <Button
          className="mx-auto w-32 flex items-center justify-center"
          onClick={() => setOrderType(orderType == "Buy" ? "Sell" : "Buy")}
        >
          {orderType == "Buy" ? "or Sell" : "or Buy"}
        </Button>
      </div>
    </div>
  )
}

export default TradingForm
