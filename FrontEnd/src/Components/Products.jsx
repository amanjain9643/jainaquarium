import React, {  useEffect, useState } from "react";
import logo from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/channels4_profile.jpg"
import koi from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/homep.gif"
import { useSearchParams } from "react-router-dom";

export default function Products()
{
    // const {loggedin}=useContext(AuthContext)
    // console.log(loggedin);
    const [searchparams]=useSearchParams();
    const ctg=searchparams.get("category")|| ""
    const sctg=searchparams.get("subcategory")|| ""
    const [dxta,setdxta]=useState([]);
    useEffect(()=>{
        const getProducts=async() => {
        const params=[]
        
        let url="http://127.0.0.1:8000/products/";
        if (ctg)params.push(`category=${ctg}`)
        if (sctg)params.push(`subcategory=${sctg}`)
        
        if (params.length>0){url+="?"+params.join("&")};
        console.log(ctg);
        console.log(sctg);
        const result=await fetch(url,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        const data=await result.json();
        setdxta(data.data)
        // console.log(dxta);
    };
        getProducts()
    },[ctg, sctg])
       
    return(
        <div className="w-[1200px] h-screen mx-[160px] bg-cover bg-center bg-no-repeat text-white pt-[40px]" 
        style={{ backgroundImage: `url(${koi})` }}
        >
                <div className="h-[100px] w-[1000px] mb-[30px]">
                    <span className="ml-[300px] text-[80px] flex justify-center">{(ctg && sctg)?sctg.toUpperCase():ctg?ctg.toUpperCase():"OUR PRODUCTS"}</span>
                </div>
                <div className="ml-[30px] grid grid-cols-5 gap-y-[40px]">
                    {dxta.map((item,index)=>(

                        // item.Poductype.toLowerCase()===ctg.toLowerCase() && (item.SubCtgry===""?true:item.SubCtgry.toLowerCase()===sctg.toLowerCase())?
                        // (
                        <div key={index} className=" border border-solid h-[220px] w-[200px]  bg-white-500 text-white space-y-[10px] px-[20px]">
                            <img className="ml-[40px] h-[50px] w-[60px]" src={logo} alt="jpg"/>
                            <div className="pt-[30px]">
                            <h6>{JSON.stringify(item.Brand)}</h6>
                            <h6>{JSON.stringify(item.Name)}</h6>
                            <h6>PRICE:₹{JSON.stringify(item.price)}</h6>
                            </div>
                        </div>
                        // ):
                        // null
                    ))}

                </div>
        </div>
    )
}