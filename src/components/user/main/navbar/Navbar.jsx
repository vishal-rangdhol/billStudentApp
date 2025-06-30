import React from 'react'

import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className = 'w-full h-full  '>
      <nav className = 'bg-blue-500 h-[70px] w-full flex text-2xl justify-around items-center'>
        <div><CiMenuKebab /></div>
        <div>Home</div>
        <div>Add bills</div>
        <div>Filter bills</div>
        <div>About</div>
      </nav>
    </div>
  )
}

export default Navbar
