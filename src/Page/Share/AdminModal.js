import React from 'react';
import { toast } from 'react-toastify';

const AdminModal = ({ adminModal, setAdminModal, refetch }) => {

  const MakeAdminRole = (email) => {
    fetch(`https://manufacturer-myself.up.railway.app/user/admin/${email}`, {
      method: 'PUT',
      headers: {

        authorization: `Bearer ${localStorage.getItem('accessToken')}`,

        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        refetch()
        console.log(data)
      })
    toast.success('successfully make admin')
    setAdminModal(null)
  }

  return (

    <div>

      <input type="checkbox" id="admin-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">you are sure given admin access {adminModal.email} ??</h3>

          <div className="modal-action">
            <button onClick={() => MakeAdminRole(adminModal?.email)} className='btn btn-sm'>Yes</button>
            <label htmlFor="admin-modal" className="btn btn-sm">No</label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AdminModal;