import React from "react";
import logo from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/channels4_profile.jpg"
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";


export default function RegisterComponent()
{
    const [name,setname]=useState("")
    const [email,setEmail]=useState("")
    const [pwd,setpwd]=useState("")
    const [state,setstate]=useState(true)

    const showpswd=(e)=>{
        setstate(!state)
    }

    const handleSubmit = async (e) => {
    e.preventDefault();  
    const data={name:name , email:email , pwd:pwd}

    try{
        const response=await fetch('http://127.0.0.1:8000/register/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),
        });
        const result=await response.json()

        if (result.error==='UNIQUE constraint failed: auth_user.username'){
            alert("EMAIL ALREADY REGISTERED")
        }
        else if (!response.ok) {
            alert(result.message || result.error);
        } 
        else {
            alert(result.message);
        }
    }
    catch(error){
        console.log(error);
    }
}
    return(
        <div className="h-screen w-screen flex items-center flex-col bg-[#F0F4F9]">
        <div className="mt-[155px] rounded-[31px] flex flex-col h-[420px] w-[1110px] bg-[#FFFFFF]">
            <img className="ml-[30px] mt-[30px] rounded-2xl  h-[50px] w-[60px]" src={logo} alt="Company Logo"></img>
            
            <div className="flex flex-row">

            <div className="mt-[20px] ml-[35px] flex flex-col">
                <span className="text-[37px] font-sans font-thin">Create a Google Account</span>
                <span className="mt-[15px] text-[17px] font-sans font-normal">Enter Your Details</span>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="ml-[160px] mt-[40px] space-y-[10px] flex flex-col">
                <input  onChange={(e)=>setname(e.target.value)} placeholder="Full Name" className="px-[20px] h-[60px] w-[480px] border-solid border-[1px] rounded-[5px] border-black"/>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Or Phone" className="px-[20px] h-[60px] w-[480px] border-solid border-[1px] rounded-[5px] border-black"/>
                <input  onChange={(e)=>setpwd(e.target.value)} type={state?"password":"text"} placeholder="Password" className="px-[20px] h-[60px] w-[480px] border-solid border-[1px] rounded-[5px] border-black"/>
                <div className="h-[40px] flex flex-row space-x-[10px]">
                    <input type="checkbox" className="h-[30px]" 
                    onClick={showpswd}
                    />
                    <span className="mt-1">Show Password</span>
                </div>
                <div className="ml-[350px] flex flex-row space-x-[20px]">
                <button type="submit" className="text-[#0957D0]"><Link to="/login">Login</Link></button>
                <button type="submit" className=" bg-blue-600 w-[70px] h-[30px] rounded-3xl text-white"><Link to="/">Next</Link></button>
                </div>
            </div>
            </form>
            </div>

        </div>
        </div>
    )
}

