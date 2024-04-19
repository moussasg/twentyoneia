import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import axios from "axios";
import { useRouter } from 'next/router';
import Link from 'next/link';
//import {BsFillCloudUploadFill} from "react-icons/bs"
function ProductDetail() {
  const router = useRouter()
  const [data, setData] = useState([]);
  const jobId = router.query.jobId;
  useEffect(() => {
    axios.get(`https://api.avidhilda.com/api/career/getJobs/${jobId}`) /*Second Api*/
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data.jobs);
        }
      })  
.catch((error) => {
        console.log("Error:", error);
      })
  }, [jobId])
  return (
    <Layout>
  <br></br>   
        <h2 className='color-linear text-center border-bottom border-2 border-primary p-2 rounded-circle'>Job Categories</h2>
        <br></br>
      <div className="banner relative">
        <div className="cover-home3">
          <div className="container">
            <div className="d-flex">
              <div className="col-xl-10 col-lg-12 m-auto">
                {data.map((jobId, i) => (
                  <div key={i}>
                    <div className="mt-16 custom gap-3 wow animate__animated animate__fadeInUp">
                    <h3 className="color-linear d-inline-block mt-30">
                    <Link href={`/jobsdetails/${jobId?.id}`}>
                        {jobId.title} - {jobId.code}
                      </Link>
                      </h3>
                      <div className="color-gray-500 border-start border-2 border-primary p-3 wow animate__animated animate__fadeInUp" style={{ whiteSpace: "pre-line" }}>{jobId.description.slice(0,450)}...</div>
                    </div>
                </div>
                ))}
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>

    </Layout>
  );
}
export default ProductDetail;
