import React, { useEffect, useState } from "react";
import like from "/Users/apple/Desktop/Work/FrontEnd/src/assets/images/icons8-facebook-like-50.png"
export default function Posts()
{ 

    const [cind,setcind]=useState({})
    const [data,setdata]=useState([])

    const [expanded,setexpanded]=useState({})

    const togglexpland=(index)=>{
        setexpanded((prev)=>({
            ...prev,[index]:!prev[index]
        }))
    }
    useEffect(() => {
        const retrieveData = async () => {
            try{
            const res=await fetch("http://localhost:8000/getposts/",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
                const data=await res.json();
                setdata(data.data)
                console.log(data);
        }
        catch(e)
        {
            console.log(e);
        }
    }
    retrieveData();
    }, [])

    const nextImage=(postindex,total)=>{
        setcind((prev)=>{
            const curr=prev[postindex]??0;
            return{
                ...prev,[postindex]:(curr+1)%total
            }
        })
    }
    const prevImage=(postindex,total)=>{
        setcind((prev)=>{
            const curr=prev[postindex]??0;
            return{
                ...prev,[postindex]:(curr-1+total)%total
            }
        })
    }
    const [content,setcontent]=useState("")
    const [files,setfiles]=useState([])

    const onsub=async(e)=>{
        e.preventDefault();
        const formData=new FormData()

        formData.append("content",content)
        for(let i =0 ; i<files.length;i++)
        {
            console.log(files[i].name);
            formData.append("file",files[i])
        }

        const res=await fetch("http://localhost:8000/upload/",{
            method:"POST",
            body:formData,
        })

        const data=await res.json();
        console.log(data);
    }
    return(
        <div className="p-5 flex flex-col items-center">
            <div className="space-y-[20px]">
                {data.map((item,index)=>(
                    <div key={index} className="flex flex-col items-center pt-[20px] space-y-[20px] bg-pink-600 w-[700px] {item.images.length?h-[400px]:h-[200px]} p-4 rounded-lg" >
                        <span>{new Date(item.datetime).toLocaleString()}</span>
                        
                    {expanded[index]?(
                        <div>
                            <span>{item.content}</span>
                            <button onClick={()=>togglexpland(index)}>...VIEW LESS</button>
                        </div>
                     ):
                     <div>
                        {item.content.length>80 &&(
                            <div>
                            <span>{item.content.slice(0,80)}</span>
                            <button onClick={()=>togglexpland(index)}>...VIEW MORE</button>
                            </div>
                        )}

                        {item.content.length<=80 &&(
                            <div>
                            <span>{item.content.slice(0,80)}</span>
                            </div>
                        )}
                    </div>
                    }

                        {item.images && item.images.length>0 && (

                            <div className="flex flex-row">

                            <button className= {item.images.length<2?"hidden ":"" } onClick={()=>prevImage(index,item.images.length)}>
                                ◀
                            </button>
                                <img src={item.images[cind[index]??0]} alt="post" className="w-[200px] h-[200px]"></img>

                            <button className={item.images.length<2?"hidden":null} onClick={()=>nextImage(index,item.images.length)}>
                                ▶
                            </button>

                        </div>

                        )}
                        <div className="flex flex-row space-x-[10px]">
                                <span >10</span>
                                <button><img className="h-[30px]" src={like} alt=""/></button>
                       </div>

                    </div>
                ))}
            </div>
            <form className="flex flex-col" onSubmit={onsub}>
            <textarea type="text" placeholder="ENTER CONTENT HERE" className="h-[250px] w-[900px]" onChange={(e)=>{setcontent(e.target.value)}}></textarea>
            <input type="file" multiple onChange={(e)=>{setfiles(e.target.files)}}></input>
            <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}