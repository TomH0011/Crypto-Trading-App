import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { ReloadIcon, UpdateIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSignIcon, DownloadIcon, ShuffleIcon, UploadIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import TopupForm from './TopupForm'
import WithdrawalForm from './WithdrawalForm'
import TransferForm from './TransferForm'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Wallet = () => {
  return (
    <div className='flex flex-col items-center'>

      <div className='pt-10 w-full lg:w-[60%] items-center flex'>

        <Card>
          <CardHeader className='pb-9'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <WalletIcon size='30px'/>
                <div>
                  <CardTitle className='text-2xl p-2'>My Wallet</CardTitle>
                  <div className='flex items-center gap-2'>
                    <p className='text-gray-200 text-sm'>
                      #A475Ed
                    </p>
                    <CopyIcon size ='20px'className='cursor-pointer hover:text-slate-300'/>
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon className='w-6 h-6 cursor-pointer hover:text-gray-400'/>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='flex items-center'>
              <DollarSignIcon/>
              <span className='text-2xl font-semibold'>
                20,000
              </span>
            </div>
            <div className='flex gap-7 mt-5'>
              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md'>
                    <UploadIcon/>
                    <span className='text-sm mt-2'>
                      Add Money
                    </span>

                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className='items-center flex justify-center'>
                      Top Up Your Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm/>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md'>
                    <DownloadIcon/>
                    <span className='text-sm mt-2'>
                      Withdraw Money
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className='items-center flex justify-center'>
                      Request Withdrawal From Your Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm/>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md'>
                    <ShuffleIcon/>
                    <span className='text-sm mt-2'>
                      Transer Funds
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className='items-center flex justify-center'>
                      Transfer to Another Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm/>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className='py-5 pt-10 lg:w-[60%] flex flex-col gap-5'>
          <div className='flex gap-2 items-center pb-5'>
            <h1 className='text-2xl font-semibold'>History</h1>
            <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-400'/>
          </div>
          <div className='space-y-5'>

          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
            <div key={i}>
              <Card className='lg:w-[90%] px-5 flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                  <Avatar>
                    <AvatarFallback>
                      <ShuffleIcon />
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-1'>
                    <p>Buy Asset</p>
                    <p className='text-sm text-gray-500'>1/1/2025</p>
                  </div>
                </div>
                <div>
                  <p className='text-green-500'>+£250 GBP</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;