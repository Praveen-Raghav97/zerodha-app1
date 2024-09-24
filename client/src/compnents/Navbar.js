import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
  <div className="container p-2">
    <a className="navbar-brand" href="/">
      <img src="images/logo.svg" className="img-fluid" style={{ maxWidth: "150px" }} alt="Logo" />
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Signup">
            Signup
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Product">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Pricing">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Support">
            Support
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
