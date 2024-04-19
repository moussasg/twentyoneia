import { useKeywords } from '../../keywordcontext';
import Head from 'next/head'; // result
import Layout from "@/components/layout/Layout";
import { useState } from 'react';
import Link from 'next/link';
import {BsFillCloudUploadFill} from "react-icons/bs"
import axios from 'axios';
const Search = () => {
  const [showdetails, setShowdetails] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [Showresume, setShowresume] = useState(true);
  const [Showdetaill, setShowdetaill] = useState(false);
  const { keywords } = useKeywords();
  const [showform, setshowform] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', messages: ''});
  const [errors, setErrors] = useState({ name: '', email: '', mobile: '', messages: '' })
  const handleClickdet = () => {
    setShowdetails(true) 
    setShowresume(false)
    setShowdetaill(true)
    document.getElementById('buttonhidden').style.display = "none";
  };
  const handleClicapp = () => {
    setshowform(true)
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };
  const handleAttachmentChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the selected file is a PDF
      if (file.type === 'application/pdf') {
        // Check if the file size is within the allowed limit (25MB)
        if (file.size <= 25 * 1024 * 1024) {
          setAttachment(file);
        } else {
          // Display an error message or take appropriate action if the file is too large
          console.log("File size exceeds the allowed limit (25MB)");
        }
      } else {
        // Display an error message or take appropriate action if the selected file is not a PDF
        console.log("Please select a PDF file.");
      }
    }
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
  const handleSubmit = async (event, item) => { /*item should declared because not defined yet inside handlsubmit*/
    event.preventDefault();
    console.log("Clicked Register");
    try {
      let base64Attachment = "";
      if (attachment) {
        base64Attachment = await convertFileToBase64(attachment);
      }
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
      const response = await axios.post(
        "https://api-dev.twenty-one-ai.com/api/sendMail/career",
        { ...formData, base64Attachment, subject: item?.title, code: item?.code }
      );
      if (response.data.success === true) {
        setShowConfirmation(true)
        console.log('post success');
      }
    } catch (error) {
      console.error("Error during the request:", error.response?.data);
    }
  }
  
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <Layout>
        <h2 className='color-linear text-center border-bottom border-2 border-primary p-2 rounded-circle'>Search Results</h2>
        <div className="banner relative">
        <div className="cover-home3">
          <div className="container">
            <div className="d-flex">
              <div className="col-xl-10 col-lg-12 m-auto">
        {keywords?.length > 0 ? (
          keywords.map((item, i) => (
            <div key={i} className='p-3'>
              <h2 className="color-linear d-inline-block mt-30">{item?.title}</h2>
              {Showresume ? (
                <h6 className="text-start color-gray-500 border-start border-2 border-primary p-3 wow animate__animated animate__fadeInUp" style={{ whiteSpace: "pre-line" }}>{item?.description.slice(0, 500)}....</h6>
              ) : (
                <h6 className="text-start color-gray-500 border-start border-2 border-primary p-3 wow animate__animated animate__fadeInUp" style={{ whiteSpace: "pre-line" }}>{Showdetaill && (item?.description)}</h6>
              )}
              <br />
              <button id="buttonhidden" onClick={() => handleClickdet(item.id)} className="btn btn-linear btn-arrow-right">Show Details<i className="fi-rr-arrow-small-right" /></button>
              {showdetails &&  (
                <div className="text-center mt-30 d-flex flex-column gap-5 h-auto">
                  <div className="border-start border-2 border-primary p-3">
                    <h3 className="text-start color-gray-500">Qualification</h3>
                    <br></br>
                    <p className="text-start color-gray-500" style={{ whiteSpace: "pre-line" }}>{item.qualification}</p>
                  </div>
                  <div className="border-start border-2 border-primary p-3">
                    <h3 className="text-start color-gray-500">Benefits</h3>
                    <p className="text-start color-gray-500" style={{ whiteSpace: "pre-line" }}>{item.benefits}</p>
                  </div>
                  <div className="border-start border-2 border-primary p-3">
                    <h3 className="text-start color-gray-500">Salary</h3>
                    <p className="text-start color-gray-500">{item.salary}</p>
                  </div>
                  <div className="d-flex justify-center" style={{ width: "30%" }}>
                    <button onClick={handleClicapp} className="btn btn-linear btn-load-more btn-radius-8 hover-up">
                      Apply
                      <i className="fi-rr-arrow-small-right" />
                    </button>
                  </div> 
                </div>
              )}
              {showform &&  (
                <div className="form-contact">
                <div className="mt-50 grid col-12 col-lg-6 text-center"> {/*!!! important responsive !!*/}
                  <div className="col-lg-8">
                    <div className="form-group">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control bg-gray-850 border-gray-800 color-gray-500"
                        type="text"
                        placeholder="Your name *"
                      />
                      <p className="error-message">{errors.name}</p>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control bg-gray-850 border-gray-800 color-gray-500"
                        type="text"
                        placeholder="Email *"
                      />
                      <p className="error-message">{errors.email}</p>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="form-control bg-gray-850 border-gray-800 color-gray-500"
                        type="text"
                        placeholder="mobile *"
                      />
                      <p className="error-message">{errors.mobile}</p>
                    </div>
                  </div>
                  <div className="col-lg-16">
                    <div className="form-group">
                      <textarea
                       style={{ height: '150px' }} // Adjust the height as needed
                       name="messages"
                        value={formData.messages}
                        onChange={handleChange}
                        className="form-control bg-gray-850 border-gray-800 color-gray-500"
                        type="text"
                        placeholder="messages *"
                      />
                      <p className="error-message">{errors.messages}</p>
                    </div>
                  </div>
    
    
                  <div className="col-lg-16" >
    
                  <div className="justify-content-center gap-4 d-flex flex-column-reverse flex-sm-row">  {/*flex-sm-row decline column-reverse*/} 
                      <div className="text-center mb-50">
                        <Link href="#">
                          {/* because noty use state data inside this componenet e and item*/}
                        <button onClick={(e) => handleSubmit(e, item)} 
                            id="registerButton"
                            className="btn btn-linear btn-load-more btn-radius-8 hover-up "
                          >
                            Submit
                            <i className="fi-rr-arrow-small-right" />
                          </button>
                        </Link>
                      </div>
                      <div className="col-lg-8">
                        <div className="form-group">
                        <input
  type="file"
  name="cv"
  accept=".pdf"
  onChange={handleAttachmentChange}
  className="form-control bg-gray-850 border-gray-800 color-gray-500"
  placeholder="drop your cv *"
  id="fileInput"
/>
<label htmlFor="fileInput">Drop Your Cv <BsFillCloudUploadFill/></label>

               <label for="drop your cv">Drop Your Cv {/*<BsFillCloudUploadFill/>*/} </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          ))
        ) : (
          <div className="text-center color-gray-500 gap-3">
            <div>Thank you very much for your interest ! </div>
            <div>Currently, we do not have a position matching the keyword you mentioned. However, please feel free to check our site regularly as new opportunities may be added in the future. We appreciate your interest in our company</div>
          </div>
        )}
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
          {showConfirmation && (
            <div className="d-flex w-auto text-nowrap fs-6 justify-content-center alert alert-success animate__animated animate__flash animate__repeat-2">
              Thank You For Your Registration
            </div>
          )}
        </div>

      </Layout>
    </div>
  );
}
export default Search;
