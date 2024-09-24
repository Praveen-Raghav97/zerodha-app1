import React from 'react'

const RightSection = ({ imageURL, productName, productDescription, learnMore }) => {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-lg-6 col-md-12 p-5 mt-5">
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <div>
          <a href={learnMore} className="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
        <img src={imageURL} alt={productName} className="img-fluid" />
      </div>
    </div>
  </div>
  
  )
}

export default RightSection
