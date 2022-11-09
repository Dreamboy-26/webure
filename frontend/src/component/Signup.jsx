import React, { useState } from 'react'

const Signup = () => {

    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

const handleForm=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
}

const handleFormSubmit=(e)=>{
e.preventDefault()
console.log(formData)
}

  return (
    <form onSubmit={handleFormSubmit}>
        <h1>SignUp</h1>
        <div>
            <span>First Name</span>
            <input type="text" name='firstName' onChange={handleForm} />
        </div>
        <div>
            <span>Last Name</span>
            <input name='lastName' type="text" onChange={handleForm}/>
        </div>
        <div>
            <span>Email</span>
            <input name='email' type="text" onChange={handleForm}/>
        </div>
        <div>
            <span>Password</span>
            <input name='password' type="password" onChange={handleForm}/>
        </div>
        <input type="submit" value="Signup" />
    </form>
  )
}

export default Signup