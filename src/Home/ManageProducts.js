import React from 'react';
import useServices from '../Hooks/useServices';

const ManageProducts = () => {
  const [services, setServices] = useServices()
  const handleDelete = (id) => {
    const proceed = window.confirm('you are sure delete this?')
    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, {
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
      <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>number</th>
          <th>Name</th>
          <th>price</th>
          <th>available</th>
          <th>delete</th>
        </tr>
      </thead>

      <tbody>

        {
          services.map((service, index) => {
            return(
              <tr>
              <th></th>
              <td>{index + 1}</td>
              <td>product: {service.name}</td>
              <td>price {service.price}</td>
              <td>available: {service.available}</td>
              <td><button onClick={() => handleDelete(service._id)} className='btn btn-ghost'>delete</button></td>
            </tr>
            )
          }
          )
        }
      </tbody>
    </table>
    </div >
  );
};

export default ManageProducts;