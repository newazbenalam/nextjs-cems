import React from 'react'
import { Image } from 'react-bootstrap'

export default function Users() {
  return (
   <>
   <main>
    <div className='container-fluid py-4'>
      
    <div className="col-12">
          <div className="card">
            <div className="card-header pb-0">
              <div className="row">
                <div className="col-lg-6 col-7">
                  <h6>Projects</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                    <span className="font-weight-bold ms-1">30 done</span> this month
                  </p>
                </div>
                <div className="col-lg-6 col-5 my-auto text-end">
                  <div className="dropdown float-lg-end pe-4">
                    <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-ellipsis-v text-secondary"></i>
                    </a>
                    <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                      <li><a className="dropdown-item border-radius-md" href="#">Action</a></li>
                      <li><a className="dropdown-item border-radius-md" href="#">Another action</a></li>
                      <li><a className="dropdown-item border-radius-md" href="#">Something else here</a></li>
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
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {
                      courses.map((course, index) => {
                        return (
                        <tr key={index}>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <i className="fa fa-book-open me-3" alt="xd"/>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">{course.title}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                              <Image src="../assets/img/team-1.jpg" alt="team1"/>
                            </a>
                            <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                              <Image src="../assets/img/team-2.jpg" alt="team2"/>
                            </a>
                            <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                              <Image src="../assets/img/team-3.jpg" alt="team3"/>
                            </a>
                            <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                              <Image src="../assets/img/team-4.jpg" alt="team4"/>
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> {'BDT '+ course.price} </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">{course.averageRating}</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info " style={{width: (parseFloat(course.averageRating)*20)+'%'}} role="progressbar" aria-valuenow={course.averageRating} aria-valuemin="0" aria-valuemax="5"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      )
  
                      })
                    } */}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
    </div>
   </main>
   </>
  )
}
