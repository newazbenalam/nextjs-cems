"use client";

import React from "react";

export default function CourseDetail({ params }) {
  const { id } = params;

  return (
    <>
      <div className="container mt-5">
        <h2>Course Details { id }</h2>
        <br />
        <div className="row">
          <div className="col-lg-9">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis dolorum, veniam in et beatae temporibus aperiam quidem
              dolorem, vel repellendus, laborum dolores harum? Distinctio ullam
              quod repellat animi nostrum saepe fuga deleniti itaque deserunt
              laborum tempora nulla voluptatem officia eius, rem consequuntur
              reprehenderit ea vel eveniet libero veritatis, reiciendis magnam?
              Laboriosam minus accusantium fugit earum porro error quia alias,
              optio odio saepe aut ipsa numquam nisi consectetur amet cumque
              ipsam tempore, libero, sed modi delectus! Atque ratione aperiam
              incidunt delectus repudiandae doloribus saepe excepturi,
              architecto beatae quis, et vitae exercitationem, quas eligendi eos
              explicabo cumque qui! Ad, exercitationem rem itaque eligendi
              cumque dolor quidem aut sapiente ducimus tempora commodi. Deserunt
              laborum tenetur consequuntur modi voluptate, ea optio voluptatum!
              Voluptas quaerat quod provident, fugit excepturi labore libero
              perferendis nihil quisquam assumenda aliquid vitae eveniet ex
              quasi, culpa tempore mollitia cupiditate, debitis voluptate?
              Ipsam, molestiae quisquam. Est, maxime voluptates veniam porro
              necessitatibus nemo. Ducimus quidem, voluptatem labore alias
              aliquid voluptas impedit ad molestiae unde dolore magni ratione,
              inventore expedita quae iusto in fuga quisquam iste sit
              consequuntur. Laborum ullam maiores tempore sapiente harum, nemo
              aliquid nesciunt sint mollitia nam iste qui voluptatibus corporis
              explicabo soluta asperiores! Autem iste odit et aut vel facilis,
              exercitationem saepe odio recusandae eos nemo corrupti natus alias
              quos veritatis ipsum distinctio? Fuga repellendus excepturi
              quisquam accusantium non molestias sed quia? Vel facere, facilis
              perferendis officia et provident maxime deleniti quibusdam eveniet
              eos alias explicabo quod magnam, voluptates reprehenderit vero
              doloribus. Doloribus dolor est illum facilis possimus laborum
              voluptatibus corrupti ullam sequi at! Qui debitis sunt atque eaque
              soluta architecto ullam delectus sequi velit, itaque fugit
              exercitationem odit esse voluptate? Voluptates eligendi incidunt
              corporis quos obcaecati harum recusandae dolorem! Culpa minus eius
              maiores ex aliquam iste ad architecto dolor atque tenetur, eum est
              ab ratione expedita hic! Consectetur.
            </p>
          </div>

          <div className=" col-lg-3">
            <div className="table  ">
              <table className="border border-collapse">
                <tr className="border ">
                  <td>Course Name</td>
                  <td className="border ">UI Best Practices: {id}</td>
                </tr>
                <tr className="border">
                  <td>Duration</td>
                  <td className="border ">22 Hours</td>
                </tr>
                <tr className="border ">
                  <td>Price</td>
                  <td className="border">$120</td>
                </tr>
              </table>
            </div>
          </div>
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
                      <img
                        height={230}
                        width={180}
                        style={{ objectFit: "cover" }}
                        src="/assets/images/event-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul>
                      <li>
                        <span className="category">Web Design</span>
                        <h4>UI Best Practices: {id}</h4>
                      </li>
                      <li>
                        <span>Date:</span>
                        <h6>16 Feb 2036</h6>
                      </li>
                      <li>
                        <span>Duration:</span>
                        <h6>22 Hours</h6>
                      </li>
                      <li>
                        <span>Price:</span>
                        <h6>$120</h6>
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
