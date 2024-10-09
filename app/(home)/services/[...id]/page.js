"use client";

import React, { useEffect } from "react";
import "@/app/globals.css";
import './style.css';
import { Image } from "react-bootstrap";
import { GetSingleService } from "@/app/_lib/actions/ServicesUsecase";


export default function ServiceDetail({ params }) {
  const { id } = params;
  const [service, setService] = React.useState([]);


  useEffect(() => {

    const getData = async () => {
      const res = await GetSingleService(parseInt(id));
      setService(res);
      console.log(service);
    };

    getData();

  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2>{service.title}</h2>
        <br />
        <div className="row">
          <div className="col-lg-9">
            <p>
              {service.details}
            </p>
          </div>

          {/* <div className=" col-lg-3">
            <div className="table overflow-auto ">
              <table className="border border-collapse">
                <tr className="border ">
                  <td>Service Category</td>
                  <td className="border "> 
                    { service.category ? service.category.title : "" }
                    </td>
                </tr>
                <tr className="border">
                  <td>Service Duration</td>
                  <td className="border ">{ service.serviceDuration } Hours</td>
                </tr>
                <tr className="border">
                  <td>Class Duration</td>
                  <td className="border ">{ service.classDuration } Hours</td>
                </tr>
                <tr className="border">
                  <td>Number of classes</td>
                  <td className="border ">{ service.numberOfClasses } classes</td>
                </tr>
                <tr className="border">
                  <td>Available Seats</td>
                  <td className="border ">{ service.availableSeats } </td>
                </tr>
                <tr className="border">
                  <td>Number Of Tests</td>
                  <td className="border ">{ service.numberOfTests } </td>
                </tr>
                {
                  service.testDescription && (
                    <tr className="border">
                    <td>Test Description</td>
                    <td className="border ">{ service.testDescription } </td>
                  </tr>
                  )
                }
                {
                  service.averageRating && (
                    <tr className="border">
                    <td>Average Rating</td>
                    <td className="border ">{ service.averageRating } </td>
                  </tr>
                  )
                }
                {
                  service.instructor && (
                    <tr className="border">
                    <td>Instructor</td>
                    <td className="border ">{ service.instructor.name } </td>
                  </tr>
                  )
                }
                

                <tr className="border ">
                  <td>Price</td>
                  <td className="border">$120</td>
                </tr>
              </table>
            </div>
          </div> */}
        </div>

        {/* auto sized images arrat grid view depending on array length */}
        <br /><br />
        <div className="row justify-content-center">
          {service.images &&
            service.images.map((image, index) => (
              <div key={index} className="col-lg-3">
                <Image
                  className="rounded-2"
                  style={{ objectFit: "cover" }}
                  src={image.imageUrl}
                  alt=""
                />
              </div>
            ))}

        </div>
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
                        // height={230}
                        // width={180}
                        style={{ objectFit: "cover" }}
                        src={service.thumbnail}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul>
                      <li>
                        <span className="category"> {service.category ? service.category.title : ''}</span>
                        <h4> {service.title}</h4>
                      </li>
                      {/* <li>
                        <span>Date:</span>
                        <h6>{service.deadline ?
                        // format datetime to date only
                         Date(service.deadline).split(':')[0].split(' ').slice(0, 4).join(' ')
                         :'16 Feb 2036'}</h6>
                      </li>
                      <li>
                        <span>Duration:</span>
                        <h6> { service.serviceDuration } hours</h6>
                      </li> */}
                      <li>
                        <span>Contact:</span>
                        <h6> {service.contact} </h6>
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
                  <Image src="assets/images/event-02.jpg" alt="" />
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
                  <Image src="assets/images/event-03.jpg" alt="" />
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
