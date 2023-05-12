import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Share/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M3eNZF0hTXeKSpwKWZGxTJ2gODmzoJbN6OC1giCC8MlsZmpCyq9abfoo2i2tDRDN0OsJ5i2dKuaV3waSwfLW2yH00recRZbxr');


const Payment = () => {
  const { id } = useParams()
  const url = `https://dull-puce-basket-clam-sari.cyclic.app/purchase/payment/${id}`

  const { data: serviceInfo, isLoading, refetch } = useQuery(['payment', id], () => fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`

    }
  }).then(res => res.json()))

  console.log(serviceInfo)


  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='space-y-6'>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl">
        <div className="card-body text-left">
          <h2 className="card-title text-primary">hello {serviceInfo?.name} welcome</h2>
          <p className='text-orange-700'>please pay for {serviceInfo?.quantity} quantity <span className='text-secondary font-bold text-xl'>${parseInt(serviceInfo?.quantity * serviceInfo?.price)}</span></p>

        </div>
      </div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl">
        <div className="card-body text-left">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              serviceInfo={serviceInfo}
              refetch={refetch}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;