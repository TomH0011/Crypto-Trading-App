import { Form, FormField, FormMessage, FormControl, FormLabel, FormItem } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input'; // Ensure this is imported
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';


const SigninForm = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-10 py-2">
      <p className='font-bold text-2xl mb-4'>Sign In</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="JohnDoe@email.com" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} className="border w-full border-gray-700 p-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <Button type ='submit' className=' w-full py-5'>
              Submit
            </Button>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
