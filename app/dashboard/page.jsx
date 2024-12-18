"use client";

import React, { useEffect, useState } from "react";
import { GetCourses } from "@/app/_lib/actions/CoursesUsecase";
import { Image } from "react-bootstrap";
import { GetServices } from "@/app/_lib/actions/ServicesUsecase";
import { GetUsers } from "../_lib/actions/UserUsecase";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCourses();
      setCourses(res);
      const resService = await GetServices();
      setServices(resService);
      const resUsers = await GetUsers();
      setUsers(resUsers);
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <div className="container-fluid py-4 mb-5">
          <div className="row">
            <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-book-reader opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">{"Courses"}</p>
                    <h4 className="mb-0">{courses.length} </h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +55%{" "}
                    </span>
                    than last week
                  </p> */}
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-person opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">
                      {"Today's Users"}
                    </p>
                    <h4 className="mb-0">2,300</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +3%{" "}
                    </span>
                    than last month
                  </p>
                </div>
              </div>
            </div> */}
            <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-running opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Total User</p>
                    <h4 className="mb-0">{users.length}</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-danger text-sm font-weight-bolder">
                      -2%
                    </span>{" "}
                    than yesterday
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-calendar-week opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Services</p>
                    <h4 className="mb-0">{services.length}</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +5%{" "}
                    </span>
                    than yesterday
                  </p> */}
                </div>
              </div>
            </div>
          </div>


          {/* graphs and charts */}

          {/* <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-bars"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">Website Views</h6>
                  <p className="text-sm ">Last Campaign Performance</p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card z-index-2  ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-line"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 "> Daily Sales </h6>
                  <p className="text-sm ">
                    {" "}
                    (<span className="font-weight-bolder">+15%</span>) increase
                    in today sales.{" "}
                  </p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm"> updated 4 min ago </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mb-3">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-line-tasks"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">Completed Tasks</h6>
                  <p className="text-sm ">Last Campaign Performance</p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm">just updated</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row mb-4 mt-5">
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="row">
                    <div className="col-lg-6 col-7">
                      <h6>Courses</h6>
                      <p className="text-sm mb-0">
                        <i
                          className="fa fa-check text-info"
                          aria-hidden="true"
                        ></i>
                        <span className="font-weight-bold ms-1"></span>{" "}

                      </p>
                    </div>
                    <div className="col-lg-6 col-5 my-auto text-end">
                      <div className="dropdown float-lg-end pe-4">
                        <a
                          className="cursor-pointer"
                          id="dropdownTable"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul
                          className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                          aria-labelledby="dropdownTable"
                        >
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="#"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="#"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="#"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Course
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Instructor
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Price
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Average Rating
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <i
                                      className="fa fa-book-open me-3"
                                      alt="xd"
                                    />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {course.title}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="avatar-group mt-2">
                                  <a
                                    href="#"
                                    className="avatar avatar-xs rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Ryan Tompson"
                                  >
                                    <Image
                                      src="../assets/img/team-1.jpg"
                                      alt="team1"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-xs rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Romina Hadid"
                                  >
                                    <Image
                                      src="../assets/img/team-2.jpg"
                                      alt="team2"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-xs rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Alexander Smith"
                                  >
                                    <Image
                                      src="../assets/img/team-3.jpg"
                                      alt="team3"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-xs rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Jessica Doe"
                                  >
                                    <Image
                                      src="../assets/img/team-4.jpg"
                                      alt="team4"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td className="align-middle text-center text-sm">
                                <span className="text-xs font-weight-bold">
                                  {" "}
                                  {"$ " + course.price}{" "}
                                </span>
                              </td>
                              <td className="align-middle">
                                <div className="progress-wrapper w-75 mx-auto">
                                  <div className="progress-info">
                                    <div className="progress-percentage">
                                      <span className="text-xs font-weight-bold">
                                        {course.averageRating}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-gradient-info "
                                      style={{
                                        width:
                                          parseFloat(course.averageRating) *
                                          20 +
                                          "%",
                                      }}
                                      role="progressbar"
                                      aria-valuenow={course.averageRating}
                                      aria-valuemin="0"
                                      aria-valuemax="5"
                                    ></div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-header pb-0">
                  <h6>Students increase</h6>
                  <p className="text-sm">
                    <i
                      className="fa fa-arrow-up text-success"
                      aria-hidden="true"
                    ></i>
                    {/* <span className="font-weight-bold">2%</span> this month */}
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="timeline timeline-one-side">
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="fa fa-bell text-success text-gradient"></i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          Enroll Now for discount
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          offer till 22 August 2024
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="fa fa-code text-danger text-gradient"></i>
                      </span>
                      {/* <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          New order #1832412
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 11 PM
                        </p>
                      </div> */}
                    </div>
                    {/* <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-info text-gradient">shopping_cart</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-warning text-gradient">credit_card</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-primary text-gradient">key</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="material-icons text-dark text-gradient">payments</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <footer className="footer py-4  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                made with <i className="fa fa-heart"></i> by
                <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                for a better web.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
        </div>
      </main>
    </>
  );
}
