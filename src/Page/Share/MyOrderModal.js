import React from 'react';
import { toast } from 'react-toastify';

const MyOrderModal = ({ orderModal, setOrderModal, refetch }) => {

  const handleDeleteOrder = (id) => {
    console.log("ordermodal", orderModal)
    fetch(`https://manufacturer-myself.up.railway.app/purchase/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        toast.success('successfully deleted an order')
        refetch()
        console.log(data)
      })
    
      setOrderModal(null)
  }

  return (

    <div>

      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">you are sure delete your order ??</h3>
      
          <div className="modal-action">
            <button onClick={() => handleDeleteOrder(orderModal?._id)} className='btn btn-sm'>Yes</button>
            <label htmlFor="order-modal" className="btn btn-sm">No</label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MyOrderModal;