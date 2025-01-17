import { Button } from '@/components/ui/button'
import React from 'react'
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogTitle } from '@/components/ui/dialog';
import {InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator} from '@/components/ui/input-otp'

const AccountVerificationForm = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center">
      <div className="space-y-5 mt-10 w-full">
        <div className="flex justify-between items-center">
          <p>Email: </p>
          <p>TomsTrading@email.com</p>
          <Dialog>
            <DialogTrigger>
              <Button onClick={handleSubmit}>Send OTP</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
              </DialogHeader>
              <div className="py-5 flex gap-10 justify-center items-center">
                <InputOTP maxLength={6}>
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
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationForm;
