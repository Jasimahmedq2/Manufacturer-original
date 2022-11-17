import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading';

const ManageAllOrders = () => {
  const { data: manageOrders, isLoading, refetch } = useQuery('manageorders', () => fetch('https://manufacturer-myself.up.railway.app/manageorder').then(res => res.json()))
  if (isLoading) {
    return <Loading />
  }

  const handleShipped = (id) => {
    fetch(`https://manufacturer-myself.up.railway.app/shipped/${id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json()).then(result => {
      refetch()
      console.log(result)
    })

  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>status</th>
            <th>manage order</th>
          </tr>
        </thead>
        <tbody>
          {
            manageOrders.map(order => {
              return (
                <tr key={order._id}>
                  <td>{order?.name}</td>
                  <td>{order.email}</td>
                  <td>
                    {
                      !order.paid && <div className='bg-red-300 text-center p-2 rounded shadow-lg'>
                        <h2 className='text-white text-xl font-bold'>UnPaid</h2>
                      </div>

                    }
                    {
                      order.paid && !order.shipped && 
                        <div className="dropdown dropdown-left">
                          <label tabIndex={0} className="btn m-1 ">Pending</label>
                          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button
                              onClick={() => handleShipped(order._id)}
                              className='btn btn-outline'>Shipped</button></li>
                          </ul>
                        </div>
                      
                    }

                    {
                      order.shipped && <div className='bg-success text-center p-2 rounded shadow-lg'>
                        <h2 className='text-xl font-bold '>Shipped</h2>
                      </div>
                    }

                  </td>




                  <td>
                    {
                      order.paid ? <div className='bg-primary text-center rounded-xl shadow-lg'>
                        <h2 className='text-sm p-2 font-sans text-white'>Paid Success</h2>
                      </div>
                        :
                        <button className='btn btn-outline btn-sm'>delete</button>
                    }
                  </td>


                </tr>
              )
            })
          }



        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;