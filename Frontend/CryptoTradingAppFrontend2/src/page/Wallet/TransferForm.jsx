import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React from 'react';

const TransferForm = () => {
  const [formData, setFormData] = React.useState({
    amount: '',
    walletId: '',
    purpose: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <p className="pb-1">Enter Amount</p>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeholder="$9999"
          type='number'
        />
      </div>

      <div>
        <p className="pb-1">Enter Wallet ID</p>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="The recipient's Wallet ID"
        />
      </div>

      <div>
        <p className="pb-1">Enter Purpose</p>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeholder="Enter the reason for your transfer..."
        />
      </div>
      <DialogClose className='w-full'>
      <Button onClick={handleSubmit} className="w-full py-7">
        Transfer
      </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
