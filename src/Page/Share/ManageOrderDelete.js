import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderDelete = ({ manageOrderDelete,  setManageOrderDelete, refetch }) => {

  const handleDeleteUser = (id) => {
    fetch(`https://manufacturer-myself.up.railway.app/manageorderdelete/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        toast.success(`successfully Delete ${manageOrderDelete.name}'s order`)
        refetch()
        console.log("deleted data")
      })
    
      setManageOrderDelete(null)
  }

  return (

    <div>

      <input type="checkbox" id="manage-order-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">you are sure delete the user {manageOrderDelete.email} ??</h3>
      
          <div className="modal-action">
            <button  onClick={() => handleDeleteUser(manageOrderDelete?._id)} className='btn btn-sm'>Yes</button>
            <label htmlFor="manage-order-delete" className="btn btn-sm">No</label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ManageOrderDelete;