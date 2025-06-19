import React from 'react'

// Imported react icons
import { FaRegUser } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoKey } from "react-icons/go";

const Register = () => {
  return (
    <div className=' size-full grid place-items-center  bg-linear-to-l from-[#278783] to-[#ffedb0]'>
      <form action="" className=' h-2/3 w-1/2 grid place-items-center rounded-2xl shadow-2xl bg-linear-to-r from-[#D1E0D7] to-[#607EBC]'>

        <div className=' w-3/4 flex justify-center'>
          <p className='text-3xl font-bold text-shadow-lg/20 '>Registration Form</p>
        </div>

        <div className=' flex w-3/4 bg-white rounded-lg'>
          <span className='text-shadow-xs self-center rounded-r-lg bg-white p-2'><FaRegUser /></span>
          <input type="text" name="" id="" placeholder='Enter Name' className='flex w-[95%]  p-2 outline-none rounded-r-lg bg-white' />
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
        <span className='text-shadow-xs self-center rounded-r-lg bg-white p-2'><FaRegUserCircle /></span>
          <input type="text" name="" id="" placeholder='Enter Username' className='flex w-[95%]  p-2 outline-none rounded-r-lg bg-white'/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className='text-shadow-xs self-center rounded-r-lg bg-white p-2'><MdOutlineMail /></span>
          <input type="email" name="" id="" placeholder='Enter Email' className='flex w-[95%]  p-2 outline-none rounded-r-lg bg-white'/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className='text-shadow-xs self-center rounded-r-lg bg-white p-2'><GoKey /></span>
          <input type="password" name="" id="" placeholder='Enter Password' className='flex w-[95%]  p-2 outline-none rounded-r-lg bg-white'/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className='text-shadow-xs self-center rounded-r-lg bg-white p-2'><GoKey /></span>
          <input type="password" name="" id="" placeholder='Confirm Password' className='flex w-[95%]  p-2 outline-none rounded-r-lg bg-white'/>
        </div>

        <div className=' flex w-3/4 justify-center  bg-linear-to-r from-[dodgerblue] to-[aquamarine] text-white rounded-lg inset-ring-2'>
          <button className='p-1.5 font-extrabold  text-s tracking-widest text-black'>Register</button>
        </div>
        
      </form>
    </div>
  )
}

export default Register
