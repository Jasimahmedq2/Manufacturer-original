import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({ deleteUserModal,  setDeleteUserModal, refetch }) => {

  const handleDeleteUser = (email) => {
    fetch(`https://manufacturer-myself.up.railway.app/user/${email}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        toast.success('successfully delete user')
        refetch()
        console.log(data)
      })
    
      setDeleteUserModal(null)
  }

  return (

    <div>

      <input type="checkbox" id="Delete-User-Modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">you are sure delete the user {deleteUserModal.email} ??</h3>
      
          <div className="modal-action">
            <button  onClick={() => handleDeleteUser(deleteUserModal?.email)} className='btn btn-sm'>Yes</button>
            <label htmlFor="Delete-User-Modal" className="btn btn-sm">No</label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DeleteUserModal;