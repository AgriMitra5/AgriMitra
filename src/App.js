import './App.css';
import Footer from './compoents/footer/Footer';
import Home from './compoents/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './compoents/Navbar/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeCarts from './compoents/HomeCarts/HomeCarts';
function App() {
  return (
    <div >
 <Navbar/>
  <Home/>
 
  <Footer/>
  <ToastContainer />
    </div>
  );
}

export default App;
