import React from 'react';

const MyOrders = ({ order, index, handleDelete }) => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">


        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>product</th>
            <th>DELETE</th>



          </tr>
        </thead>
        <tbody>


          <tr>
            <th>{index + 1}</th>
            <td>{order?.name}</td>
            <td>{order?.productName}</td>
            <td>{order?.email}</td>
            <td>
              <div class="modal-action">


                <label for="delete-order" class="btn btn-ghost"

                >Delete</label>
              </div>

            </td>
          </tr>

        </tbody>
      </table>

      <input type="checkbox" id="delete-order" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <h3 class="font-bold text-lg">do you delete this??</h3>
          <div class="modal-action">
            <label
              onClick={() => handleDelete(order._id)}
              for="delete-order" class="btn">Yes!</label>
          </div>
        </div>

      </div>
    </div>



  );
};

export default MyOrders;