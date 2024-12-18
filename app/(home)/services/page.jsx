
"use client";

import { GetServices } from '@/app/_lib/actions/ServicesUsecase';
import Link from "next/link";
import React, { useEffect } from "react";
import { Image } from 'react-bootstrap';
import ServicesGridView from '../../(components)/ServicesGridView';

export default function ServicesList() {
    const [services, setServices] = React.useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await GetServices();
            setServices(res);
            console.log(res);
        };

        getData();

    }, []);




    return (
        <>
            <section className="mt-5" id="courses">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Our</h6>
                                <h2>Services</h2>
                            </div>
                        </div>
                    </div>
                    {/* <ul className="event_filter">
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
                    </ul> */}


                    {/* <div className="row event_box">

                        {
                        // spinner 
                        }

                        {services.map((service) => (
                            <div key={service.id} className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design ">
                                <Link href={`/services/${service.id}`} >
                                    <div className="events_item shadow">
                                        <div className="thumb">
                                            <a href="#">
                                                <Image src={service.thumbnail} alt="" />
                                            </a>
                                        </div>
                                        <div className="down-content">
                                            <h4>{service.title}</h4>
                                            <span className="text-secondary">{service.description}</span>
                                        <div class="main-button mt-3 text-secondary"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        ))}



                    </div> */}

                    <ServicesGridView services={services} />


                </div>
            </section>
        </>
    );
}
