
import { Route, Routes } from 'react-router-dom'
import Apps from "./Apps.js";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import Signup from './Signup.js';
import Login from './Login.js';


import TopBar from './TopBar.js';
import Gp from './Gp.js';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 export const Dashboard = () => {

const [user, setuser] = useState()
  localStorage.getItem('userId')

  useEffect(()=>{
    setuser(localStorage.getItem("userId"))
  },[])

const navigate = useNavigate()



  

  return (
    <div className="dashboard-container">
   
  
   
      
      
    <div className="content">
      
      <Routes>
        
        <Route  path="/" element={<Summary />} />
        <Route  path="/watch" element={<Gp/>} />
        
        <Route path="/orders" element={<Orders />} />
        <Route path="/watch" element={<TopBar/>} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/apps" element={<Apps />} />
  
         <Route path="/login" element={<Login />} />
       
          
      
       
        
           <Route path="/signup" element={<Signup />} />
      
       
      </Routes>
    </div>
  </div>
  )
}

export default Dashboard
