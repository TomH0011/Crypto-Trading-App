import React from 'react';
import "./Auth.css";
import "./SigninForm";
import "./SignupForm";
import "./ForgotPasswordForm";
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
        <div className="bgBlur absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
          {/* <h1 className='text-6xl font-bold pb-9'>Tom's Trading</h1> */}
          {location.pathname === "/signup" ? (
            <section>
              <SignupForm />
              <div className='flex items-center justify-center mt-4'>
                <span className="pr-2">Already have an account?</span>
                <Button onClick={() => navigate("/signin")} variant='ghost'>
                  Sign In
                </Button>
              </div>
            </section>
          ) : location.pathname === "/forgot-password" ? (
            <section>
              <ForgotPasswordForm />
              <div className='flex items-center justify-center mt-4'>
                <span>Want to register a new account?</span>
                <Button 
                  onClick={() => navigate("/signup")}
                  variant='ghost'
                  className="ml-2"
                >
                  Register
                </Button>
              </div>
            </section>
          ) : (
            <section>
              <SigninForm />
              <div className='flex items-center justify-center mt-4'>
                <span className="pr-2">Don't have an account?</span>
                <Button 
                  onClick={() => navigate("/signup")}
                  variant='ghost'
                  className="ml-2"
                >
                  Register
                </Button>
              </div>

              <div className='flex justify-center mt-6'>
                <button
                  className="text-sm text-gray-400 hover:text-white underline"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
