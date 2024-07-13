"use client";

import React from 'react'

// export function PreloadResources() {
//   ReactDOM.preload('assets/css/nucleo-svg.css', { as: 'stylesheet' })
//   ReactDOM.preload('assets/css/nucleo-icons.css', { as: 'stylesheet' })
//   ReactDOM.preload('assets/css/soft-ui-dashboard.css', { as: 'stylesheet' })
 
//   return null
// }

export default function Login() {
  return (
    <main className="main-content  mt-0">
    <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div className="card card-plain mt-8">
                <div className="card-header pb-0 text-left bg-transparent">
                  <h3 className="font-weight-bolder text-purple">Welcome back</h3>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
                  <form role="form">
                    <label>Email</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                    </div>
                    {/* <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="rememberMe" checked=""/>
                      <label className="form-check-label" for="rememberMe">Remember me</label>
                    </div> */}
                    <div className="text-center">
                      <button type="button" className="btn btn-purple w-100 mt-4 mb-0">Sign in</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    {"Don't have an account?"}
                    <a href="javascript:;" className="text-purple font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </main>
  )
}
