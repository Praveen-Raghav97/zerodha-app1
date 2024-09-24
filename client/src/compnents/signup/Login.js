import React, { useState } from 'react'
import './signup.css'
const Login = () => {

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
                        <h3 className="h4 font-weight-bold text-theme">Login</h3>
                      </div>
  
                      <h6 className="h5 mb-0">Welcome back!</h6>
                      <p className="text-muted mt-2 mb-5">
                        Enter your email address and password to access admin panel.
                      </p>
  
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
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
                        <button type="submit" className="btn btn-theme m-3">
                          Login
                        </button>
                        <a href="#l" className="forgot-link float-right text-primary">
                          Forgot password?
                        </a>
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
              Don't have an account?{" "}
              <a href="/Signup" className="text-primary ml-1">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Login
