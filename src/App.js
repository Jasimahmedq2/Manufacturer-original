import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Purchase from './Home/Purchase';
import Login from './Page/Authentication/Login';
import RequierAuth from './Page/Authentication/RequierAuth';
import SignUp from './Page/Authentication/SingUp';
import Nav from './Page/Share/Nav';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/purchase/:id' element={
          <RequierAuth>
            <Purchase></Purchase>
          </RequierAuth>
        }></Route>
        <Route path='/singup' element={
          <SignUp></SignUp>
        }></Route>
       </Routes>
       <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
