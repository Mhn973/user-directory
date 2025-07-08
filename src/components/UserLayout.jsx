import React, { useEffect, useState } from 'react'
import getUserData from '../services/UserDataService';
import UserCard from './UserCard';

const UserLayout = () => {
    const [userData,setUserData]=useState();
    const [userDataList,setUserDataList]=useState();
    const [companyList,setCompanyList]=useState();
    const [selectedValue,setSelectedValue]=useState();
    useEffect(()=>{
        const fetchdata=async()=>{
            const users = await getUserData();
            setUserData(users);
            setUserDataList(users)
            console.log("user Data , ", users);
        }
        fetchdata();
    },[])
    useEffect(()=>{
        const cList = userData?.map((user) => {
          return user.company.name;
        });
        setCompanyList(cList);
        console.log("list of companies ",cList);
    
    },[userDataList])
    const filterUsers = (value) => {
      const filteredData=userData.filter((user)=>user.name.toLowerCase().includes(value.toLowerCase()));
      console.log(filteredData);
      setUserDataList(filteredData);
    };
    const setFilteredValue=(companyName)=>
    {
        console.log("company Name, ",companyName);
        console.log("Data list,  ", userDataList)
        const filteredList = userData.filter((user) =>
          user.company.name.toLowerCase().includes(companyName.toLowerCase())
        );
        console.log("filtered list, ",filteredList);
        setUserDataList(filteredList)
        setSelectedValue(companyName);
    }
  return (
    <>
      <div className="flex flex-col justify-center align-center bg-gray-200">
        <h1 className="text-center text-2xl font-bold pb-4">User Directory</h1>
        <div className="w-100 self-center">
          <input
            type="text"
            className="bg-gray-200 border-2 border-black rounded-lg
            border-opacity-30 hover:bg-gray-300 p-0.5"
            onChange={(e) => filterUsers(e.target.value)}
            placeholder="Search User by Name"
          />
          <select value={selectedValue} className='rounded-lg border-2 border-black 
          border-opacity-30 mx-2 bg-gray-200 hover:bg-gray-300 text-center w-max p-1' onChange={(e)=>setFilteredValue(e.target.value)}>
            
            <option value="">-- Select --</option>
            {companyList?.map((framework, index) => (
              <option key={index} value={framework}>
                {framework}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center m-2 ">
          {userData ? (
            userDataList.map((user) => {
              return <UserCard data={user} />;
            })
          ) : (
            <div>No Data</div>
          )}
        </div>
      </div>
    </>
  ); 
}

export default UserLayout;
