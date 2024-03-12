import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
    username: string;
    email: string;
    password: string;
};

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
      console.log(data);
      // Envie os dados do formulário para o servidor ou faça outras operações
    };
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8 space-y-6">
        <div className="mb-4">
          <label htmlFor="username" className="block font-mono text-slate-600 mb-1">Nome</label>
          <input type="text" id="name" {...register("username", { required: true })} className="border-gray-300 border rounded w-full p-2" />
          {errors.username && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
        </div>
    
        <div className="mb-4">
          <label htmlFor="email" className="block font-mono text-slate-600 mb-1">Email</label>
          <input type="email" id="email" {...register("email", { required: true })} className="border-gray-300 border rounded w-full p-2" />
          {errors.email && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-mono text-slate-600 mb-1">Telefone</label>
          <input type="text" id="password" {...register("password", { required: true })} className="border-gray-300 border rounded w-full p-2" />
          {errors.password && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
        </div>
    
        <button type="submit" className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-4 rounded">Enviar</button>
      </form>
    );
  };

export default SignUpForm;  