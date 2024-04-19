import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/utils/themeContext';
{/* isDarkMode ? 'razblack.png' : 'razwhite.png',*/}
const Brand = () => {
  const { isDarkMode } = useTheme(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        img: isDarkMode ? 'razlogo.png' : 'razwhite.png',
        url: 'https://raazcreator.com',
      },
      {
        img: isDarkMode ? 'tentblack.png': 'agon.png' ,
        url: 'https://tenth-mind.com',
      },
      {
        img: 'fig.png',
        url: 'https://avidhilda.com',
      },
      {
        img: 'flow.png',
        url: 'https://thoiltrading.com/tafkeer/index',
      },
      {
        img: isDarkMode ?   'fervorblack.png' :'fervorwhite.png',
        url: 'https://ffervor.com',
      },
      {
        img: 'uclogo.png',
        url: 'https://ucfashionweek.com',
      },
      {
        img: 'avinlogo.png',
        url: 'https://avinplusrealestate.com',
      },
      {
        img: 'unicorn.png',
        url: 'https://unicornflight.com',
      },
      {
        img: isDarkMode ? 'white21.png' : 'ailogo.png',
        url: 'https://twenty-one-ai.com',
      },
    ]);
  }, [isDarkMode]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="partner-area partner-area-2 pd-top-45 pd-bottom-45">
      <div className="container">
        <div className="partner-slider">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i} className="d-flex justify-content-center">
                <a href={item.url} target="_blank">
                  <img
                    src={`assets/imgs/page/homepage3/${item.img}`}
                    alt="Genz"
                    className={`brand-image px-4 ${item.className}`}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brand;