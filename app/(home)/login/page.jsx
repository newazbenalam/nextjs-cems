"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import "../../../public/assets/css/soft-ui-dashboard.css";
import { authenticate } from '@/app/_lib/auth/useAuthentication';
import { ro } from 'faker/lib/locales';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [state, setState] = useState( null, { error: null });
  
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    // Convert FormData to an object for logging and passing
    const data = Object.fromEntries(formData.entries());
  
    console.log(data); // Logs the form values as an object { email: "example", password: "12345" }
  
    // Assuming authenticate accepts the form data as an object
    const newState = await authenticate(state, formData);
  
    setState(newState);
  
    if (newState === "Wrong Credentials") {
      return;
    }
  
    router.push("/dashboard");
  };
  

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
                  <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <div className="mb-3">
                      <input type="email" name="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" required/>
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input type="password" name="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" required/>
                    </div>
                    {/* <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="rememberMe" checked=""/>
                      <label className="form-check-label" for="rememberMe">Remember me</label>
                    </div> */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-purple w-100 mt-4 mb-0">Sign in</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    {"Don't have an account?"}
                    <Link href={"/signup"} className="text-purple font-weight-bold">Sign up</Link>
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
