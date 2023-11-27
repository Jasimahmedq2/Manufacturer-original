import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Purchase from "./Page/DashBoard/user/Purchase";
import Login from "./Page/Authentication/Login";
import RequierAuth from "./Page/Authentication/RequierAuth";
import SignUp from "./Page/Authentication/SingUp";
import Nav from "./Page/Share/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrder from "./Page/DashBoard/user/MyOrder";
import NotFound from "./Page/Share/NotFound";
import AddReview from "./Page/Share/AddReview";
import Dashboard from "./Page/DashBoard/Dashboard";
import AddProduct from "./Page/DashBoard/admin/AddProduct";
import ManageProducts from "./Page/DashBoard/admin/ManageProducts";
import MakeAdmin from "./Page/DashBoard/admin/MakeAdmin";
import RequireAdmin from "./Page/Authentication/RequireAdmin";
import Payment from "./Page/DashBoard/user/Payment";
import MyProfile from "./Page/DashBoard/MyProfile";
import ManageAllOrders from "./Page/DashBoard/admin/ManageAllOrders";
import Emailjs from "./Page/Share/emilJs";
import RequireUser from "./Page/Authentication/RequiereUser";
import Blog from "./Page/Share/Blog";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route
          path="purchase/:id"
          element={
            <RequierAuth>
              <RequireUser>
                <Purchase></Purchase>
              </RequireUser>
            </RequierAuth>
          }
        ></Route>
        <Route path="emailjs" element={<Emailjs />} />

        <Route
          path="dashboard"
          element={
            <RequierAuth>
              <Dashboard></Dashboard>
            </RequierAuth>
          }
        >
          <Route
            path="myorder"
            element={
              <RequireUser>
                <MyOrder />
              </RequireUser>
            }
          ></Route>
          <Route
            path="addreview"
            element={
              <RequireUser>
                <AddReview />
              </RequireUser>
            }
          ></Route>

          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />

          <Route
            path="payment/:id"
            element={
              <RequireUser>
                <Payment />
              </RequireUser>
            }
          />

          <Route index element={<MyProfile />} />

          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />

          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="singup" element={<SignUp></SignUp>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
