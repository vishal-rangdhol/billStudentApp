import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import empServices from '../../service/empServices';
import toast from 'react-hot-toast';


// imported icons
import { FaRegUserCircle } from 'react-icons/fa';
import { GoKey } from 'react-icons/go';
import { LuLogIn } from "react-icons/lu";


const Login = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    let {name, value} = e.target

    setFormData({...formData, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let {email, password} = formData

    if (!email||!password) {
      toast.error("All fields are mandatory")
      return
    }
    // console.log(formData)

    (async () => {
      let data = await empServices.loginUser(formData)

      try {
        if (data.status == 200) {
          toast.success("Login Successful !!")
          navigate("/home")

        } else {
          toast.error(`${data.response.data.message}`)
          return
        } 
      } catch (error) {
        console.error("Login error:", error) 
        toast.error("Something Went Wrong !!")
      }
    })()
  }

  return (
    <div className = ' size-full flex justify-center items-center bg-linear-to-l from-[#ffedb0] to-[#278783]'>
      <form className = 'w-2xl flex flex-col gap-y-5 rounded-2xl bg-linear-to-r from-[#D1E0D7] to-[#607EBC] max-sm:w-[80%] max-sm:h-[40%]'
        onSubmit = {handleSubmit}>
        <div className = 'mt-5 mb-3 self-center '>
          <h1 className = 'text-4xl font-bold text-shadow-lg/35'>Login</h1>
        </div>

        <div className = 'w-3/4 flex self-center'>
            <span className = 'w-[5%] flex items-center justify-center rounded-l-lg bg-white text-l'>
                <FaRegUserCircle />
            </span>
            <input 
                type = "text" 
                name = "email" 
                placeholder = 'Enter email' 
                className = 'w-[95%]  p-3 outline-none rounded-r-lg bg-white text-xl '
                onChange = {handleChange}/>
        </div>

        <div className = 'w-3/4 flex self-center'>
          <span className = 'w-[5%]  flex items-center justify-center rounded-l-lg bg-white text-l'>
              <GoKey />
          </span>
            <input
              type = "password" 
              name = "password" 
              placeholder = 'Enter Password' 
              className = 'w-[95%]  p-3 outline-none rounded-r-lg bg-white text-xl'
              onChange = {handleChange}/>
        </div>

        <div className = 'm-4 w-3/6 flex self-center inset-ring-2 rounded-lg bg-linear-to-r from-[dodgerblue] to-[#b275e1] text-white '>
          <button 
            type = 'submit' 
            className = 'size-full p-1.5 font-extrabold  tracking-widest text-black'> 
              <span className='flex items-center justify-center '>Login<LuLogIn/></span>
          </button>
        </div>

        <div className = 'mb-1 flex w-3/4 justify-center self-center '>
          <Link to = "register">Click here to Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
