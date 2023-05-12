import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AdminModal from '../../Share/AdminModal';
import DeleteUserModal from '../../Share/DeleteUserModal';
import Loading from '../../Share/Loading';

const MakeAdmin = () => {
  const [adminModal, setAdminModal] = useState(null)
  const [deleteUserModal, setDeleteUserModal] = useState(null)
  const { data, isLoading, refetch } = useQuery('userData', () => fetch('https://dull-puce-basket-clam-sari.cyclic.app/user/', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  if (isLoading) {
    return <Loading />
  }


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>

            <tr>
              <th>Email</th>
              <th>MakeAdmin</th>
              <th>Delete</th>
            </tr>

          </thead>
          <tbody>
            {
              data.map(user =>  (
                <tr>
                <td>{user.email}</td>
                <td>
                {
                  !user.role ?
                  <label onClick={() => setAdminModal(user)} htmlFor="admin-modal" className="btn btn-sm ">Make Admin</label>
                  :
                  <h2 className='text-xl text-primary font-bold'>admin</h2>
                  
                }
                </td>
  

                <td><label onClick={() => setDeleteUserModal(user)} htmlFor="Delete-User-Modal" className="btn btn-sm ">delete</label></td>
              </tr>
              )
        


              )
            }



          </tbody>
        </table>

      </div>
      {
        adminModal && <AdminModal
          adminModal={adminModal}
          setAdminModal={setAdminModal}
          refetch={refetch}
        ></AdminModal>
      }
      {
        deleteUserModal && <DeleteUserModal
          deleteUserModal={deleteUserModal}
          setDeleteUserModal={setDeleteUserModal}
          refetch={refetch}
        ></DeleteUserModal>
      }
    </div >
  );
};

export default MakeAdmin;