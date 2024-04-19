import React, { useEffect, useState } from "react";
import Head from "next/head";
import PortfolioFilter from "@/components/elements/PortfolioFilter";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Products from "@/components/Model/Products";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const Portfolio = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const [pdata, setpdata] = useState({}); // Set initial state to an empty object

  useEffect(() => {
    console.log("id for productId is: ", productId);
    if (productId) {
      Products.getProductById(productId)
        .then((res) => {
          console.log("test", res);
          if (res.success) {
            console.log("data is: ", res.data);
            setpdata(res.data);
          } else {
            toast.error("Something Went Wrong.");
          }
        })
        .catch((err) => {
          toast.error("Something Went Wrong.");
        });
    }
  }, [productId]); // Watch productId for changes
  useEffect(() => { {/* ensuring that the code inside the effect runs only on the client side */}
    // This code will be executed on the client side
    var elements = document.querySelectorAll('.opacity-transition');
    function handleMouseOver() {
      this.style.opacity = '100';
    }
    function handleMouseOut() {
      this.style.opacity = '0.7';
    }
    elements.forEach(function (element) { {/* when your component is initially rendered on the server, the document object (representing the browser's DOM) is not available that's why need forEach*/}
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });
    // Cleanup event listeners when the component unmounts
    return () => {
      elements.forEach(function (element) {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);
  return (
    <>
    
    <Head>
                <title>
                Products
              </title>
            </Head>
      <Toaster />
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="text-center mt-70 mb-50">
                  {pdata.title && (
                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                      {pdata.title}....
                    </h2>
                  )}
                  <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                    21 AI Research is devoted to contributing to the Tech World
                    <br className="d-none d-lg-block" />
                    with the latest era products.
                  </p>
                </div>
                <div className="text-start w-100 wow animate__animated animate__fadeInUp lh-base text-capitalize fs-4" style={{ whiteSpace: "pre-line" }}>{pdata.description}</div>
                <PortfolioFilter col={6} show={6} />
              </div>
            </div>
            <div class="d-flex justify-content-center w-75">
                <div class="row text-center">
                  <div class="feature-box text-lg wow animate__animated animate__fadeInUp">
                    <Link href={`/features/${productId}`}>
                      <img className="h-50 opacity-transition rounded float-end" src="./../assets/imgs/features.jpg"></img>
                    </Link>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="feature-box text-lg wow animate__animated animate__fadeInUp">
                    <Link href={`/outcomes/${productId}`}>
                    <img className="h-50 opacity-transition rounded float-end" src="./../assets/imgs/outcome.jpg"></img>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
      <style>
        {`
        .feature-box  {
            position: relative;
            animation: mymove 1s;
            transition: transform 1s ease;
            opacity:0.8;    
          }
          @keyframes mymove {
              from {top: 0px;}
              to {top: 30px;}
            }
         `}
      </style>
    </>
  );
};

export default Portfolio;
