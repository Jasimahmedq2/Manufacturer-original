import React from 'react';
import { useState } from 'react';
import ProductDeleteModal from '../../Share/PruductDelete';

import useServices from '../../../Hooks/useServices';

const ManageProducts = () => {
  const [services, setServices] = useServices()
  const [productDelete, setProductDelete] = useState(null)

 
  return (
    <div>
    <div className='overflow-x-auto'>
      <table className="table w-full">
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
              <td className='text-sm font-serif lg:text-xl'> {service.name}</td>
              <td className='text-xl leading-tight'> {service.price}</td>
              <td className='text-xl font-bold'> {service.available}</td>
            <td>
            <label onClick={() => setProductDelete(service)} htmlFor="product-delete-modal" className="btn">delete</label>
            </td>
        
            </tr>
            )
          }
          )
        }
      </tbody>
    </table>
    </div>
  {
    productDelete && <ProductDeleteModal
    productDelete={productDelete}
    setProductDelete={setProductDelete}
    services={services}
    setServices={setServices}
    ></ProductDeleteModal>
  }
    </div >
  );
};

export default ManageProducts;