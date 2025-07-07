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
        <div className="flex flex-col justify-center align-center rounded-md border-solid border-grey-500 border-2 p-2 w-full max-w-xs">
          <span className="text-center ">{data.name}</span>
          <span className="text-center">{data.email}</span>
          <span className="text-center">{data.company.name}</span>
          <button
            className="bg-blue-300 hover:bg-slate-400 hover:cursor-pointer rounded w-100 justify-self-center"
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
