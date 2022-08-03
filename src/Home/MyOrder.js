import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MyOrders from './MyOrders';

const MyOrder = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const LoadData = async () => {
      const email = user.email;
      const url = `https://morning-dusk-58052.herokuapp.com/purchase?email=${email}`
      const { data } = await axios.get(url)
      setOrders(data)

    }
    LoadData()
  }, [user])

  const handleDelete = (id) => {
    fetch(`https://morning-dusk-58052.herokuapp.com/purchase/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const newOrder = orders.filter(order => order._id !== id)
        setOrders(newOrder)
      })
  }

  return (
    <div>
      <h2 className='text-2xl font-bold'>total orders: {orders.length}</h2>
      <div>
        {
          orders.map((order, index) => <MyOrders
            key={order._id}
            order={order}
            index={index}
            handleDelete={handleDelete}
          ></MyOrders>)
        }
      </div>
    </div>
  );
};

export default MyOrder;