import Link from "next/link"
import { useState, useEffect } from "react"
import Products from '../Model/Products';
const MobileMenu = ({ openClass }) => {
    const [products, setproducts] = useState([]);
    const [showMoreProducts, setShowMoreProducts] = useState(false);
    // State to track the active status and key
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    // Function to handle toggling the active status based on the given key
    const handleToggle = (key) => {
        // Check if the current key matches the active key in the state
        if (isActive.key === key) {
            // If the current key matches, set the active status to false
            setIsActive({
                status: false,
            });
        } else {
            // If the current key does not match, set the active status to true and update the key
            setIsActive({
                status: true,
                key,
            });
        }
    };
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
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo border-gray-800">
                            <Link className="d-flex" href="/">
                                <img className="logo-night" alt="GenZ" src="/assets/imgs/ailogo.png" />
                                <img className="d-none logo-day" alt="GenZ" src="/assets/imgs/ailogowhite.png" />
                            </Link>
                        </div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/">Home</Link>

                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/aboutus">About Us</Link>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="#">Services</Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link className="color-gray-500" href="/aiservice">AI-Powered Business Transformation</Link></li>
                                                <li><Link className="color-gray-500" href="/predictive">Predictive Analytics & Data Insights</Link></li>
                                                <li><Link className="color-gray-500" href="/NLP">NLP Excellence</Link></li>
                                                <li><Link className="color-gray-500" href="/vision">Computer Vision Revolution</Link></li>
                                                <li><Link className="color-gray-500" href="/consultancy">ML Consultancy & Development</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link className="color-gray-500" href="#">Strategic Directions</Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link className="color-gray-500" href="/industry">Industry Centric Solutions</Link></li>
                                                <li><Link className="color-gray-500" href="/globalcollaboration">Global Collaborations</Link></li>
                                                <li><Link className="color-gray-500" href="/ethical">Ethical AI Practices</Link></li>
                                                <li><Link className="color-gray-500" href="/researchdev">Research & Development</Link></li>
                                            </ul>
                                        </li>
                                       
                                       
                                        <li className={isActive.key == 9 ? "has-children active" : "has-children"} onClick={() => handleToggle(9)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="#">Products</Link>
                                            <ul className={isActive.key == 9 ? "sub-menu d-block" : "sub-menu d-none"}>
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
                                        <li><Link href="/page-contact">Contact</Link></li>
                                        <li><Link className="color-gray-500" href="/careers">Careers</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <div className="mobile-account border-gray-800">
                                <div className="mobile-header-top bg-gray-900">
                                    <div className="user-account"><Link href="/page-login"><img src="/assets/imgs/template/ava.jpg" alt="GenZ" /></Link>
                                        <div className="content">
                                            <h6 className="user-name color-white">Hello<span className="color-white"> Steven !</span>
                                            </h6>
                                            <p className="font-xs text-muted">You have 3 new messages</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mobile-menu">
                                    <li><Link href="/page-login">Profile</Link></li>
                                    <li><Link href="/page-login">Articles Saved</Link></li>
                                    <li><Link href="/page-login">Add new post</Link></li>
                                    <li><Link href="/page-login">My Likes</Link></li>
                                    <li><Link href="/page-login">Account Setting</Link></li>
                                    <li><Link href="/page-login">Sign out</Link></li>
                                </ul>
                            </div> */}
                            <div className="site-copyright color-gray-400 mt-30">Copyright 2023 © 21 AI - Research
                                .<br />Designed by<Link href="http://avidhilda.com" target="_blank">&nbsp; AvidHilda IT Team</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MobileMenu;