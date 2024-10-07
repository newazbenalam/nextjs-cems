"use client";
import { CreateUser } from "@/app/_lib/actions/UserUsecase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function DashboardUserAdd({ params }) {
    const [item, setItem] = useState({});
    const { id } = params;

    const router = useRouter();

    useEffect(() => {
        // const foo = async () => {
        //     const res = await GetSingleService(id);
        //     setItem(res);
        // };
        // foo();
    }, []);

    const onHandleChange = async () => {
        const res = await CreateUser(item);
        console.log(res);
        if (!res.error) {
            window.location.reload();
            router.back();
        }
    }

    return (
        <main>
            <div className="container-fluid card mx-2">
                <div className="">
                    <div className="card-header row ">
                        <h6 className="card-title  text-m col-6">{"Service's details"}</h6>
                        <p className="text-secondary text-xs col-6 text-end pe-4 pt-1">
                            {item.createdAt
                                ? // format datetime to date only
                                Date(item.createdAt)
                                    .split(":")[0]
                                    .split(" ")
                                    .slice(0, 4)
                                    .join(" ")
                                : "16 Feb 2023"}
                        </p>
                    </div>
                    <div className="card-body pt-0">
                        <div className="row">
                            {/* <div className="col-md-6">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div> */}

                            <form>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, email: e.target.value })}
                                            id="email"
                                            value={item.email}

                                        />

                                    </div>
                                    {/* dropdown for status */}

                                    {/* <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="status">Status</label>
                                        <select
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, status: e.target.value })}
                                            id="status"
                                            value={item.status == "0" ? "0" : "1"}

                                        >
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div> */}

                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="description">Name</label>
                                        <textarea
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, name: e.target.value })}
                                            id="name"
                                            rows="3"
                                            value={item.name}

                                        ></textarea>
                                    </div>

                                    {/* <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="details">Details</label>
                                        <textarea
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, details: e.target.value })}
                                            id="details"
                                            rows="3"
                                            value={item.details}

                                        ></textarea>
                                    </div> */}




                                    {/* <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="contact">Contact</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, contact: e.target.value })}
                                            id="contact"
                                            value={item.contact}

                                        />
                                    </div> */}



                                </div>

                                {/* <div className="col-12 pt-4" >
                                    <label htmlFor="thumbnail">Thumbnail</label>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, thumbnail: e.target.value })}
                                            id="thumbnail"
                                            value={item.thumbnail}

                                        />
                                    </div>
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fluid
                                        className="mb-3 rounded-4 mt-3"
                                        style={{ width: 250 }}
                                    />
                                </div> */}


                                {/* for images grid view */}
                                {/* <div className="col-12">
                                    <label htmlFor="images">Images</label>
                                    <div className="row">
                                        {item.images && item.images.map((image, index) => (
                                            <div key={index} className="col-4" style={{ width: 220 }}>
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={item.title}
                                                    fluid
                                                    className="mb-3 rounded-4"
                                                />
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div> */}

                                {/* submit button */}
                                <div className="form-group col-12">
                                    <button
                                        type="button"
                                        className="btn btn-primary shadow-none "
                                        onClick={onHandleChange}
                                    >
                                        Publish
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
