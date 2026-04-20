import React from "react";
import logo from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/channels4_profile.jpg"
import { Link } from "react-router-dom";
export default function ProductMain({setShowProducts}){
    const handleClose = () => {
        setShowProducts(false);
    };
    return(
            <div className="absolute top-[50px] h-[400px] w-screen bg-red-700 flex flex-row pl-[150px]"  onMouseLeave={()=>{setShowProducts(false)}}>
                <div className="bg-white h-[300px] w-[230px] m-[30px] mt-[50px] flex flex-col justify-center pl-[50px] space-y-[20px]">
                    <span className="text-2xl text-bold">FOOD</span>
                    <Link  to='/products?category=food' onClick={handleClose}>VIEW ALL</Link>
                    <Link  to='/products?category=food&subcategory=dry' onClick={handleClose}>DRY</Link>
                    <Link  to='/products?category=food&subcategory=frozen' onClick={handleClose}>FROZEN</Link>
                    <Link to='/products?category=food&subcategory=Frozen-dried' onClick={handleClose}>FROZEN-DRIED</Link>
                    <Link to='/products?category=food&subcategory=live' onClick={handleClose}>LIVE FOOD</Link>
                </div>

                 <div className="bg-white h-[300px] w-[230px] m-[30px] mt-[50px] flex flex-col justify-center pl-[50px] space-y-[20px]">
                    <span className="text-2xl text-bold">FILTERS</span>
                    <Link to='/products?category=filter' onClick={handleClose}>VIEW ALL</Link>
                    <Link to='/products?category=filter&subcategory=hangon' onClick={handleClose}>HANG ON FILTER</Link>
                    <Link to='/products?category=filter&subcategory=internal' onClick={handleClose}>INTERNAL FILTER</Link>
                    <Link to='/products?category=filter&subcategory=sponge' onClick={handleClose}>SPONGE FILTER</Link>
                    <Link to='/products?category=filter&subcategory=canister' onClick={handleClose}>CANISTER FILTERS</Link>
                    <Link to='/products?category=filter&subcategory=sump' onClick={handleClose}>SUMP FILTERS</Link>

                </div>

                 <div className="bg-white h-[300px] w-[230px] m-[30px] mt-[50px] flex flex-col justify-center pl-[50px] space-y-[20px]">
                    <span className="text-2xl text-bold">DECORATIONS</span>
                    <Link to='/products?category=decoration' onClick={handleClose}>VIEW ALL</Link>
                    <Link to='/products?category=decoration&subcategory=stones' onClick={handleClose}>STONES</Link>
                    <Link to='/products?category=decoration&subcategory=toys' onClick={handleClose}>TOYS</Link>
                    <Link to='/products?category=decoration&subcategory=wallpapers' onClick={handleClose}>WALLPAPERS</Link>
                    <Link to='/products?category=decoration&subcategory=ARTIFICIALplants' onClick={handleClose}>ARTIFICIAL PLANTS</Link>
                </div>

                <div className="bg-white h-[300px] w-[230px] m-[30px] mt-[50px] flex flex-col justify-center pl-[50px] space-y-[20px]">
                    <Link to='/products?category=AQUARIUM' onClick={handleClose} className="text-2xl text-bold">AQUARIUMS</Link>
                    <Link><img src={logo} className="pl-[20px] h-[80px] w-[80px]" alt="yy"/></Link>
                </div>
            </div>
    )
}