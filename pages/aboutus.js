import Head from 'next/head'
import React, { useEffect  } from 'react'
import Typewriter from 'typewriter-effect'
import TextTransition, { presets } from 'react-text-transition';
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import {AiOutlineArrowDown} from 'react-icons/ai'
import Spline from '@splinetool/react-spline';
    const TEXTS = ['Custom AI ', 'Machine Learning' , 'Vision' , 'Mission']
    const COLORS = ['#7f7bc2', '#f0955a', '#FFFFFF', '#7f7bc2'];

const PortfolioDetails = () => {
    const [index, setIndex] = React.useState(0);
 useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  useEffect(() => {
    // ensuring that the code inside the effect runs only on the client side
    if (typeof window !== 'undefined') {
      var elements = document.querySelectorAll('.litlerobot');
      var textbe = document.querySelectorAll('.text-be');
      function handleMouseOver() {
        this.style.opacity = '100';
        this.style.visibility = 'visible';
        this.style.transform = 'scale(2.2)';
        this.style.width = '100px';
        this.style.height = '100px';
        this.style.position = 'relative';
        textbe.forEach((textBeElement) => {
            textBeElement.style.opacity = '1';
          });
      }
      function handleMouseOut() {
        this.style.width = '100px';
        this.style.height = '100px';
        this.style.position = 'relative';
        this.style.animation = 'transform 0.3s ease';
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1.1)';
        textbe.forEach((textBeElement) => {
        textBeElement.style.opacity = '0';
          });
      }
      Array.from(elements).forEach(function (element) {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
      });
      // Cleanup event listeners when the component unmounts
      return () => {
        Array.from(elements).forEach(function (element) {
          element.removeEventListener('mouseover', handleMouseOver);
          element.removeEventListener('mouseout', handleMouseOut);
        });
      };
    }
  }, []);
    return (
        <>
            <Head>
                <title>
                    Aboutus
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-30 border-bottom border-gray-800 pb-20 d-flex w-100">
                                    <div className="box-breadcrumbs w-50">
                                        <Breadcrumb title="About Company" />
                                    </div> 
                                    </div>
                                    <div className="litlerobot" id='parallax-title' style={{position:"relative" , marginTop:"5px" , display:"flex" , justifyContent:"flex-end" , marginRight:"30%" , height:"10px" , width:"auto"}}>
                                    <img src="assets/imgs/page/bgcolor.png"  height="120px" alt='1'/>
                                    <div className="text-be w-100 d-flex flex-column d-flex justify-content-center">
                                    <div className="text-center">HI !</div>
                                    <div className='text-end text-nowrap'>Welcome At <spap className="color-linear fs-4 fw-bold"> 21-Ai</spap></div>
                                    </div>
                                    </div>
                                <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__heartBeat animate__repeat-2 d-flex justify-content-center ">
                                <div className="spline-container gap-5">
                                     <Typewriter
                                            options={{
                                                wrapperClassName: "typewrite color-linear",
                                                strings: ['About Us'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />  
                                        <div className="text-info fs-6 d-flex justify-content-center wow animate__animated animate__heartBeat animate__repeat-3">
                                        <TextTransition style={{ color: COLORS[index % COLORS.length] }} // index initailized by 0
                                        springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                        </div>
                                        </div>
                                            </h1>
                            <div className="d-flex justify-content-center w-100 mt-16 rounded-circle">
                            <div className="rounded-circle opacity-50 spline-containers w-100 wow animate__animated animate__rubberBand animate__repeat-2 border-bottom border-5 border-primary mb-2 rounded-circle">
                              <Spline scene="https://prod.spline.design/Q3Qf-qa14PGwE6se/scene.splinecode" className='rounded-circle'/>
                              </div>
                            </div>
                                <h2 className="color-linear wow animate__animated animate__fadeInUp">Introduction</h2>
                                <br></br>
                                <div className='w-100 gap-5'>
                                <p className="text-lg color-gray-500 w-100 wow animate__animated animate__fadeInUp">21AI Research  stands as a beacon of innovation in the field of Artificial Intelligence and Machine Learning, nestled in the vibrant business landscape of Dubai, UAE. We are more than just a technology company; we are architects of transformative solutions, harnessing the limitless potential of AI and Machine Learning to empower businesses with unprecedented intelligence.</p>
                                </div>
                                <div className="row mt-50 align-items-end wow animate__animated animate__fadeInUp">
                                    <div className="col-lg-8 m-auto text-center wow animate__animated animate__fadeInUp d-flex align-items-center gap-5">
                                    </div>
                                </div>
                             
                                <div className="row wow animate__animated animate__fadeInUp">
                                    <div className="col-lg-8 wow animate__animated animate__fadeInUp">
                                        <div className="content-detail border-gray-800">
                                            <div id="gotovision"></div>
                                        <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeInUp" >Vision</h3>
                                        <img src='/assets/imgs/page/vision.png'/>
                                        <br/>
                                        <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp" >To pioneer the future of intelligent technologies, shaping a world where businesses thrive, decisions are optimized, and human potential is amplified through cutting-edge AI innovations.</p>
                                        <div id="gotomission"></div>
                                        <div className="col-lg-10 marginleft">
                                            <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeInUp">Mission</h3>
                                            <img src='/assets/imgs/page/missions.jpg' className='wow animate__animated animate__fadeInUp'/>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp ">Our mission at 21 AI Research  is to redefine possibilities through intelligent technologies. We specialize in crafting custom AI and Machine Learning solutions that transcend boundaries, solve complex problems, and elevate businesses to unparalleled heights of success.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </Layout>
            <style>
        {`
               .litlerobot {
                animation: mymove 5s;
                transition: transform 0.3s ease;
                 opacity:0.8;    
               }
               .text-be {
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              
         @keyframes mymove {
             from {top: 0px;}
             to {top: 200px;}
           }
        @media only screen and (max-width: 600px) {
            .litlerobot {
                margin-left:20%;
            }
            .spline-containers {
                max-width:50%;
                max-height:50%;
          }      
        `}
      </style>
        </>
    );  
};
export default PortfolioDetails;