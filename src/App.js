import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Nav from './Page/Share/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
       </Routes>

    </div>
  );
}

export default App;
