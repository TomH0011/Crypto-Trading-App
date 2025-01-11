import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const PaymentDetails = () => {
  return (
    <div className=' px-20'>
      <h1 className='font-bold text-3xl py-10'>Payment Details</h1>

      <Card>
        <CardHeader>
          <CardTitle>
            NatWest
          </CardTitle>
          <CardDescription>
            ****8338
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center'>

            <p className='w-32'>A/C holder:</p>
            <p className='text-gray-400'>Tom Howard</p>

          </div>
          <div className='flex items-center'>
            <p className='w-32'>Sort Code:</p>
            <p className='text-gray-400'>54-30-23</p>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default PaymentDetails