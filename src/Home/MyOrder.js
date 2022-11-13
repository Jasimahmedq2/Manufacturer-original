import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrder = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const LoadData = async () => {
      const email = user.email;
      const url = `http://localhost:5000/purchase?email=${email}`
      const { data } = await axios.get(url)
      setOrders(data)

    }
    LoadData()
  }, [user])



  return (
    <div>
      <h2 className='text-2xl font-bold'>total orders: {orders.length}</h2>
      <div>


      <div class="overflow-x-auto">
      <table class="table w-full">


        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>product</th>
            <th>DELETE</th>



          </tr>
        </thead>
        <tbody>

{
  orders.map((order, index) => {
    return(   
      <tr>
      <th>{index + 1}</th>
      <td>{order?.name}</td>
      <td>{order?.productName}</td>
      <td>{order?.email}</td>
      <td>
        <div class="modal-action">
          <label for="delete-order" class="btn btn-ghost"
          >Delete</label>
        </div>

      </td>
    </tr>
    )
  })
}

        </tbody>
      </table>
      
    </div>
      </div>
    </div>
  )   
};

export default MyOrder;