import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Layout from "@/components/layout/Layout";

export default function index() {
  const [data, setData] = useState([]);
  const router = useRouter()
  const featureId = router.query.featureId;
  useEffect(() => {
    
    axios.get(`https://api-dev.twenty-one-ai.com/api/products/getproduct/${featureId}`) /*Second Api*/
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data);
          console.log(featureId)
        }
      })  
.catch((error) => {
        console.log("Error:", error);
      })
  }, [featureId])
  return (
    <>
        {/*  <div></div>*/}
    <Head>
    <title>
        Genz - Portfolio Details
    </title>
</Head>
<Layout>
  <h2 className="color-linear text-center mb-20 wow animate__animated animate__fadeInUp border-bottom border-2 border-primary p-2 rounded-circle">
                      {data?.title}
</h2>
<h2 className='color-linear text-center  wow animate__animated animate__fadeInUp'>{data?.heading1}</h2>
<br></br>
{/*add description */}
<div className='container d-flex flex-column-reverse flex-sm-row gap-3 position-relative'>
      <div className='w-50 wow animate__animated animate__fadeInUp'>
        <div className='border-start border-2 border-primary p-3 fs-4'>Description</div>
        <div className='lh-lg text-capitalize fs-4 ' style={{ whiteSpace: "pre-line" }}>{data?.description1}</div>
        <br />
        <div className='fs-6 border-start border-2 border-primary p-3 card-testimonials bg-gray-850 border-gray-800 hover-up'>{data?.authorname}</div>
      </div>
      <div className='w-50  wow animate__animated animate__fadeInUp'>
        <div className='h-100'>
          <img className="w-100 h-100" src={data?.image1} alt="Description de l'image" />
        </div>
      </div>
    </div>
    <br />

    <div className='container d-flex flex-column-reverse flex-sm-row gap-3 position-relative '>
      <div className='w-50  wow animate__animated animate__fadeInUp'>
        <div className='h-100'>
          <img className="w-100 h-100" src={data?.image2} alt="Description de l'image" />
        </div>
      </div>
      <div className='w-50  wow animate__animated animate__fadeInUp'>
        <div className='border-start border-2 border-primary p-3 fs-4'>Description</div>
        <div className='lh-lg text-capitalize fs-4 ' style={{ whiteSpace: "pre-line" }}>{data?.description2}</div>
        <br />
        <div className='fs-6 border-start border-2 border-primary p-3 card-testimonials bg-gray-850 border-gray-800 hover-up  wow animate__animated animate__fadeInUp'>{data?.authorname}</div>
      </div>
    </div>
</Layout>
    </>
  )
}
