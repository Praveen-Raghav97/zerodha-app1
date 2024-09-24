import React from 'react'

const Hero = () => {
  return (
    <div className='container py-5 mb-5'>
    <div className='row text-center justify-content-center'>
      <div className='col-12 col-md-8 col-lg-6'>
        <img src='images/homeHero.png' alt='hero img' className='img-fluid mb-4' />
      </div>
      <div className='col-12'>
        <h1 className="mt-4">Invest in everything</h1>
        <p className='fs-4'>
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "80%", maxWidth: "300px" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero
