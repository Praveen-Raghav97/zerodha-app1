import React from 'react'
import Menu from './Menu.js'
import WatchList from './WatchList.js'
const TopBar = () => {
  return (
    <div className="topbar-container w-auto">
      <div className="indices-container">
        <div className="sensex">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

   
    </div>
  )
}

export default TopBar
