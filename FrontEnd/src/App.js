import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import LoginComponent from './Components/LoginPage';
import Home from './Components/HomePage';
import RegisterComponent from './Components/RegisterPage';
import { createContext,useEffect, useState } from 'react';
import ProductMain from './Components/ProductMain';
import ContactUs from './Components/ContactUs';
import Posts from './Components/Posts';

export const AuthContext=createContext(null)
function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [loggedin,setloggedin]=useState(null)

  const checkUser= async()=>{
    console.log("working");
    try{
      const res=await fetch('http://127.0.0.1:8000/check/',{
      credentials:"include"
    })
    const data= await res.json();
    setloggedin(data.is_logged_in)
  }
  catch(err){
    console.log(err);

  }
}
  useEffect(()=>{
    checkUser();
  },[])
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{loggedin,setloggedin}}>
      <Navbar setShowProducts={setShowProducts}/>
      {showProducts && <ProductMain setShowProducts={setShowProducts}/>}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/register' element={<RegisterComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/community' element={<Posts/>}/>
      </Routes>
    </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
