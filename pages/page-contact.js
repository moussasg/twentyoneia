import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function PageContact() {
    const [formData, setFormData] = useState({ name: '', email: '', number: '', messages: '' , subject:''});
    const [errors, setErrors] = useState({ name: '', email: '', number: '', messages: '', subject:'' })
    const [showConfirmation , setshowConfirmation] = useState(false)
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
const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newErrors = {};
    
    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => !!value);
  
    if (!allFieldsFilled) {
      // If any field is missing, show an error for each empty field
      for (const field in formData) {
        if (!formData[field]) {
          newErrors[field] = 'Please fill in this field.';
        }
      }
      setErrors(newErrors);
    } else {
      // If all fields are filled, show the confirmation message
      setshowConfirmation(true);
    }
  };
  
    return (
        <>
            <Head>
                <title>
                    Contact
                </title>
            </Head>
            <Layout>

                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-70">
                                    <h1 className="color-linear d-inline-block mb-30">Contact Us</h1>
                                    <p className="text-xl color-gray-500">We are Twenty-One-Ai , a creative and dedicated group of individuals who love web development<br className="d-none d-lg-block" />almost as much as we love our customers. We are passionate team with the mission for<br className="d-none d-lg-block" />achieving the perfection in web design. All designs are made by love with pixel perfect design<br className="d-none d-lg-block" />and excellent coding quality. Speed, security and SEO friendly alway in our mind.</p>
                                </div>
                                <div className="text-center mt-30">
                                    <div className="d-inline-block support text-start">(971) 561503253<br />(971) 521954000</div>
                                    <div className="d-inline-block location text-start">Email : <br />career@twenty-one-ai.com</div>
                                    <div className="d-inline-block plane text-start">Office no.2401 Prism Tower<br />Business Bay, Dubai, UAE</div>
                                </div>
                                <div className="box-map mt-70 mb-50">
                                    <iframe className="google-map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4665843515772!2d55.25853377608913!3d25.187483032092693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0d69e8d93%3A0x8f0fe5aa20493ae4!2sThe%20Prism!5e0!3m2!1sen!2sae!4v1697870420072!5m2!1sen!2sae" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                <div className="form-contact">
                                    <div className="text-center">
                                        <h3 className="color-linear d-inline-block mb-10">Drop Us a Line</h3>
                                        <p className="text-xs color-gray-500">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input 
                                             name="name"
                                                className="form-control bg-gray-850 border-gray-800 color-gray-500" 
                                                type="text" 
                                                placeholder="Your name *" 
                                                onChange={handleChange}
                                                />
<p className="error-message">{errors.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input 
                                     name="email"
                                                className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" 
                                                placeholder="Email *" 
                                                onChange={handleChange}
                                                />
                                                <p className="error-message">{errors.email}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Phone number *"
 onChange={handleChange}         
 name="number"
                           
                                                  />
    <p className="error-message">{errors.number}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Subject *" 
                      onChange={handleChange}
                      name="subject"

                                                />
<p className="error-message">{errors.subject}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control bg-gray-850 border-gray-800 color-gray-500" rows={5} placeholder="Message *" defaultValue={""} 
                       onChange={handleChange}
                       name="messages"
                                                />
                                                <p className="error-message">{errors.messages}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="text-center mb-50" onClick={handleSubmit}>
                                                <Link href="#" className="btn btn-linear btn-load-more btn-radius-8 hover-up">
                                                Send Message
                                                <i className="fi-rr-arrow-small-right" /></Link></div>
                                                {showConfirmation && (
                                     <div className="d-flex w-auto sm:w-100 justify-content-center alert alert-success animate__animated animate__flash animate__repeat-2">
                                 <div className='w-auto'>Thank you for contacting us</div>
                                    </div>
                                        )} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}