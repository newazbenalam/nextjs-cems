

import Link from "next/link";
import React from "react";
import "@/app/globals.css";


export default function CoursesLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="assets/css/fontawesome.css" />
      <link rel="stylesheet" href="assets/css/templatemo-scholar.css" />
      <link rel="stylesheet" href="assets/css/owl.css" />
      <link rel="stylesheet" href="assets/css/animate.css" />
      <link rel="stylesheet" href="assets/css/soft-ui-dashboard.css" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
      />
    </head> 
    <body>
      
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href={"/"} className="logo">
                  <h1>Scholar</h1>
                </Link>

                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                      onClick="handle"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#team">Team</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#events">Events</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Register Now!</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-banner">
                <div className="item item-1">
                  <div className="header-text">
                    <span className="category">Our Courses</span>
                    <h2>With Scholar Teachers, Everything Is Easier</h2>
                    <p>
                      Scholar is free CSS template designed by TemplateMo for
                      online educational related websites. This layout is based
                      on the famous Bootstrap v5.3.0 framework.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#">
                          <i className="fa fa-play"></i> Whats Scholar?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-2">
                  <div className="header-text">
                    <span className="category">Best Result</span>
                    <h2>Get the best result out of your effort</h2>
                    <p>
                      You are allowed to use this template for any educational
                      or commercial purpose. You are not allowed to
                      re-distribute the template ZIP file on any other website.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#">
                          <i className="fa fa-play"></i> Whats the best result?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-3">
                  <div className="header-text">
                    <span className="category">Online Learning</span>
                    <h2>Online Learning helps you save the time</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporious incididunt ut labore et dolore
                      magna aliqua suspendisse.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#">
                          <i className="fa fa-play"></i> Whats Online Course?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2036 Scholar Organization. All rights reserved.
              &nbsp;&nbsp;&nbsp; Design:{" "}
              <a href="https://templatemo.com" rel="nofollow" target="_blank">
                TemplateMo
              </a>{" "}
              Distribution:{" "}
              <a href="https://themewagon.com" rel="nofollow" target="_blank">
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
