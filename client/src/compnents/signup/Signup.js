import React, { useState } from 'react'
import './signup.css'
const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup Data", { username, email, password });
  };

  return (
    
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  {/* Login Form Section */}
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">Register now ...</h3>
                        <p>Or track your existing application.</p>
                      </div>
  
                      <h6 className="h5 mb-0">Welcome back!</h6>
                      <p className="text-muted mt-2 mb-5">
                        Enter your name  email  and password to access admin panel.
                      </p>
  
                      <form>
                      <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Username"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group ">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input
                            type="password"
                            className="form-control "
                            id="exampleInputPassword1"
                            placeholder="Password"
                          
                          />
                        </div>
                        <button
          className="p-1 btn btn-primary fs-5 mt-4 "
          style={{ width: "30%" }}
        >
          Signup 
        </button>
                       
                      </form>
                    </div>
                  </div>
  
                  {/* Right Section with Testimonial */}
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay rounded-right border-5"></div>
                      <div className="account-testimonial">
                        <h4 className="text-white mb-4">This beautiful theme is yours!</h4>
                        <p className="lead text-white">
                          "Best investment I made for a long time. Can only recommend it for other users."
                        </p>
                        <p>- Admin User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-body */}
            </div>
            {/* end card */}
  
            <p className="text-muted text-center mt-3 mb-0">
              Already have an account?{" "}
              <a href="/login" className="text-primary ml-1">
                Login
              </a>
            </p>
            <p className='text-muted text-center mt-3 mb-0 fs-18'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit  <a href="https://support.zerodha.com/category/console/reports/other-queries/articles/details-collected-when-opening-an-account" className="text-primary ml-1 fs-18">
                this artical
              </a> to know more.</p>
          </div>
          
          <div>
            

          </div>
        </div>
      </div>
  )
}

export default Signup
