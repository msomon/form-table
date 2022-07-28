
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
      <Route path ='/' element={<Home></Home>}></Route>
      <Route path ='/home' element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
