import React, { useState } from 'react'

// Imported react icons
import { FaRegUser } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoKey } from "react-icons/go";

const Register = () => {
  let [formData, setFormData] = useState({
    // username : "",
    // password : "",  hard code!!!
    // name : "",
    // email : "",
    })

  let handleChange = (e) => {
    let {name, value} = e.target
    setFormData((preVal) => ({...preVal, [name] : value}))
  }

  let handelSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  
  

  return (
    <div className=' size-full grid place-items-center  bg-linear-to-l from-[#278783] to-[#ffedb0]'>

      <form action="" 
        className=' h-[80%] w-1/2 grid place-items-center rounded-2xl shadow-2xl bg-linear-to-r from-[#607EBC] to-[#D1E0D7] max-sm:w-[80%] gap-y-1 '
        onSubmit={handelSubmit}
      >

        <div className='size-3/4 grid place-items-center'>
          <h1 className='text-4xl font-bold text-shadow-lg/20 max-sm:text-2xl'>Registration Form</h1>
        </div>

        <div className=' flex w-3/4 bg-white rounded-lg'>
          <span className=' self-center rounded-r-lg bg-white p-2'><FaRegUser /></span>
          <input 
            type="text" 
            name="name" 
            placeholder='Enter Name' 
            className='flex w-[95%] h-[3.5em] p-2 outline-none rounded-r-lg bg-white' 
            onChange = {handleChange}/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className=' self-center rounded-r-lg bg-white p-2'><FaRegUserCircle /></span>
          <input 
            type="text" 
            name="username" 
            placeholder='Enter Username' 
            className='flex w-[95%] h-[3.5em] p-2 outline-none rounded-r-lg bg-white'
            onChange = {handleChange}/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className=' self-center rounded-r-lg bg-white p-2'><MdOutlineMail /></span>
          <input 
            type="email" 
            name="email" 
            placeholder='Enter Email' 
            className='flex w-[95%] h-[3.5em] p-2 outline-none rounded-r-lg bg-white'
            onChange = {handleChange}/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className=' self-center rounded-r-lg bg-white p-2'><GoKey /></span>
          <input 
            type="password" 
            name="password"  
            placeholder='Enter Password' 
            className='flex w-[95%] h-[3.5em] p-2 outline-none rounded-r-lg bg-white'
            onChange = {handleChange}/>
        </div>

        <div className='flex w-3/4 bg-white rounded-lg'>
          <span className=' self-center rounded-r-lg bg-white p-2'><GoKey /></span>
          <input type="password" name="confirm-password" placeholder='Confirm Password' 
            className='flex w-[95%] h-[3.5em] p-2 outline-none rounded-r-lg bg-white'/>
        </div>

        <div className=' flex w-3/4 justify-center  bg-linear-to-r from-[dodgerblue] to-[aquamarine] text-white rounded-lg inset-ring-2'>
          <button className='p-1.5 font-extrabold  text-s tracking-widest text-black'>Register</button>
        </div>

        
        
      </form>
    </div>
  )
}

export default Register
