import React, { useEffect, useState } from 'react'
import getUserData from '../services/UserDataService';
import UserCard from './UserCard';

const UserLayout = () => {
    const [userData,setUserData]=useState();
    useEffect(()=>{
        const fetchdata=async()=>{
            const users = await getUserData();
            setUserData(users);
            console.log("user Data , ", users);
        }
        fetchdata();
    },[])
    useEffect(()=>{
        console.log("users ",userData);
    },[userData])
  return (
    <>
      <div className='flex flex-col justify-center align-center bg-gray-200'>
        <h1 className='text-center text-2xl font-bold pb-4'>User Directory</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center m-2 '>
        {userData?(
userData.map((user)=>{
   return <UserCard data={user}/>
})
        ):(<div>No Data</div>)}
        </div>
        </div>
      
    </>
  ) 
}

export default UserLayout;
