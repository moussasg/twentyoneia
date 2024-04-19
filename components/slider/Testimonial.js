import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {
    const data = [
        {
            img: "/assets/imgs/page/about/author.png",
            name: "Mostafa Forouzand",
            position : "Aria-Group CEO",
            message : "I am delighted to address you today as the CEO of our company. It is with great pleasure that I share with you the journey of our business and the success we have achieved over the years."
        },
        {
            img: "/assets/imgs/page/about/author2.jpeg",
            name: "Mehdi Golami",
            position : "Aria-Group CEO",
            message : "Hello iam CEO of Aria-Group we are devoted and esteemed to provide our best services to our valuabe client & make sure they get satisfied."
        },
        {
            img: "/assets/imgs/page/about/author3.jpeg",
            name: "Dr Zahra Basirat",
            position : "Manager",
            message : "Hello iam Zahra manager of 21 ai , i welcome you to our company profile and wish you a good journey with our company , we wwould be happy to have a cup of coffie with you."
        },
      
    ];
    return (
        <>
            <div className="text-center mt-70 mb-50">
                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Team's Message</h2>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">21 Ai is a B2B and B2C company for buisness industry.</p>
            </div>
            <div className="box-testimonials mb-150animate__fadeIn mb-100">
                <div className="box-swiper"></div>
                    <div className="swiper-container swiper-group-3">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            navigation={{
                                prevEl: ".swiper-button-prev-style-3",
                                nextEl: ".swiper-button-next-style-3",
                            }}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                575: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                767: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1199: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1350: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="swiper-wrapper pt-5"
                        >
                            {data.map((item, i) => (
                                <SwiperSlide className="swiper-slide w-full h-full"  key={i}>
                                    <div className="card-testimonials bg-gray-850 border-gray-800 hover-up">
                                        <div className="box-author mb-20"><img src={item.img} alt="Genz" />
                                            <div className="author-info">
                                                <h6 className="color-gray-700">{item.name}</h6><span className="color-gray-700 text-sm">{item.position}</span>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="color-gray-500">{item.message}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-buttons">
                            <div className="swiper-button-prev swiper-button-prev-style-3" />
                            <div className="swiper-button-next swiper-button-next-style-3" />
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Testimonial;

