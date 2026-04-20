import React from "react";
import {Link } from "react-router-dom";
import { createContext ,useContext} from "react";

import { AuthContext } from "../App";

export const showProdContext=createContext()
export default function Navbar({ setShowProducts })
{

    const handlefalse=()=>{
        setShowProducts(false)
    }
    const {loggedin,setloggedin}=useContext(AuthContext)
    return(
        <div className="h-[50px] w-full bg-red-600 flex justify-center" >
            <ul className="flex flex-row pt-[10px] space-x-[200px]">
                <li><Link  onMouseEnter={handlefalse} to="/home">Home</Link></li>
                <li><Link  onMouseEnter={handlefalse} to="/community">Community</Link></li>
                <li><Link to={"/products"} onClick={()=>setShowProducts(false)} onMouseEnter={()=>setShowProducts(true)} 
                    >Products</Link></li>
                <li><Link  onMouseEnter={handlefalse} to="/contactus">ContactUs</Link></li>
                {loggedin?
                (<li><button  onMouseEnter={handlefalse} onClick={
                        ()=>{
                            console.log("logout clicked");
                    fetch("http://localhost:8000/logout/",{
                        credentials:"include"
                    }).then(()=>{setloggedin(false);
                });}}
                 >Logout</button></li>)
                :
                (<li><Link onMouseEnter={handlefalse}  to="login/">Login</Link></li>)
            }
            </ul>
        </div>
    )
}