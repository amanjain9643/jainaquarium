import React from "react";
import homep from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/homep.gif"
import arow from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/arowana.gif"
import koi from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/koi.gif"
export default function Home(){
    return(
        <div className="w-screen h-screen  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${homep})`}}>
            <span className="flex text-white text-9xl pt-[40px] pl-[240px]">JAIN AQUARIUM'S</span>
            <div className="mt-[100px] h-[200px] w-[750px] ml-[400px] flex flex-col space-y-[30px]">
                <span className="flex text-white text-2xl justify-center text-center ">WE PROVIDE EVERY SERVICES INCLUDING CLEANING , ACCESSORIES , FISHES , AQUARIUMS , AMC , AND ALL SERVICES RELATED TO AQUARIUM</span>
            </div>
            {/* <img src={homep} alt="chal" className="h-full w-full"></img>
            <img src={arow} alt="chal" className="h-full w-full"></img>
            <img src={koi} alt="chal" className="h-full w-full"></img> */}
        </div>
    )
}