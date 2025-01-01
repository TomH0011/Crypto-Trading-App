import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DotFilledIcon } from '@radix-ui/react-icons';
import React from 'react';

const TopupForm = () => {
  const [amount, setAmount] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('STRIPE');
  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  }

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className='pt-10 space-y-5'>
      <div>
        <p className='pb-1'>Enter Amount</p>
        <Input
          onChange={handleChange}
          value={amount}
          className='py-7 text-lg'
          placeholder='$9999'
          type = 'number'
        />
      </div>

      <div>
        <p className='pb-1'>Select Payment Method</p>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className='flex'
          defaultValue='STRIPE'
        >
          <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
            <RadioGroupItem
              icon={DotFilledIcon}
              className='h-9 w-9'
              value='STRIPE'
              id='r1'
            />
            <Label htmlFor='r1'>
              <div className='bg-white rounded-md px-5 py-2 w-32'>
                <img
                  src='https://banner2.cleanpng.com/20180419/ogw/avfzzgn3a.webp'
                  alt='Stripe Logo'
                  className='w-full h-auto'
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <DialogClose className='w-full'>
        <Button onClick={handleSubmit} className='w-full py-7'>
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TopupForm;
