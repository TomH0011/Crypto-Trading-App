import React from 'react';
import "./Auth.css";

const Auth = () => {
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
        {/* Add your form or content here */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
        <h1>Hello Test</h1>
        </div>
      </div>
    </div>
  );
};

export default Auth;
