import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Share/Loading';
import MyOrderModal from '../../Share/MyOrderModal';

const MyOrder = () => {
  const [user] = useAuthState(auth)
  const [orderModal, setOrderModal] = useState(null)

  const email = user.email;
  const url = `https://tools-manufacturer.onrender.com/purchase?email=${email}`
  const { data, isLoading, refetch } = useQuery('deleteorder', () => fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  console.log(data)

  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <div>
      <div>


        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">


            <thead>
              <tr>
                <th></th>
                <th>email</th>
                <th>Total price</th>
                <th>payment</th>
                <th>manage order</th>



              </tr>
            </thead>
            <tbody>

              {
                data.map((order, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order?.email}</td>
                      <td>{order.price}</td>
                      {
                        !order.paid && <td>
                          <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-primary'>pay now</button></Link>
                        </td>
                      }
                      {
                        order.paid && <td>
                          <div className='text-sm font-bold'>
                            <p className='text-primary'>paid</p>
                            <p>transactionId: {order?.transactionId}</p>
                          </div>
                        </td>
                      }
                      <td>
                        {
                          !order.paid && <label for="order-modal"
                            onClick={() => setOrderModal(order)}
                            className="btn btn-sm"
                          >Delete</label>
                        }
                        {
                          order.shipped && <div className='bg-success rounded shadow-lg text-center p-2'>
                            <h2 className='font-bold'>Shipped</h2>
                          </div>
                        }
                        {
                        order.paid && !order.shipped && <div className='bg-red-300 rounded shadow-lg text-center p-2'>
                            <h2 className='font-bold'>Pending</h2>
                          </div>
                        }
                      </td>


                    </tr>


                  )
                }

                )}



            </tbody>
          </table>

        </div>
      </div>
      {
        orderModal && <MyOrderModal
          orderModal={orderModal}
          setOrderModal={setOrderModal}
          refetch={refetch}
        ></MyOrderModal>


      }
    </div>
  )
};

export default MyOrder;