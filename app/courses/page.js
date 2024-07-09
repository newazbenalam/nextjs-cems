
"use client";

import Link from "next/link";
import React from "react";

export default function CoursesList() {




  return (
    <>
      <section className="mt-5" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Latest Courses</h6>
                <h2>Latest Courses</h2>
              </div>
            </div>
          </div>
          <ul className="event_filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".design">
                Webdesign
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".development">
                Development
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".wordpress">
                Wordpress
              </a>
            </li>
          </ul>
          <div className="row event_box">
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/images/course-01.jpg" alt="" />
                  </a>
                  <span className="category">Webdesign</span>
                  <span className="price">
                    <h6>
                      <em>$</em>160
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Learn Web Design</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/images/course-02.jpg" alt="" />
                  </a>
                  <span className="category">Development</span>
                  <span className="price">
                    <h6>
                      <em>$</em>340
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Cindy Walker</span>
                  <h4>Web Development Tips</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/images/course-03.jpg" alt="" />
                  </a>
                  <span className="category">Wordpress</span>
                  <span className="price">
                    <h6>
                      <em>$</em>640
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Latest Web Trends</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
              <div className="events_item">
                <div className="thumb">
                  <Link href='/courses/11'>
                    <img src="assets/images/course-04.jpg" alt="" />
                  </Link>
                  <span className="category">Development</span>
                  <span className="price">
                    <h6>
                      <em>$</em>450
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Online Learning Steps</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img
                      height={310}
                      style={{ objectFit: "cover" }}
                      src="assets/1713299014367.jpeg"
                      alt=""
                    />
                  </a>
                  <span className="category">Wordpress</span>
                  <span className="price">
                    <h6>
                      <em>$</em>320
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Sophia Rose</span>
                  <h4>Be a WordPress Master</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/images/course-06.jpg" alt="" />
                  </a>
                  <span className="category">Webdesign</span>
                  <span className="price">
                    <h6>
                      <em>$</em>240
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Full Stack Developer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
