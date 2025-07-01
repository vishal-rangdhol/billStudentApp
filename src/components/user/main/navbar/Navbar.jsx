import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { CiMenuKebab } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {

  let [show, SetShow] = useState(false)

  let handleShow = () => {
    SetShow(!show)
  }
  console.log(show);

  return (

      <nav className = {`w-full h-[80px] bg-gray-500 flex items-center justify-around text-2xl sm-max:px-8
          ${show? 'h-[210px]  flex flex-col justify-around gap-2.5 items-start p-2.5' : ""} 
          sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>
        
        <div className = 'hidden max-sm:flex '>
          {
            show? <RxCross1 onClick = {handleShow} className = ''/> : <CiMenuKebab onClick = {handleShow}/> 
          }
        </div>

        <div className = {`max-sm:${show? 'block' : "hidden"}`}>
          <NavLink to = '/home' className = {({isActive}) => isActive? "bg-amber-300 rounded-lg px-3 mg " : ""}>Home</NavLink>
        </div>

        <div className = {`max-sm:${show? 'block' : "hidden"}`}>
          <NavLink to = 'addBills' className = {({isActive}) => isActive? "bg-amber-300 rounded-lg px-2" : ""}>Add Bills</NavLink>
        </div>

        <div className = {`max-sm:${show? 'block' : "hidden"}`}>
          <NavLink to = 'filterBills' className = {({isActive}) => isActive? "bg-amber-300 rounded-lg px-2" : ""}>Filter Bills</NavLink>
        </div>

        <div className = {`max-sm:${show? 'block' : "hidden"}`}>
          <NavLink to = 'about' className = {({isActive}) => isActive? "bg-amber-300 rounded-lg px-2" : ""}>About</NavLink>
        </div>

      </nav>
    // </div>
  )
}

export default Navbar
