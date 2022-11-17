import React from 'react';
import { useForm } from "react-hook-form";

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Emailjs = () => {
  const form = useRef();

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

    emailjs.sendForm('service_lfwwiwi', 'template_ldwpopu', form.current, 'YgRulTmORe8ZYcETe')
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error.text);
    });

    reset()
   toast.success(`${data.name} thanks for message hope someone contact with you immediately.`)
    console.log(data)
  };
  return (
    <div> 
    <h2 className='text-xl font-serif my-4'>contact us</h2>
 
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 tex space-y-4 justify-items-center">

        <input
          type="text"
          // name='name'
          className='input input-primary p-4 shadow rounded w-1/2'
          {...register("name", { required: true })} 
          placeholder='enter your name'
        />
        {errors.name?.type === 'required' && <p className='text-sm text-red-400 font-sans'> name is required</p>}

        <input
          type="text"
          // name='email'
          {...register("email", { required: true })} 

          className='input input-primary p-4 shadow rounded w-1/2'
          placeholder='enter your email' required
        />
        {errors.email?.type === 'required' && <p className='text-sm text-red-400 font-sans'> email is required</p>}

        <textarea
          type="text"
          // name='description'
          className='textarea resize-none input-primary p-4 shadow rounded w-1/2'
          {...register("description", { required: true })} 
          placeholder='describe your problem here'
        />
        {errors.description?.type === 'required' && <p className='text-sm text-red-400 font-sans'> describe field is required</p>}

        <input type="submit" value="submit" className='btn'/>

      </form>
    </div>
  );
};

export default Emailjs;