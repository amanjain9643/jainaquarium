import React from "react";
import logo from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/channels4_profile.jpg"
export default function ContactUs(){
    return(
        <div className="flex flex-col items-center mt-[50px] space-y-[40px]">
            <img src={logo} className="h-[60px] w-[60px] rounded-xl" alt="aman"></img>
            <span className="font-sans font-semibold text-[50px]">JainS Support</span>
            <span className="font-sans font-semibold text-[20px]">Need help? Start here</span>
            <div className="flex flex-row space-x-[50px]">
                <div className="flex flex-col ">
                     <img src={logo} className="size-[100px]" alt="jain"></img>
                    <span>FISH FOOD</span>
                </div>
                <div className="flex flex-col">
                        <img src={logo} className="size-[100px]" alt="jain"></img>
                        <span>FILTER</span>
                    </div>
                    <div className="flex flex-col">
                        <img src={logo} className="size-[100px]" alt="jain"></img>
                        <span>AIR PUMP</span>
                    </div>
                    <div className="flex flex-col">
                        <img src={logo} className="size-[100px]" alt="jain"></img>
                        <span>AQUARIUM</span>
                    </div>
            </div>

        </div>
    )

}