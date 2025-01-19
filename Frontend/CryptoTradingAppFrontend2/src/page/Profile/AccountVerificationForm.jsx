import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp';
import { DialogClose } from '@/components/ui/dialog';

const AccountVerificationForm = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <div className="flex justify-center">
      <div className="space-y-5 mt-10 w-full">
        <div className="flex flex-col items-center">
          <div className="py-5 flex gap-10 justify-center items-center">
            <InputOTP
              value={value}
              onChange={(value) => setValue(value)}
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <DialogClose>
              <Button onClick={() => handleSubmit(value)} className="w-full">
                Submit
              </Button>
            </DialogClose>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationForm;
