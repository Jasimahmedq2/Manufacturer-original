import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ productDelete, setProductDelete,  services, setServices}) => {



  const handleDelete = (id) => {

    const presentData = services.filter(service => service._id !== productDelete._id)
    setServices(presentData)

    fetch(`https://tools-manufacturer.onrender.com/service/${id}`, {
      method: 'DELETE',

      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
      })
      setProductDelete(null)

  }

return (

  <div>

    <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">you are sure delete your order ??</h3>

        <div className="modal-action">
          <button onClick={() => handleDelete(productDelete?._id)} className='btn btn-sm'>Yes</button>
          <label htmlFor="product-delete-modal" className="btn btn-sm">No</label>
        </div>
      </div>
    </div>
  </div>

);
};

export default ProductDeleteModal;