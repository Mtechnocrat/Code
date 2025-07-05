import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data =useLoaderData();// automatically gives the value 
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Mtechnocrat')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data); // after fetching date we should store data in the varibale
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center text-3xl m-4 bg-indigo-800 text-white p-4'>Github :{data.followers}
    <img src={data.avatar_url} alt="Git Picture"  width={300}/>
    </div>
  )
}

export default Github

export const gitHubInfo= async () => {
    const reponse=await fetch('https://api.github.com/users/Mtechnocrat');
    return reponse.json();
}