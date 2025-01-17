import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VerifiedIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AccountVerificationForm from './AccountVerificationForm';

const Profile = () => {
  const [showOTPForm, setShowOTPForm] = useState(false); // State to toggle between views

  const handleEnableTwoStepVerification = (otpValue) => {
    console.log('Two-step verification OTP:', otpValue);
    setShowOTPForm(false); // Reset the dialog after submission
  };

  const handleSendOTP = () => {
    console.log('OTP sent to email');
    setShowOTPForm(true); // Show the OTP form
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex">
                <p className="w-[6rem]">Email: </p>
                <p className="text-gray-400">TomsTrading@email.com</p>
              </div>
              <div className="flex">
                <p className="w-[6rem]">Full Name: </p>
                <p className="text-gray-400">Tom Howard</p>
              </div>
              <div className="flex">
                <p className="w-[6rem]">Date of Birth: </p>
                <p className="text-gray-400">13/08/2003</p>
              </div>
              <div className="flex">
                <p className="w-[6rem]">Nationality: </p>
                <p className="text-gray-400">British</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-6">
                <CardTitle>2-Step Verification</CardTitle>
                {true ? (
                  <Badge className="space-x-2 text-white bg-green-600">
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="space-x-2 text-white bg-red-600">
                    <VerifiedIcon />
                    <span>Disabled</span>
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger>
                  <Button>Enable Two Step Verification</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-center">
                      {showOTPForm ? 'Enter OTP' : 'Verify Your Account'}
                    </DialogTitle>
                  </DialogHeader>
                  {!showOTPForm ? (
                    <div className="space-y-4 flex flex-col items-center">
                      <p>Email: TomsTrading@email.com</p>
                      <Button onClick={handleSendOTP}>Send OTP</Button>
                    </div>
                  ) : (
                    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
                  )}
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
