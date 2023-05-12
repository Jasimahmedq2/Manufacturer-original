import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";
import ManageOrderDelete from "../../Share/ManageOrderDelete";

const ManageAllOrders = () => {
  const [manageOrders, setManageOrder] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  // const [selected, setSelected] = useState("allDataLoad");
  const [shipped, setShipped] = useState(null)
  const [pending, setPending] = useState(null)
  const [unpaid, setUnPaid] = useState(null)

  const [manageOrderDelete, setManageOrderDelete] = useState(null);

  const { status, data, isLoading, refetch } = useQuery(
    "manageorders",
    async () => {
      const res = await fetch(
        "https://dull-puce-basket-clam-sari.cyclic.app/purchase/manageorder",
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      return res.json();
    }
  );

  useEffect(() => {
    if (status === "success") {
      setManageOrder(data);
    }
  }, [status, data]);

  if (isLoading) {
    return <Loading />;
  }

  const handleShipped = (id) => {
    fetch(`https://dull-puce-basket-clam-sari.cyclic.app/purchase/shipped/${id}`, {
      method: "PATCH",
      headers: {
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`,

        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
      });
  };

  // switch (data) {
  //   case selected === "allDataLoad":
  //     return data;

  //   case selected === "loadShipped":
  //     return data.filter((shippedD) => shippedD.shipped);

  //   case selected === "loadPending":
  //     return data.filter((pendingD) => !pendingD.shipped && pendingD.paid);

  //   case selected === "loadUnPaid":
  //     return data.filter((unpaidD) => !unpaidD.paid);

  //   default:
  //     break;
  // }

  const loadShipped = () => {
    const shippedData = data.filter(shippedD => shippedD.shipped)
    setShipped(shippedData)
    setUnPaid(null)
    setPending(null)
    setManageOrder(null)

  }

  const loadPending = () => {
    const pendingData = data.filter(pendingD => !pendingD.shipped && pendingD.paid)
    setPending(pendingData)
    setUnPaid(null)
    setShipped(null)
    setManageOrder(null)

  }

  const loadUnPaid = () => {
    const unpaidData = data.filter(unpaidD => !unpaidD.paid)
    setUnPaid(unpaidData)
    setPending(null)
    setShipped(null)
    setManageOrder(null)
  }
  const allDataLoad = () => {
    setManageOrder(data)
    setPending(null)
    setShipped(null)
    setUnPaid(null)
  }

  const handleSearchBar = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    setSearchBar(lowerCase);
  };

  const orderSearchBar = data.filter((order) => {
    console.log("order", order.email);

    return order?.email?.toLowerCase().includes(searchBar);
  });

  return (
    <div style={{ background: "#f7f6fc" }} className="px-6 py-12 ">
      <div className="sm:flex items-center justify-between">
        <div className="space-x-3">
          <button
            className="btn btn-outline"
            onClick={allDataLoad}
            // onClick={() => setSelected("allDataLoad")}
          >
            all
          </button>
          <button
            onClick={loadShipped}
            // onClick={() => setSelected("loadShipped")}
            className="btn btn-outline"
          >
            shipped{" "}
          </button>

          <button
            onClick={loadPending}
            // onClick={() => setSelected("loadPending")}
            className="btn btn-outline"
          >
            Pending
          </button>

          <button
            onClick={loadUnPaid}
            // onClick={() => setSelected("loadUnPaid")}
            className="btn btn-outline"
          >
            unpaid
          </button>
        </div>

        <div className="p-4">
          <input
            onChange={handleSearchBar}
            value={searchBar}
            type="text"
            placeholder="search by email address"
            className="input input-bordered input-lg w-full max-w-xs"
          />
        </div>
      </div>

      <div>
        <div className="space-y-10 py-6">
          {manageOrders &&
            orderSearchBar.map((order) => {
              return (
                <div
                  style={{ background: "#201548" }}
                  className="sm:flex justify-between items-center  
                  space-y-4 sm:space-y-0 sm:space-x-4   text-white p-4 rounded"
                  key={order._id}
                >
                  <div>{order?.name}</div>
                  <div>{order.email}</div>
                  <div>
                    {!order.paid && (
                      <div className="bg-red-400 text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold">unPaid</h2>
                      </div>
                    )}
                    {order.paid && !order.shipped && (
                      <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="btn m-1 ">
                          Pending
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
                        >
                          <li>
                            <button
                              onClick={() => handleShipped(order._id)}
                              className="btn btn-primary"
                            >
                              Shipped
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {order.shipped && (
                      <div className="bg-success text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold ">Shipped</h2>
                      </div>
                    )}
                  </div>

                  <div>
                    {order.paid ? (
                      <div className="bg-primary text-center rounded-xl shadow-lg">
                        <h2 className="text-sm p-2 font-sans text-white">
                          Paid Success
                        </h2>
                      </div>
                    ) : (
                      <label
                        onClick={() => setManageOrderDelete(order)}
                        htmlFor="manage-order-delete"
                        className="btn btn-sm btn-outline text-white"
                      >
                        delete
                      </label>
                    )}
                  </div>
                </div>
              );
            })}

          {shipped &&
            shipped.map((order) => {
              return (
                <div
                  style={{ background: "#201548" }}
                  className="sm:flex justify-between items-center  
                  space-y-4 sm:space-y-0 sm:space-x-4   text-white p-4 rounded"
                  key={order._id}
                >
                  <div>{order?.name}</div>
                  <div>{order.email}</div>
                  <div>
                    {!order.paid && (
                      <div className="bg-red-400 text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold">unPaid</h2>
                      </div>
                    )}
                    {order.paid && !order.shipped && (
                      <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="btn m-1 ">
                          Pending
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-white  rounded-box w-52"
                        >
                          <li>
                            <button
                              onClick={() => handleShipped(order._id)}
                              className="btn btn-primary"
                            >
                              Shipped
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {order.shipped && (
                      <div className="bg-success text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold ">Shipped</h2>
                      </div>
                    )}
                  </div>

                  <div>
                    {order.paid ? (
                      <div className="bg-primary text-center rounded-xl shadow-lg">
                        <h2 className="text-sm p-2 font-sans text-white">
                          Paid Success
                        </h2>
                      </div>
                    ) : (
                      <label
                        onClick={() => setManageOrderDelete(order)}
                        htmlFor="manage-order-delete"
                        className="btn btn-sm btn-outline text-white"
                      >
                        delete
                      </label>
                    )}
                  </div>
                </div>
              );
            })}

          {pending &&
            pending.map((order) => {
              return (
                <div
                  style={{ background: "#201548" }}
                  className="sm:flex justify-between items-center  
                  space-y-4 sm:space-y-0 sm:space-x-4   text-white p-4 rounded"
                  key={order._id}
                >
                  <div>{order?.name}</div>
                  <div>{order.email}</div>
                  <div>
                    {!order.paid && (
                      <div className="bg-red-400 text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold">unPaid</h2>
                      </div>
                    )}
                    {order.paid && !order.shipped && (
                      <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="btn m-1 ">
                          Pending
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
                        >
                          <li>
                            <button
                              onClick={() => handleShipped(order._id)}
                              className="btn btn-primary"
                            >
                              Shipped
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {order.shipped && (
                      <div className="bg-success text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold ">Shipped</h2>
                      </div>
                    )}
                  </div>

                  <div>
                    {order.paid ? (
                      <div className="bg-primary text-center rounded-xl shadow-lg">
                        <h2 className="text-sm p-2 font-sans text-white">
                          Paid Success
                        </h2>
                      </div>
                    ) : (
                      <button
                        onClick={() => setManageOrderDelete(order)}
                        className="btn btn-outline btn-sm text-white"
                      >
                        delete
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

          {unpaid &&
            unpaid.map((order) => {
              return (
                <div
                  style={{ background: "#201548" }}
                  className="sm:flex justify-between items-center  
                  space-y-4 sm:space-y-0 sm:space-x-4   text-white p-4 rounded"
                  key={order._id}
                >
                  <div>{order?.name}</div>
                  <div>{order.email}</div>
                  <div>
                    {!order.paid && (
                      <div className="bg-red-400 text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold">unPaid</h2>
                      </div>
                    )}
                    {order.paid && !order.shipped && (
                      <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="btn m-1 ">
                          Pending
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
                        >
                          <li>
                            <button
                              onClick={() => handleShipped(order._id)}
                              className="btn btn-primary"
                            >
                              Shipped
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {order.shipped && (
                      <div className="bg-success text-center p-2 rounded shadow-lg">
                        <h2 className="text-xl font-bold ">Shipped</h2>
                      </div>
                    )}
                  </div>

                  <div>
                    {order.paid ? (
                      <div className="bg-primary text-center rounded-xl shadow-lg">
                        <h2 className="text-sm p-2 font-sans text-white">
                          Paid Success
                        </h2>
                      </div>
                    ) : (
                      <label
                        onClick={() => setManageOrderDelete(order)}
                        htmlFor="manage-order-delete"
                        className="btn btn-sm btn-outline text-white"
                      >
                        delete
                      </label>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {manageOrderDelete && (
        <ManageOrderDelete
          manageOrderDelete={manageOrderDelete}
          setManageOrderDelete={setManageOrderDelete}
          refetch={refetch}
        ></ManageOrderDelete>
      )}
    </div>
  );
};

export default ManageAllOrders;
