import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

type FormValues = {
    identifier: string;
    password: string;
};

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const { signIn } = useAuth();

    const onSubmit = async (data: FormValues) => {
      signIn(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8 space-y-6">
        <div className="mb-4">
          <label htmlFor="Email" className="block font-mono text-slate-600 mb-1">Email</label>
          <input type="text" id="identifier" {...register("identifier", { required: true })} className="border-gray-300 border rounded w-full p-2" />
          {errors.identifier && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
        </div>
    
        <div className="mb-4">
          <label htmlFor="Senha" className="block font-mono text-slate-600 mb-1">Senha</label>
          <input type="password" id="password" {...register("password", { required: true })} className="border-gray-300 border rounded w-full p-2" />
          {errors.password && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
        </div>
    
    
        <button type="submit" className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-4 rounded">Enviar</button>
      </form>
    );
  };

  export default SignInForm;