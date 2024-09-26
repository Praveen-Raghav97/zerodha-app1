import React, { useState } from 'react'
import { watchList } from '../data/data.js'
import WatchListItem from './WatchListitem.js'


const WatchList = () => {
  return (
    <div className="watchlist-container">
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
        className="search"
      />
      <span className="counts"> {watchList.length} / 50</span>
    </div>

    <ul className="list">
    {watchList.map((stock, index) => {
       return(<WatchListItem stock={stock} key={index}/>)
        })}
    </ul>

    
  </div>
  )
}

export default WatchList







