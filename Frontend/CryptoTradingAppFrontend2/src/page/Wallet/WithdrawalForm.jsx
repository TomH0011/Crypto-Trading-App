
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React from 'react';

const WithdrawalForm = () => {
    const [amount, setAmount] = React.useState('');
    const handleSubmit = () => {
      console.log(amount, paymentMethod);
    }
    const handleChange = (e) => {
      setAmount(e.target.value);
    };
  return (
    <div className='pt-10 space-y-5'>

      <div className='flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4'>

        <p>Available Balance</p>
        <p>$42456</p>

      </div>

      <div className='flex flex-col items-center'>
        <p> Enter Withdrawal Amount</p>

        <div className='items-center justify-center'>
          <Input
          onChange={handleChange}
          value={amount}
          className='withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center'
          placeholder='$9999'
          type='number'
          />
        </div>
      </div>
      <div>
        <p className='pb-2'>
          Transfer to...
        </p>
        <div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
          <img className='h-8 w-8' src='https://cdn-icons-png.flaticon.com/512/858/858133.png' alt='' />
          <div>
            <p className='text-xl font-bold'>Generic Bank 101</p>
            <p className='text-xs'>****8338</p>
          </div>
        </div>
      </div>
      <DialogClose className='w-full'>
        <Button onClick={handleSubmit} className='w-full py-7 text-xl'>
          Withdraw
        </Button>
      </DialogClose>
    </div>
  )
}

export default WithdrawalForm