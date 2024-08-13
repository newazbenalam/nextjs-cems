"use client";

import { GetSingleCourse } from "@/app/_lib/actions/CoursesUsecase";
import React, { useEffect } from "react";
import "@/app/globals.css";
import Image from "next/image";
import './style.css';


export default function CourseDetail({ params }) {
  const { id } = params;
  const [course, setCourse] = React.useState([]);


  useEffect(() => {

    const getData = async () => {
      const res = await GetSingleCourse( parseInt(id) );
      setCourse(res);
      console.log(course);
    };

    getData();

  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2>{ course.title }</h2>
        <br />
        <div className="row">
          <div className="col-lg-9">
            <p>
              { course.description }
            </p>
          </div>

          <div className=" col-lg-3">
            <div className="table overflow-auto ">
              <table className="border border-collapse">
                <tr className="border ">
                  <td>Course Category</td>
                  <td className="border "> 
                    { course.category ? course.category.title : "" }
                    </td>
                </tr>
                <tr className="border">
                  <td>Course Duration</td>
                  <td className="border ">{ course.courseDuration } Hours</td>
                </tr>
                <tr className="border">
                  <td>Class Duration</td>
                  <td className="border ">{ course.classDuration } Hours</td>
                </tr>
                <tr className="border">
                  <td>Number of classes</td>
                  <td className="border ">{ course.numberOfClasses } classes</td>
                </tr>
                <tr className="border">
                  <td>Available Seats</td>
                  <td className="border ">{ course.availableSeats } </td>
                </tr>
                <tr className="border">
                  <td>Number Of Tests</td>
                  <td className="border ">{ course.numberOfTests } </td>
                </tr>
                {
                  course.testDescription && (
                    <tr className="border">
                    <td>Test Description</td>
                    <td className="border ">{ course.testDescription } </td>
                  </tr>
                  )
                }
                {
                  course.averageRating && (
                    <tr className="border">
                    <td>Average Rating</td>
                    <td className="border ">{ course.averageRating } </td>
                  </tr>
                  )
                }
                {
                  course.instructor && (
                    <tr className="border">
                    <td>Instructor</td>
                    <td className="border ">{ course.instructor.name } </td>
                  </tr>
                  )
                }
                

                <tr className="border ">
                  <td>Price</td>
                  <td className="border">$120</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      {
        course.image ? 
        <img src={ course.image } alt={course.image} className="course-image mt-5 rounded-5"/>
        : <div className="course-image mt-5 rounded-5 text-center">
          <div class="spinner-border text-primary " role="status">
</div>
        </div>
      }

      </div>



      <div className="section events" id="events">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12 text-center">
          <div className="section-heading">
            <h6>Schedule</h6>
            <h2>Upcoming Events</h2>
          </div>
        </div> */}
            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="image">
                      <Image
                        height={230}
                        width={180}
                        style={{ objectFit: "cover" }}
                        src={course.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul>
                      <li>
                        <span className="category"> { course.category ? course.category.title : ''}</span>
                        <h4> {course.title }</h4>
                      </li>
                      <li>
                        <span>Date:</span>
                        <h6>{course.deadline ? course.deadline :'16 Feb 2036'}</h6>
                      </li>
                      <li>
                        <span>Duration:</span>
                        <h6> { course.courseDuration } hours</h6>
                      </li>
                      <li>
                        <span>Price:</span>
                        <h6> ${ course.price} </h6>
                      </li>
                    </ul>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <img src="assets/images/event-02.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <span className="category">Front End</span>
                    <h4>New Design Trend</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>24 Feb 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>30 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$320</h6>
                  </li>
                </ul>
                <a href="#"><i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <img src="assets/images/event-03.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <span className="category">Full Stack</span>
                    <h4>Web Programming</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>12 Mar 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>48 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$440</h6>
                  </li>
                </ul>
                <a href="#"><i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
