import React, { useEffect, useState } from "react";
import Head from "next/head";
import PortfolioFilter from "@/components/elements/PortfolioFilter";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
// Importing axios
import axios from "axios";
// Importing necessary components (assuming they exist)
import Products from "@/components/Model/Products";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const Portfolio = () => {
  const router = useRouter();
  const { featureId, outcomeId } = router.query;
  const [pdata, setData] = useState({}); // Assuming you meant to use pdata instead of data

  useEffect(() => {
    console.log("id for featureId is: ", featureId || "Not available");
    console.log("id for outcomeId is: ", outcomeId || "Not available");
    
    // Check if featureId is available
    if (featureId) {
      // Use axios within the same useEffect
      axios.get(`https://api-dev.twenty-one-ai.com/api/products/getproduct/${featureId}`)
        .then((response) => {
          if (response.status === 200) {
            setData(response.data.data);
            console.log(featureId);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [featureId]);

  return (
    <>
      <Head>
        <title>21 AI - Portfolio</title>
      </Head>
      <Toaster />
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="text-center mt-70 mb-50">
                  {/* Use pdata.title instead of data.title */}
                  {pdata.title && (
                    <h2 className="color-linear d-inline-block mb-20 wow animate_animated animate_fadeInUp">
                      {pdata.title}....
                    </h2>
                  )}
                  <p className="text-lg color-gray-500 wow animate_animated animate_fadeInUp">
                    21 AI Research is devoted to contributing to the Tech World
                    <br className="d-none d-lg-block" />
                    with the latest era products.
                  </p>
                </div>
                <PortfolioFilter col={6} show={6} />
              </div>
            </div>
            <div className="d-flex w-100 justify-content-center gap-5">
              <div className="row justify-content-center">
                {/* Use className instead of class */}
                <div className="feature-box col-md-12 text-lg wow animate_animated animate_fadeInUp">
                  <Link href={`/dynamic/${featureId}`}>
                    <h2 className="text-center color-gray-500">Features</h2>
                  </Link>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="feature-box col-md-12 text-lg wow animate_animated animate_fadeInUp">
                  <Link href={`/outcomeId/${outcomeId}`}>
                    <h2 className="text-center color-gray-500">Outcomes</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* Use jsx instead of plain style tag */}
      <style jsx>
        {`
          .feature-box  {
            position: relative;
            animation: mymove 1s;
            transition: transform 1s ease;
            opacity: 0.8;    
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
