'use client';

import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';

export default function DashboardService({ params }) {

    const { id } = params;

    useEffect(() => {
    }, [])


    return (
        <main>
            <div className="container-fluid py-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-4">
                                    <h6>Total services</h6>
                                    {/* <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                    <span className="font-weight-bold ms-1">30 done</span> this month
                  </p> */}
                                </div>
                                <div className="col-4 ">
                                    <h6 className="text-hint text-end">Created At</h6>
                                    {/* <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                    <span className="font-weight-bold ms-1">30 done</span> this month
                  </p> */}
                                </div>
                                <button type="button" className="btn btn-primary col-2" style={{ 'height': 40 }}>
                                    <i className="fa fa-edit"></i>
                                </button>

                            </div>
                        </div>
                        <div className="card-body">

                            <div>
                                <h6>Title:</h6>
                                <p>lorem</p>
                            </div>
                            <div>
                                <h6>Description:</h6>
                                <p>lorem skdfjhdskjfndknksbndavjksADNC kxnfzdljfbkl zd,gjvl</p>
                            </div>
                            <div>
                                <h6>Details:</h6>
                                <p>lorem skdfjhdskjfndknksbndavjksADNC kxnfzdljfbkl zd,gjvl</p>
                            </div>
                            <div>
                                <h6>Contact:</h6>
                                <p>lorem skdfjhdskjfndknksbndavjksADNC kxnfzdljfbkl zd,gjvl</p>
                            </div>
                            <div>
                                <h6>Thumbnail:</h6>
                                <div className="col-3">
                                    <Image alt="" src="https://loremflickr.com/640/480" className="border-radius-lg" height={200} width={20} />

                                </div>
                            </div>
                            <div>
                                <h6>Related Services:</h6>
                                <p>lorem skdfjhdskjfndknksbndavjksADNC kxnfzdljfbkl zd,gjvl</p>
                            </div>
                            <div>
                                <h6>images:</h6>
                                <div classname="d-flex flex-warp">
                                    <div className="col-3">
                                        <Image alt="" src="https://loremflickr.com/640/480" className="border-radius-lg" height={200} width={20} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
