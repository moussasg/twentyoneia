import Link from 'next/link'
import React  from 'react'
import { useState } from 'react';
const Footer = () => {
    const [errors , setErrors ] = useState({name: '', email: ''});
const [formData, setFormData] = useState({ name: '', email: ''});
    const [showConfirmation, setShowConfirmation] = useState(false);
    const Subscribefunct = (event) =>  {
        event.preventDefault();
        console.log("Clicked Register");
        const newErrors = {};
        for (const field in formData) {
          if (!formData[field]) {
            newErrors[field] = 'Please fill in this field.';
          }
        }
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
        setShowConfirmation(true)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // Clear the error when the user starts typing in the field
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    return (    
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-1 bg-gray-850 border-gray-800">
                        <div className="row">
                            <div className="col-lg-4 mb-30">
                                <Link className="wow animate__animated animate__fadeInUp" href="/">
                                    <img className="logo-night w-50" alt="GenZ" src="/assets/imgs/ailogo.png" />
                                    <img className="d-none logo-day w-50" alt="GenZ" src="/assets/imgs/ailogowhite.png" />
                                </Link>
                                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">To pioneer the future of intelligent technologies, shaping a world where businesses thrive, decisions are optimized, and human potential is amplified through cutting-edge AI innovations.</p>
                                <h6 className="color-white mb-5 wow animate__animated animate__fadeInUp">Address</h6>
                                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">Office no.2401 Prism Tower<br/>Business Bay, Dubai, UAE</p>
                            </div>

                            <div className="col-lg-4 mb-30">
                                <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Categories</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/researchdev">Research & Development</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/ethical">Ethical AI </Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500"  href="/industry">Industry</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500"  href="/globalcollaboration">Global Collaborations</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500"  href="/NLP">NLP EXCELLENCE</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500"  href="/vision">Computer Vision & Revolution</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-30">
                                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Newsletter</h4>
                                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">Sign up to be first
                                    to receive the latest stories inspiring us, case studies, and industry news.</p>
                                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                                    <form action="#">
                                        <div className="form-group">
                                            <input className="input-name border-gray-500" type="text" name="name" placeholder="Your name" onChange={handleChange}/>
                                            <p className="error-message">{errors.name}</p>
                                        </div>
                                        <div className="form-group">
                                            <input className="input-email border-gray-500" type="email" name="email" placeholder="Emaill address" onChange={handleChange}/>
                                            <p className="error-message">{errors.email}</p>
                                        </div>
                                        <div className="form-group mt-20">
                                            <button onClick={Subscribefunct} className="btn btn-linear hover-up">
                                                Subscribe
                                                <i className="fi-rr-arrow-small-right"/>
                                            </button>
                                        </div>
                                        {showConfirmation && (
                                     <div className="d-flex w-auto sm:w-100 justify-content-center alert alert-success animate__animated animate__flash animate__repeat-2">
                                 <div className='w-auto'>You're now part of our community </div>
                                    </div>
                                        )} 
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                        <div className="footer-bottom border-gray-800">
                            <div className="row">
                                <div className="col-lg-5 text-center text-lg-start">
                                    <p className="text-base color-white wow animate__animated animate__fadeIn">© 2023 Created by<Link className="copyright" href="/" target="_blank"> Twenty-One-Ai.com</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;