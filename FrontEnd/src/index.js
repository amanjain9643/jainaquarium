import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './Components/LoginPage';
import RegisterComponent from './Components/RegisterPage';
import Navbar, { showProdContext } from './Components/Navbar';
import Home from './Components/HomePage';
import ContactUs from './Components/ContactUs';
import Products from './Components/Products';
import ProductMain from './Components/ProductMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Products/> */}
    {/* <ContactUs/> */}
    {/* <RegisterComponent/> */}
    {/* <Navbar/> */}
    {/* <LoginComponent/> */}
    {/* <Home/> */}
  </React.StrictMode>
);

reportWebVitals();
