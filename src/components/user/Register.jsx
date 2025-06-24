import React, { useState } from 'react'
import { validatePassword } from 'val-pass';
import  toast from 'react-hot-toast';
// Imported react icons
import { FaRegUser } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoKey } from "react-icons/go";


const Register = () => {
  let [formData, setFormData] = useState({
    // username : "",
    // password : "",    hard code!!!
    // name : "",
    // email : "",
    })
  const [matched, setMatched] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")


  const handleChange = (e) => {
    let {name, value} = e.target

    // Password Validation
    if (name === 'password') {
      if (value === "") {
        setErrorMessage("");

      } else {
        let { validateAll, getAllValidationErrorMessage } = validatePassword(value, 8);

      if (validateAll()) {
        setErrorMessage("");
       // this is used if password input field is selected and no password/characters entered yet.

      } else {
        setErrorMessage(getAllValidationErrorMessage);
      }
      console.log("pw error", errorMessage)
      console.log("pw", value)
      }
    
    }
    setFormData((preVal) => ({...preVal, [name] : value}))
  }

  const handlePasswordCheck = (e) => {
    let {value} = e.target

    if (value === "") {
      setMatched(true);  //reset if confirm field is empty

    } else if (formData.password !== value) {
      setMatched(false);//mismatch

    } else {
      setMatched(true) // match
    }
    
    // formData.password != value? setMatched(false) : setMatched(true)
    // value == "" &&setMatched(true)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    let {name, userName, email, password} = formData
    if (!name || !userName || !email || !password ) {
      toast.error("All fields are Mandatory")
      return
    }
    let { validateAll, getAllValidationErrorMessage } = validatePassword(password);
    if (!validateAll()) {
      toast.error(getAllValidationErrorMessage)
      return
    }
    if (!matched) {
      toast.error("Password does not match")
      return
    }
    console.log(formData)
  }

  
  


  return (
    <div className =' size-full flex justify-center items-center bg-linear-to-l from-[#278783] to-[#ffedb0]'>

      <form action = "" 
        className = ' h-3/4 w-1/2 flex flex-col gap-y-5 rounded-2xl bg-linear-to-r from-[#607EBC] to-[#D1E0D7] max-sm:w-[80%] max-sm:h-[70%] overflow-y-scroll '
        onSubmit = {handelSubmit}>
      
        <div className = 'mt-5 mb-3 self-center '>
          <h1 className = 'text-4xl font-bold text-shadow-lg/35 max-lg:text-2xl'>Registration Form</h1>
        </div>

        <div className = 'w-3/4 flex self-center'>
          <span className = 'w-[5%]  flex items-center justify-center rounded-l-lg bg-white text-l'>
            <FaRegUser />
          </span>
          <input 
            type = "text" 
            name = "name" 
            placeholder = 'Enter Name' 
            className = 'w-[95%]  p-3 outline-none rounded-r-lg bg-white text-xl ' 
            onChange = {handleChange}/>
        </div>

        <div className = 'w-3/4 flex self-center'>
          <span className = 'w-[5%]  flex items-center justify-center rounded-l-lg bg-white text-l'>
            <FaRegUserCircle />
          </span>
          <input 
            type = "text" 
            name = "userName" 
            placeholder = 'Enter Username' 
            className = 'w-[95%] p-3 outline-none rounded-r-lg bg-white text-xl'
            onChange = {handleChange}/>
        </div>

        <div className = 'w-3/4  flex self-center '>
          <span className = 'w-[5%]  flex items-center justify-center rounded-l-lg bg-white text-l'>
            <MdOutlineMail />
          </span>
          <input 
            type = "email" 
            name = "email" 
            placeholder = 'Enter Email' 
            className = 'w-[95%] p-3 outline-none rounded-r-lg bg-white text-xl'
            onChange = {handleChange}/>
        </div>

        <div className = 'w-3/4  flex self-center'>
          <span className = ' w-[5%]  flex items-center justify-center rounded-l-lg bg-white text-l'>
            <GoKey />
          </span>
          <input 
            type = "password" 
            name = "password"  
            placeholder = 'Enter Password' 
            className = 'w-[95%] p-3 outline-none rounded-r-lg bg-white text-xl'
            onChange = {handleChange}/>
        </div>

        {
          errorMessage && (
            <div className = 'w-3/4  flex self-center text-red-600 '>
              * {errorMessage}
            </div>
          )
        }

        <div className = {`w-3/4  flex self-center rounded-lg  duration-300  ${matched? 'border-0' : 'border-red-600'}`} >
          <span className = 'w-[5%]  flex items-center justify-center rounded-l-lg bg-white text-l'>
            <GoKey />
          </span>
          <input 
            type = "password" 
            name = "confirm-password" 
            placeholder='Confirm Password' 
            className = 'w-[95%] p-3 outline-none rounded-r-lg bg-white text-xl'
            onChange = {handlePasswordCheck}/>
        </div>

        { 
          !matched && (
            <div className = 'w-3/4  flex self-center'>
              * Password does not match
            </div>
          )
        }

        <div className = 'm-4 w-3/5 flex self-center inset-ring-2 rounded-lg bg-linear-to-r from-[#b275e1] to-[dodgerblue] text-white '>
          <button type = 'submit' className = 'size-full p-1.5 font-extrabold  text-s tracking-widest text-black '>Register</button>
        </div>

      </form>
    </div>
  )
}

export default Register
