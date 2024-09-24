import React from 'react'

const Hero = () => {
  return (
    <div className="container">
    <div className="row p-5 mt-5 border-bottom text-center">
      <h1 className="col-12">Pricing</h1>
      <h3 className="col-12 text-muted mt-3 fs-5">
        Free equity investments and flat ₹20 for intraday and F&O trades
      </h3>
    </div>
    
    <div className="row p-5 mt-5 text-center">
      <div className="col-lg-4 col-md-6 col-sm-12 p-4">
        <img src="images/pricingEquity.svg" className="img-fluid" alt="Free equity delivery" />
        <h1 className="fs-3">Free Equity Delivery</h1>
        <p className="text-muted">
          All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.
        </p>
      </div>
      
      <div className="col-lg-4 col-md-6 col-sm-12 p-4">
        <img src="images/intradayTrades.svg" className="img-fluid" alt="Intraday and F&O trades" />
        <h1 className="fs-3">Intraday and F&O Trades</h1>
        <p className="text-muted">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
        </p>
      </div>
      
      <div className="col-lg-4 col-md-6 col-sm-12 p-4">
        <img src="images/pricingEquity.svg" className="img-fluid" alt="Free direct MF" />
        <h1 className="fs-3">Free Direct MF</h1>
        <p className="text-muted">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Hero
