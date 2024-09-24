import React from 'react'



const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 col-md-12">
      <img src={imageURL} alt={productName} className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 p-5 mt-5">
      <h1>{productName}</h1>
      <p>{productDescription}</p>
      <div>
        <a href={tryDemo} className="btn btn-primary me-3">
          Try Demo
        </a>
        <a href={learnMore} className="btn btn-secondary">
          Learn More
        </a>
      </div>
      <div className="mt-3">
        <a href={googlePlay}>
          <img src="images/googlePlayBadge.svg" className="img-fluid" alt="Google Play Badge" />
        </a>
        <a href={appStore} className="ms-3">
          <img src="images/appstoreBadge.svg" className="img-fluid" alt="App Store Badge" />
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default LeftSection
