import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

type FormValues = {
  name: string;
  cellphone: string;
  email: string;
  message: string;
};

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Envie os dados do formulário para o servidor ou faça outras operações
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
    <div className="mb-4">
      <label htmlFor="name" className="block font-mono text-slate-600 mb-1">Nome</label>
      <input type="text" id="name" {...register("name", { required: true })} className="border-gray-300 border rounded w-full p-2" />
      {errors.name && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
    </div>

    <div className="mb-4">
      <label htmlFor="phone" className="block font-mono text-slate-600 mb-1">Telefone</label>
      <InputMask mask="(99) 99999-9999" {...register("phone", { required: true })} className="border-gray-300 border rounded w-full p-2">
        {(inputProps) => <input type="text" id="phone" {...inputProps} />}
      </InputMask>
      {errors.phone && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block font-mono text-slate-600 mb-1">Email</label>
      <input type="email" id="email" {...register("email", { required: true })} className="border-gray-300 border rounded w-full p-2" />
      {errors.email && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
    </div>

    <div className="mb-4">
      <label htmlFor="message" className="block font-mono text-slate-600 mb-1">Mensagem</label>
      <textarea id="message" {...register("message", { required: true })} className="border-gray-300 border rounded w-full p-2"></textarea>
      {errors.message && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
    </div>

    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Enviar</button>
  </form>
  );
}

export default ContactForm;