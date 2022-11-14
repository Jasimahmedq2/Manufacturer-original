import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Page/Share/Loading';
import MyOrderModal from '../Page/Share/MyOrderModal';

const MyOrder = () => {
  const [user] = useAuthState(auth)
  const [orderModal, setOrderModal] = useState(null)

      const email = user.email;
      const url = `http://localhost:5000/purchase?email=${email}`
      const {data, isLoading, refetch} = useQuery('deleteorder', () => fetch(url).then(res => res.json()))

if(isLoading){
  return <Loading></Loading>
}


  return (
    <div>
      <div>


        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">


            <thead>
              <tr>
                <th></th>
                <th>email</th>
                <th>Total price</th>
                <th>payment</th>
                <th>DELETE</th>



              </tr>
            </thead>
            <tbody>

              {
                data.map((order, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order?.email}</td>
                      <td>{parseInt(order.price * order.quantity)}</td>
                      <td><Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-primary'>pay now</button></Link></td>
                      <td>                   
                          <label onClick={() => setOrderModal(order)} for="order-modal" class="btn btn-sm"
                          >Delete</label>
                      </td>
                    </tr>
                  )
                })
              }

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