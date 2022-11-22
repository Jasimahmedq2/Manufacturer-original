import React from 'react';
import { toast } from 'react-toastify';

const MyOrderModal = ({ updateUser, setUpdateUser, refetch }) => {

  const handleUpdateUser = (id) => {

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
    
      setUpdateUser(null)
  }

  return (

    <div>

      <input type="checkbox" id="update-user" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">you are sure delete your order ??</h3>
      
          <div className="modal-action">
            <button onClick={() => handleUpdateUser(updateUser?._id)} className='btn btn-sm'>Yes</button>
            <label htmlFor="update-user" className="btn btn-sm">No</label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MyOrderModal;