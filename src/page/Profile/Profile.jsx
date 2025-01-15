import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VerifiedIcon } from 'lucide-react';
import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Using grid for 2-column, 4-row layout */}
            <div className="grid grid-cols-2 gap-8">
              {/* First Column */}
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

              {/* Second Column */}
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

        <div className='mt-6'>

        <Card className="w-full">
          <CardHeader className="pb-7">
            <div className="flex items-center gap-6"> 
              <CardTitle>
                2-Step Verification
              </CardTitle>
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
            <div>
            <Dialog>
              <DialogTrigger>
                <Button>
                  Enabled Two Step Verification
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Verify Your Account</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            </div>
          </CardContent>
        </Card>


        </div>

      </div>
    </div>
  );
};

export default Profile;
