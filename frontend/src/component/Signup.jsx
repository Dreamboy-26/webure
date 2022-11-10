import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "../styles/signup.css"
const Signup = () => {

    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const navigate=useNavigate()
const handleForm=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
}

const handleFormSubmit=async(e)=>{
e.preventDefault()

await axios.post("http://localhost:5000/signup",formData).then((e)=>{

console.log("user saved")
navigate("/login")
})

}






  return (
    <form onSubmit={handleFormSubmit} className="form">
        <h1 className='heading'>SignUp</h1>
        <div className='inputDivs'>
            {/* <span>First Name</span> */}
            <input className='input' type="text" name='firstName' onChange={handleForm} placeholder="Enter First Name" />
        </div>
        <div>
            {/* <span>Last Name</span> */}
            <input className='input' name='lastName' type="text" onChange={handleForm} placeholder="Enter Last Name"/>
        </div>
        <div>
            {/* <span>Email</span> */}
            <input className='input' name='username' type="text" onChange={handleForm}placeholder="Enter Email" />
        </div>
        <div>
            {/* <span>Password</span> */}
            <input className='input' name='password' type="password" onChange={handleForm} placeholder="Enter Password" />
        </div>
        <div  >

        <input className='button' type="submit" value="Signup" />
        </div>
    </form>
  )
}

export default Signup