import React, { useEffect, useState } from "react";

const Summary = () => {
const [user,setUser] = useState()
  async function fetchUserDetailsById() {
    
    try {
      let userId = localStorage.getItem('userId')
        const response = await fetch(`https://zerodha-app-api.vercel.app/User/${userId}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching user details: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch user details:', error);
        return null;
    }
}

useEffect(()=>{
  fetchUserDetailsById().then(user => setUser(user) ,console.log(user))
  .catch(err => console.log(err))
})

  return (
    <div  className="shadow-lg h-screen px-4 py-2  ">
      <div className="username">
        <h6>Hi, {user.name}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;