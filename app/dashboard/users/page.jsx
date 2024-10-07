'use client';

import { useEffect, useState } from 'react'
import { GetUsers, deleteUser } from '@/app/_lib/actions/UserUsecase';
import { Image } from 'react-bootstrap'
import Link from 'next/link';

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await GetUsers();
      setUsers(res);
    }

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteUser(parseInt(id));
    if (res) {
      const dlt = users.filter((user) => user.id !== id);
      setUsers(dlt);
    }
  };

  return (
    <>
      <main>
        <div className='container-fluid py-4'>

          <div className="col-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="row">
                  <div className="col-lg-6 col-7">
                    <h6>Total services</h6>
                    {/* <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                    <span className="font-weight-bold ms-1">30 done</span> this month
                  </p> */}
                  </div>
                  {/* <div className="col-lg-6 col-5 my-auto text-end">
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
                  </div> */}

                  <Link
                    className="col-lg-6 col-5 my-auto text-end"
                    href={"/dashboard/users/add"}
                  >
                    <button className="btn btn-sm btn-primary text-white col-2 float-lg-end">
                      Add
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Username</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Role</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">official mail</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">phone</th>
                        <th className="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {!users ? <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div> :
                        users.map((user, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <Image src={user.image ?? 'https://loremflickr.com/640/480'} alt="Image placeholder" className="avatar avatar-sm me-3" />
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">{user.name}</h6>
                                  <p className="text-secondary text-xs">{user.email}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">{user.role}</p>
                              <p className="text-secondary text-xs">{user.department}</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">completed</span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">100%</span>
                            </td>
                            <td className="align-middle">
                              <Link href={'/dashboard/users/' + user.id} className="text-secondary font-weight-bold text-xs">details</Link>
                            </td>

                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm shadow-none mt-3 "
                                onClick={() => handleDelete(user.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      }
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
