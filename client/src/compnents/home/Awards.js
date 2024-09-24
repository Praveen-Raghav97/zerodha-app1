import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 p-4">
        <img src="images/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
      </div>
      <div className="col-12 col-md-6 p-4">
        <h1 className="mt-4 mt-md-0">Largest stock broker in India</h1>
        <p className="mb-5">
          2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
        </p>
        <div className="row">
          <div className="col-12 col-sm-6">
            <ul>
              <li>
                <p>Futures and Options</p>
              </li>
              <li>
                <p>Commodity derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6">
            <ul>
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct mutual funds</p>
              </li>
              <li>
                <p>Bonds and Govt. Securities</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="images/pressLogos.png" alt="Press Logos" className="img-fluid mt-4" style={{ width: "90%" }} />
      </div>
    </div>
  </div>
  
  );
}

export default Awards;