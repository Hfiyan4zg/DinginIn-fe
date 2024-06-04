import React from 'react'

function Navbar() {
  return (
    <div className="flex flex-row bg-[#EEF6FF] top-0 z-20 sticky w-full p-3 px-16 justify-between">
      <div className="flex flex-row gap-3 items-center">
        <img 
        src="/logo-dingin.png"
        alt="logo"
        className="w-7 h-7 "
        />
        <h1 className="font-bold text-[18px] text-[#1E61F2] ">
          DINGIN<span className="text-[#0ACEFF]" >IN</span>
        </h1>
      </div>
      <ul className="flex flex-row items-center gap-12" >
        <li className="font-bold text-[14px] text-[#1E61F2] ">
          HOME
        </li>
        <li className="font-bold text-[14px] text-[#1E61F2] ">
          ABOUT US
        </li>
        <li className="font-bold text-[14px] text-[#1E61F2] ">
          SERVICES
        </li>
        <li className="font-bold text-[14px] text-[#1E61F2] ">
          CONTACT US
        </li>
      </ul>
    </div>
  )
}

export default Navbar