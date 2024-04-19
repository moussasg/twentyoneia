import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import React, { useEffect, useState }  from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useKeywords } from "../keywordcontext";
SwiperCore.use([Autoplay, Navigation]);
export default function PageContact() {
  const [errorMessage, setErrorMessage] = useState('');
  const { keywords, setKeywords } = useKeywords();
  const router = useRouter();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.avidhilda.com/api/career/getJobs?c=tweentyoneai&keyword=${keywords}`
      );
      const trimmedKeywords = keywords.toString().trim();
      if (trimmedKeywords === '') {
        setErrorMessage('Please put a value');
        return;
      }
      if (response.status === 200) {
        setKeywords(response.data.data);
        router.push(`/result/${keywords}`)
      }
    } catch (error) {
      router.push("/careers")
      console.log("Error:", error);
    }
  };
  const handleSearch = () => {
    fetchData();
    setErrorMessage('');
  };

  useEffect(() => {
    axios
      .get("https://api.avidhilda.com/api/career/getCategory/tweentyoneai") /*First getCategory Api*/
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data); // Access the first object in the array
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Career</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="text-center mt-16">
                  <h1 className="color-linear d-inline-block mb-30">
                    Careers at Twenty-One-Ai
                  </h1>
                  <p className="text-xl color-gray-500">
                    Join our team of experts in AI-Powered Business Transformation,
                    Predictive Analytics, NLP Excellence, Computer Vision Revolution, and ML Consultancy & Development. As an AI Solutions Specialist, you will be at the forefront of cutting-edge technology, driving innovation, and helping businesses harness the power of artificial intelligence to transform and thrive in today's data-driven world. If you're passionate about shaping the future of AI, we invite you to be a part of our dynamic team.
                    Feel free to modify this content to fit your specific needs and branding.
                  </p>
                </div>
                <div className="text-center mt-30">
                  <div className="d-inline-block support text-start">
                    (971) 561503253<br />
                    (971) 521954000
                  </div>
                  <div className="d-inline-block location text-start">
                    Email : <br />
                    career@twenty-one-ai.com
                  </div>
                  <div className="d-inline-block plane text-start">
                    Office no.2401 Prism Tower <br />
                    Business Bay, Dubai, UAE
                  </div>
                </div>
                <br/> 
                <div class="sm:w-100 sm:h-100 gap-3 d-flex justify-content-center flex-column flex-md-row  align-items-center">
                    <div className="sm:w-50">
                  <input
                    value={keywords}
                    type="text"
                    onChange={(e) => setKeywords(e.target.value)}
                    className="form-control"
                    placeholder="Search By Category"
                  />
                  </div>
                  <div className="h-100">
                  <button onClick={handleSearch} className="btn btn-linear hover-up hover-shadow w-100">Search</button>
                </div>
                </div>
                <p className="text-center">{errorMessage}</p>
                <br/>
                <div className="mb-70 wow animate__animated animate__fadeInUp">
                  <div className="box-topics border-gray-800 bg-gray-850 wow animate__animated animate__fadeInUp">
                    <div className="row align-items-center w-100">
                      <div className="col-lg-2">
                        <h5 className="mb-15 color-white wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                          Our Job Offers
                        </h5>
                        <p className="color-gray-500 mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                          Click on Job Details To find out more ...
                        </p>
                        <div className="box-buttons-slider position-relative wow animate__animated animate__fadeInUp">
                          <div className="swiper-button-prev swiper-button-prev-style-1" />
                          <div className="swiper-button-next swiper-button-next-style-1" />
                        </div>
                      </div>

                      <div className="col-lg-10 wow animate__animated animate__fadeInUp">
                        <div className="box-swiper">
                          <div className="swiper-container swiper-group-5">
                          <Swiper slidesPerView={2} spaceBetween={30} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} navigation={{ prevEl: ".swiper-button-prev-style-1", nextEl: ".swiper-button-next-style-1" }} className="swiper-wrapper">
  {data && data.length > 0 ? (
    data.map((item, i) => (
      <SwiperSlide className="swiper-slide" key={i}>
        <div className="card-style-1">
          <Link href={`/jobs/${item?.id}`}>
            <div className="info-bottom d-flex w-100 flex-column">
              <h6 className="color-white mb-5">{item?.title}</h6>
              <p className="text-xs color-gray-500">{item?.description}</p>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    ))
  ) : (
    <div className="w-100 d-flex text-center fw-bolder fs-6 color-linear">Sorry , Currently No job Opportunities</div>
  )}
</Swiper>
  </div>
   </div>
   </div>
   </div>
 </div>
   </div>
        </div>
    </div>
  </div>
    </div>
  </Layout>
    </>
  );
}
