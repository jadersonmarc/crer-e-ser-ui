import React, { useState } from 'react';
import  SignUpForm  from '../../../components/organisms/auth/signup';
import  SignInForm  from '../../../components/organisms/auth/signin';

const AuthLayout = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 style={{ fontFamily: "Libre Baskerville" }} className="mt-6 text-center text-yellow-600 text-2xl text-3xl font-extrabold">
            {isSignUp ? 'Cadastro' : 'Login'}
          </h2>
        </div>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <div className="text-center">
          <button onClick={toggleForm} className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {isSignUp ? 'Login' : 'Cadastro'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default AuthLayout;