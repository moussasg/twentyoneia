import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from 'next/head'; // result
import Layout from "@/components/layout/Layout"
import { useRouter } from "next/router";
export default function Outcome() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const outcomeId = router.query.outcomeId;
  useEffect(() => {
    axios.get(`https://api-dev.twenty-one-ai.com/api/products/getproduct/${outcomeId}`) /*Second Api*/
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data);
          console.log(outcomeId)
        }
      })  
.catch((error) => {
        console.log("Error:", error);
      })
  }, [outcomeId])

  return (
  <>
  <Head>
                <title>
                Outcomes
              </title>
            </Head>
            <Layout>
              <br></br>
              <br></br>
  <h3 className="text-center relative  color-linear border-bottom border-2 border-primary p-4 rounded-circle">{data?.title}</h3  > 
  <br></br>
  <h2 className="color-linear text-center mb-20 wow animate__animated animate__fadeInUp">
  Outcome   
  </h2>
  <br></br>
  <div className="text-center text-grey-500 fs-4">Coming Soon ...</div> 
            </Layout>    
    </>
    )

};
