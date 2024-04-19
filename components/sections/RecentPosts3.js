import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Event from "../Model/Events";
import toast, { Toaster } from 'react-hot-toast';

const RecentPosts3 = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        Event.getEvents()
            .then((res) => {
                if (res.success) {
                    setEvents(res.data);
                } else {
                    toast.error("Something Went Wrong.");
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong.");
            });
    }, []);

    const toggleFullDescription = (index) => {
        const updatedEvents = [...events];
        updatedEvents[index].showFullDescription = !updatedEvents[index].showFullDescription;
        setEvents(updatedEvents);
    };

    return (
        <>
            <div className="row mt-70 w-100">
                <div className="col-lg-12">
                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Latest Events</h2>
                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Don't miss the latest events</p>
                    <div className="box-list-posts mt-70 w-100">
                        <div className="row">
                            {events.slice(0, 6).map((item, i) => (
                                <div className="col-lg-6" key={i}>
                                    <div className="card-list-posts card-list-posts-small wow animate__animated animate__fadeIn">
                                        <div className="card-image hover-up w-100">
                                            <Link href={`/`}>
                                                <img src={`${item.image}`} alt="Genz" />
                                            </Link>
                                        </div>
                                        <div className="card-info">
                                            <Link href={`/`}>
                                                <h5 className="mb-15 color-white">{item.title}</h5>
                                            </Link>
                                            <p className="color-gray-500 cursor-pointer">
                                                {item.showFullDescription ? item.description : `${item.description.slice(0, 100)}${
                                                    item.description.length > 100 ? '...' : ''
                                                }`}
                                                {!item.showFullDescription && item.description.length > 100 && (
                                                    <span className=" cursor-pointer" onClick={() => toggleFullDescription(i)}>
                                                        {' '}
                                                        Read more
                                                    </span>
                                                )}
                                            </p>
                                            <div className="row mt-20">
                                                <div className="col-6">
                                                    <span className="calendar-icon color-gray-700 text-sm mr-25">{item.date}</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-start mb-80">
                        <Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="#">
                            Show More events<i className="fi-rr-arrow-small-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPosts3;
