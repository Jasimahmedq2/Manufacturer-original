import React, { useEffect, useState } from 'react';
import useServices from '../Hooks/useServices';

const ManageProducts = () => {
const [services, setServices] = useServices()
const handleDelete = (id) => {
  const proceed = window.confirm('you are sure delete this?')
  if(proceed){
    fetch(`https://morning-dusk-58052.herokuapp.com/service/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      const newData = services.filter(service => service._id !== id)
      setServices(newData)
    })
  }
}
  return (
    <div>
      <h2 className='text-xl font-bold'>{services.length}</h2>

      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>available</th>
      </tr>
    </thead>
    </table>
</div>
   



      {
        services.map((service, index) => <div  class="overflow-x-auto">
        <table class="table w-full"> <tbody>
          <tr>
            <th>{index + 1}</th>
            <td>product: {service.name}</td>
            <td>price {service.price}</td>
            <td>available: {service.available}</td>
            <td><button onClick={()=>handleDelete(service._id)} className='btn btn-ghost'>delete</button></td>
          </tr>
        
        </tbody>
            </table>
            </div>)
      }
    </div>
  );
};

export default ManageProducts;