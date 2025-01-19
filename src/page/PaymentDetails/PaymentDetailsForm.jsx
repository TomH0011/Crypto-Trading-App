import { Form, FormField, FormMessage, FormControl, FormLabel, FormDescription, FormItem } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input'; // Ensure this is imported
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';


const PaymentDetailsForm = () => {
  const form = useForm({
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input placeholder="Toms Trading" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IFSC  Code</FormLabel>
                <FormControl>
                  <Input placeholder="12-34-56" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input placeholder="12345678" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmAccountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Your Acoount Number</FormLabel>
                <FormControl>
                  <Input placeholder="Toms Trading" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input placeholder="HSBC" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose className='w-full'>
            <Button type ='submit' className=' w-full py-5'>
              Submit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
