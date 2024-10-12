
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
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
 export const Dashboard = () => {


 const userid = localStorage.getItem('userId')


 


  

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
