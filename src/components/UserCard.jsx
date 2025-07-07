import React, { useState } from 'react';

export default function UserCard({data}) {
  const [viewDetails,setViewDetails]=useState(false);
    const showDetails=()=>
  {
console.log("Hello");
setViewDetails(!viewDetails);
setTimeout(()=>{
    setViewDetails(false);

},3000);
  }
    return (
      <>
        <div className="flex flex-col justify-items-center items-center rounded-md border border-solid border-black border-opacity-75 p-2 w-full max-w-xs bg-gray-300">
          <span className=" ">{data.name}</span>
          <span className="">{data.email}</span>
          <span className="">{data.company.name}</span>
          <button
            className="bg-blue-300 hover:bg-slate-400 hover:cursor-pointer rounded-lg w-max p-1"
            onClick={showDetails}
          >
            View Details
          </button>
          {viewDetails && (
            <>
              <span className="text-center">{data.address.city}</span>
              <span className="text-center">{data.phone}</span>
            </>
          )}
        </div>
      </>
    );
}
