import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ serviceInfo, refetch }) => {
  const [cardError, setCardError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  console.log("clientSecret", clientSecret)
  const [success, setSuccess] = useState(false)
  const [pLoading, setPLoading] = useState(false)
  const stripe = useStripe();
  const elements = useElements();


  const { _id, price, quantity, name, email, transactionId } = serviceInfo

  useEffect(() => {
    fetch('https://dull-puce-basket-clam-sari.cyclic.app/payment/create-payment-intent', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
        "content-type": "application/json"
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPLoading(true)
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '')

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message)
      setSuccessMessage('')
    }

    if(pLoading){
      return <p className='text-primary text-xl'>processing</p>
    }
    else {

      const payment = {
        name: name,
        email: email,
        transactionId: paymentIntent.id
      }


      fetch(`https://dull-puce-basket-clam-sari.cyclic.app/purchase/payment/${_id}`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          "content-type": "application/json"
        },
        body: JSON.stringify(payment)

      }).then(res => res.json()).then(current => {
        console.log(current)
      })

      console.log("paymentIntent", paymentIntent)
      setSuccessMessage('your payment successfully completed')
    }
    toast.success('payment success')
    setPLoading(false)
    setSuccess(true)
    refetch()
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm btn-success mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-xs text-red-400">{cardError}</p>
      }

      {
        successMessage && <p className="text-xs text-primary">{successMessage} <span className='text-xl text-accent'>{transactionId}</span></p>
      }
    </>
  );
};

export default CheckoutForm;