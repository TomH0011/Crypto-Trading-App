import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import PaymentDetailsForm from './PaymentDetailsForm';
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';

const PaymentDetails = () => {
  // Ensure you're using state only for the dialog's visibility
  const [isOpen, setIsOpen] = useState(false);

  // Open and close methods for dialog
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="px-20">
      <h1 className="font-bold text-3xl py-10">Payment Details</h1>

      {true ? (
        <Card>
          <CardHeader>
            <CardTitle>NatWest</CardTitle>
            <CardDescription>****8338</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <p className="w-32">A/C holder:</p>
              <p className="text-gray-400">Tom Howard</p>
            </div>
            <div className="flex items-center">
              <p className="w-32">Sort Code:</p>
              <p className="text-gray-400">54-30-23</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        // Dialog for adding payment details
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          {/* DialogTrigger to open the dialog */}
          <DialogTrigger asChild>
            <Button className="py-6" onClick={openDialog}>
              Add Payment Details
            </Button>
          </DialogTrigger>

          {/* Dialog Content */}
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
            </DialogHeader>

            {/* Payment form */}
            <PaymentDetailsForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PaymentDetails;
