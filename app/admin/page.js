"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState(0);

  const foo = () => {
    setTitle(title + 1);
  };

  useEffect(() => {
    console.log("Welcome " + title);
  }, [title]);

  return (
    <>
    
{/* 
      <footer className="footer py-5" style={{color:"white"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4 mx-auto text-center">
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Company
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-5 me-3 mb-sm-0 mb-2"
              >
                About Us
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Team
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Products
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Blog
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Pricing
              </a>
            </div>
            <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-4 me-4"
              >
                <span className="text-lg fab fa-dribbble"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-4 me-4"
              >
                <span className="text-lg fab fa-twitter"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-4 me-4"
              >
                <span className="text-lg fab fa-instagram"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-4 me-4"
              >
                <span className="text-lg fab fa-pinterest"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-light me-xl-4 me-4"
              >
                <span className="text-lg fab fa-github"></span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto text-center mt-1">
              <p className="mb-0 text-light">
                Copyright ©{" "}
                <script>document.write(new Date().getFullYear())</script> Soft
                by Creative Tim.
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
