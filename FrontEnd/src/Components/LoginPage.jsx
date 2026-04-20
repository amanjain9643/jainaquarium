import React from "react";
import logo from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/channels4_profile.jpg"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";


export default function LoginComponent()
{
    const {setloggedin}=useContext(AuthContext)
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [pwd,setpwd]=useState("")
    const [state,setstate]=useState(true)
    const [valid,setvalid]=useState(true)


     const showpswd=(e)=>{
        setstate(!state)
    }

    const handleSubmit = async (e) => {
    e.preventDefault();  
    const data={email:email , pwd:pwd}
    
    try{
        const response = await fetch("http://localhost:8000/login/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "include",
            body:JSON.stringify(data)
        })

        const result=await response.json()
        if (result.message === 'LOGIN SUCCESSFUL')
        {
            setloggedin(true)
            navigate('/products')
            setvalid(true)
        }
        else
        {
            setvalid(false)
        }
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
    }
    return(
        <div className="h-screen w-screen flex items-center flex-col bg-[#F0F4F9]">
        <div className="mt-[155px] rounded-[31px] flex flex-col h-[420px] w-[1110px] bg-[#FFFFFF]">
            <img className="ml-[30px] mt-[30px] rounded-2xl  h-[50px] w-[60px]" src={logo} alt="Company Logo"></img>
            
            <div className="flex flex-row">

            <div className="mt-[20px] ml-[35px] flex flex-col">
                <span className="text-[37px] font-sans font-thin">Sign in</span>
                <span className="mt-[15px] text-[17px] font-sans font-normal">with your Google Account. This account will be available to other<br/> Google apps in the browser.</span>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="ml-[60px] mt-[40px] flex flex-col space-y-[10px]">
                <input  onChange={(e)=>setEmail(e.target.value)} placeholder="Email Or Phone" className="px-[20px] h-[60px] w-[480px] border-solid border-[1px] rounded-[5px] border-black"/>
                <input  onChange={(e)=>setpwd(e.target.value)} type={state?"password":"text"} placeholder="Password" className="px-[20px] h-[60px] w-[480px] border-solid border-[1px] rounded-[5px] border-black"/>
                <div className="h-[40px] flex flex-row space-x-[10px]">
                    <input type="checkbox" className="h-[30px]" 
                    onClick={showpswd}
                    />
                    <span className="mt-1">Show Password</span>
                </div>
                <h4 className={valid?"hidden":"text-red-500"}>ENTER VALID DETAILS</h4>
                <a href="/" className="mt-[10px] text-blue-700">Forgot Email?</a>
                <div className="ml-[270px] my-[130px] flex flex-row">
                <button className="text-[#0957D0]"><Link to="/register">Create Account</Link></button>
                <button type="submit" className="ml-[40px] bg-blue-600 w-[70px] h-[40px] rounded-3xl text-white">Next</button>
                </div>
            </div>
            </form>


            </div>

        </div>
        </div>
    )
}

