import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddProduct = () => {
const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

    
    const img = data?.image[0]
    const privateUrl = '44c26384eae4023f6064cf342eee9294'
    const formData = new FormData()
    formData.append('image', img)
    
    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      console.log("image url",result.data.url)

      const product = {
        name: data.product,
        minimum: data.minimum,
        available: data.available,
        price: data.price,
        image: result.data.url,
        title: data.title,
        email: data.email
      }
  
      fetch('https://manufacturer-myself.up.railway.app/service', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
        .then(res => res.json())
        .then(inserted => {
          console.log(inserted)
          if(inserted.insertedId){
            toast.success('successfully added new product')
          }
        })
    })
reset()
    console.log(data)
  }


 

 

  

  return (
    <div>
      <h2 className='text-xl font-bold text-secondary text-center'>{user?.displayName}  add a new product </h2>

      <form className='sm:w-1/2 w-11/12 mx-auto p-6 bg-base-100 shadow-xl rounded-lg py-12' onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 mb-6 w-full group">
          <input type="name"
            {...register("product", { required: true })}

            id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name
          </label>
          {errors.product?.type === 'required' && <p
            className='text-sm text-red-400'
            role="alert">product name is required</p>}

        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="email"
            {...register('email', { required: true })}
            id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
          {errors.email?.type === 'required' && <p
            className='text-sm text-red-400'
            role="alert">email is required</p>}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="text"
            {...register('title', { required: true })}
            id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Sort Title</label>
          {errors.title?.type === 'required' && <p
            className='text-sm text-red-400'
            role="alert">product title is required</p>}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input type="number"
              {...register('minimum', { required: true })}
              id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">minimum quantity</label>
            {errors.minimum?.type === 'required' && <p
              className='text-sm text-red-400'
              role="alert">minimum quantity is required</p>}
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input type="number"
              {...register('available', { required: true })}
              id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available quantity</label>
            {errors.available?.type === 'required' && <p
              className='text-sm text-red-400'
              role="alert">available quantity is required</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input type="number"
              {...register('price', { required: true })}
              id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">price</label>
            {errors.price?.type === 'required' && <p
              className='text-sm text-red-400'
              role="alert">product name is required</p>}
          </div>
          <div>


            <label>
              <input type="file"
                {...register('image', { required: true })}
                className="text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
            hover:file:cursor-pointer hover:file:opacity-80
          " />
            </label>
            {errors.image?.type === 'required' && <p
              className='text-sm text-red-400'
              role="alert">product name is required</p>}
          </div>
        </div>


        <input type="submit" value='submit' className="text-white  uppercase
        bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
      </form>

    </div>
  );
};

export default AddProduct;