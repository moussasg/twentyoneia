import Link from 'next/link';
import React, { useState, useEffect } from "react";
import SwitchButton from '@/components/elements/SwitchButton';
import { RxArrowDown } from "react-icons/rx";
import { RxArrowUp } from "react-icons/rx";
import Products from '../Model/Products';
const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(0);
    const [showMoreProducts, setShowMoreProducts] = useState(false);
    const [isToggled, setToggled] = useState(false);
    const [products, setproducts] = useState([]);
    const toggleShowMoreProducts = () => {
        setShowMoreProducts(!showMoreProducts);
    };
    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);
    useEffect(() => {
        Products.getProducts()
            .then((res) => {
                if (res.success) {
                    setproducts(res.data);

                } else {
                    toast.error("Something Went Wrong.");
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong.");
            });
    }, [])
    return (
        <>
            <header className={scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo">
                            <Link className="d-flex" href="/">
                                <img className="logo-night" alt="GenZ" src="/assets/imgs/ailogo.png" />
                                <img className="d-none logo-day" alt="GenZ" src="/assets/imgs/ailogowhite.png" />
                            </Link>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    <li ><Link className="active" href="/">Home</Link></li>
                                    <li><Link className="color-gray-500" href="/aboutus">About Us</Link>
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="#">Services</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/aiservice">AI-Powered Business Transformation</Link></li>
                                            <li><Link className="color-gray-500" href="/predictive">Predictive Analytics & Data Insights</Link></li>
                                            <li><Link className="color-gray-500" href="/NLP">NLP Excellence</Link></li>
                                            <li><Link className="color-gray-500" href="/vision">Computer Vision Revolution</Link></li>
                                            <li><Link className="color-gray-500" href="/consultancy">ML Consultancy & Development</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="#">Strategic Directions</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/industry" as="/industry">Industry Centric Solutions</Link></li>
                                            <li><Link className="color-gray-500" href="/researchdev">Research & Development</Link></li>
                                            <li><Link className="color-gray-500" href="/globalcollaboration">Global Collaborations</Link></li>
                                            <li><Link className="color-gray-500" href="/ethical">Ethical AI Practices</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link className="color-gray-500" href="#">
                                            Products
                                        </Link>
                                        <ul className="sub-menu two-col">
                                            {products.slice(0, showMoreProducts ? products.length : 4).map((product, index) => (
                                                <li key={index}>
                                                    <Link className="color-gray-500" href={`/products/${product.id}`}>  
                                                        {product.title}
                                                    </Link>

                                                </li>
                                            ))}
                                            {products.length > 4 && (
                                                <li className="color-gray-500 d-flex justify-content-center" onClick={toggleShowMoreProducts}>
                                                    {showMoreProducts ? <RxArrowUp /> : <RxArrowDown />}
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                    <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                    <li><Link className="color-gray-500" href="/careers">Careers</Link></li>
                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right text-end">
                            <Link className="btn btn-search" href="#" onClick={toggleTrueFalse} />
                            <SwitchButton />
                            <div className={isToggled ? "form-search p-20 d-block" : " form-search p-20 d-none"}>
                                <form action="#">
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <input className="btn-search-2" />
                                </form>
                                <div className="popular-keywords text-start mt-20">
                                    <p className="mb-10 color-white">Popular tags:</p>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Services,</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Features,</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Testinomals</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># AI Consultancy</Link>
                                </div>
                            </div><Link className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow" href="/page-login">Subscribe</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
