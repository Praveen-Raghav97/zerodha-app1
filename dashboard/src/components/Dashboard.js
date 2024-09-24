import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apps from "./Apps.js";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import {ThemeProvider , createTheme} from '@mui/material/styles'
import TopBar from './TopBar.js';
import Gp from './Gp.js';
 export const Dashboard = () => {
  const handleOpenBuyWindow= ""
    const handleCloseBuyWindow =""
    const isBuyWindowOpen  = ""
  const   selectedStockUID =''

// Create a theme object
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // example color for primary
    },
  },
});
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
      </Routes>
    </div>
  </div>
  )
}

export default Dashboard
