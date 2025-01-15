import { Button } from '@/components/ui/button'
import React from 'react'
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogTitle } from '@/components/ui/dialog';

const AccountVerificationForm = () => {
  return (
    <div className='flex justify-center'>
      <div className='space-y-5 mt-10 w-full'>
        <div className='flex justify-between items-center'>
          <p>Email: </p>
          <p>TomsTrading@email.com</p>
          <Dialog>
            <DialogTrigger>
              <Button>

              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default AccountVerificationForm