import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
    <div className="p-5" id="supportWrapper">
      <h4>Support Portal</h4>
      <a href="">Track Tickets</a>
    </div>
    
    <div className="row p-5 m-3">
      <div className="col-lg-6 col-md-12 p-3">
        <h1 className="fs-3">
          Search for an answer or browse help topics to create a ticket
        </h1>
        <input className="form-control" placeholder="Eg. how do I activate F&O" />
        <br />
        <div>
          <a href="" className="d-block">Track account opening</a>
          <a href="" className="d-block">Track segment activation</a>
          <a href="" className="d-block">Intraday margins</a>
          <a href="" className="d-block">Kite user manual</a>
        </div>
      </div>
      
      <div className="col-lg-6 col-md-12 p-3">
        <h1 className="fs-3">Featured</h1>
        <ol>
          <li>
            <a href="">Current Takeovers and Delisting - January 2024</a>
          </li>
          <li>
            <a href="">Latest Intraday leverages - MIS & CO</a>
          </li>
        </ol>
      </div>
    </div>
  </section>
  
  )
}

export default Hero
