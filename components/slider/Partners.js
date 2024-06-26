import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const Partners = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      
      <div
        className='partner-area partner-area-2 pd-top-45 pd-bottom-45'
        style={{ background: "url('/assets/img/partner/bg.png')" }}
      >
        <div className='container'>
          <div className='partner-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='thumb'>
                  <img src='agon.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/2.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/3.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/4.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/5.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/6.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/2.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/3.png' alt='' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/4.png' alt='' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Partners;