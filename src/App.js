import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Purchase from './Home/Purchase';
import Login from './Page/Authentication/Login';
import SignUp from './Page/Authentication/SingUp';
import Footer from './Page/Share/Footer';
import Nav from './Page/Share/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='/purchase' element={
          <Purchase></Purchase>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={
          <SignUp></SignUp>
        }></Route>
       </Routes>
       <Footer></Footer>

    </div>
  );
}

export default App;
