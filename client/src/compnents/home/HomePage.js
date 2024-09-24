import React from 'react'
import Hero from './Hero'
import Awards from "./Awards.js";
import Stats from "./Stats.js";
import Pricing from "./Pricing.js";
import Education from "./Education.js";

import OpenAccount from "../OpenAccount.js";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
const HomePage = () => {
  return (
    <div className='p-3'>
    
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
   
    </div>
  )
}

export default HomePage
