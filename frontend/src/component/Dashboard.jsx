import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import "../styles/dashboard.css"

const Dashboard = () => {
  const {id} = useParams();
  const [user, setUser] = useState([]);
const navigate=useNavigate()
  const getUser = async () => {
    await axios.get(`http://localhost:5000/dashboard/${id}`).then((res) => {
      setUser(res.data);
    });
  };

const handlLogout=async()=>{
  await axios.get(`http://localhost:5000/logout`).then((res) => {
   if(res.status==200)
   {
    alert("loggedout")
    navigate("/login")
   }
  });
}

  // console.log(user)
  useEffect(() => {
    getUser();
  },[]);

  return (
   <>
   <div className="dashDiv">
   <img className="userImage" src="https://w7.pngwing.com/pngs/167/774/png-transparent-laptop-user-personal-computer-laptop-electronics-child-hand-thumbnail.png" width="100px" alt="" />
   <div>
   <h1>{user.firstName} {user.lastName}</h1>
   <h2>Email:{user.username} </h2>
   <h3>Password:{user.password}</h3>
   </div>
   </div>
        <div>
          <button onClick={handlLogout}>Logout</button>
        </div>
   </>
     
       
  );
};

export default Dashboard;
