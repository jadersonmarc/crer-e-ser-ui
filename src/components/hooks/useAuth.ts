import { useRouter } from 'next/router';
import { useState } from 'react';

type AuthResult = {
  error: string | null;
  isLoading: boolean;
};

type signUpValues = {
    username: string;
    email: string;
    password: string;
  };

  type signInValues = {
    identifier: string;
    password: string;
  };

const useAuth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (data: signUpValues) => {
    setIsLoading(true);
    const path = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local/register`;
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const user = await response.json();
      if (response.ok) {
        localStorage.setItem('token', user.jwt);
        router.push('/');
      } else {
        setError(user.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred during sign up');
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (data: signInValues) => {
    setIsLoading(true);
    const path = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local`;
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const user = await response.json();
      if (response.ok) {
        localStorage.setItem('token', user.jwt);
        router.push('/');
      } else {
        setError(user.message);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An error occurred during sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, signIn, isLoading, error };
};

export default useAuth;