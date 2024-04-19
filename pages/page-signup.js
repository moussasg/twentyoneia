import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import React, { useState } from "react"
export default function PageSignup() {
  const [formData, setFormData] = useState({ name: '', email: '', user: '', password: ''});
    const [errors, setErrors] = useState({ name: '', email: '', user: '', password: '' })
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Clicked Register")       
        try {
          // Find the selected job by its ID
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
          const response = await axios.post( /* data work because it's defined yet */
            // api signup
            { ...formData }
          )
          if (response.data.success === true) {
           console.log('post success')
              }
            } 
        catch (error) {
          console.error("Error during the request:", error.response?.data)
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
    return (
        <>
            <Head>
                <title>
                    Genz - Signup
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-50 pb-50">
                                <h2 className="color-linear d-inline-block">Register</h2>
                                </div>
                                <div className="box-form-login pb-50">
                                    <div className="form-login bg-gray-850 border-gray-800 text-start">
                                        <form action="#">
                                            <div className="form-group">
<input className="form-control bg-gray-850 border-gray-800" type="text" placeholder="Full name" name="name" value={formData.name} onChange={handleChange}/>
<p className="error-message">{errors.name}</p>
      </div>
     <div className="form-group">
                                       <input className="form-control bg-gray-850 border-gray-800" type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                                       <p className="error-message">{errors.email}</p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text" placeholder="User name" name="user" value={formData.user} onChange={handleChange} />
                                                <p className="error-message">{errors.user}</p>
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password" name="password" value={formData.password} onChange={handleChange}
                                                type={passwordShown ? "text" : "password"} placeholder="Password" /><span className="viewpass" onClick={togglePasswordVisiblity} />
                                                <p className="error-message">{errors.password}</p>
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password" type={passwordShown ? "text" : "password"} placeholder="Confirm password" name="password" value={formData.password} onChange={handleChange}/>
                                                <span className="viewpass" onClick={togglePasswordVisiblity} />
                                                <p className="error-message">{errors.password}</p>
                                            </div>
                                            <div className="form-group">
                                                <button onClick={handleSubmit} className="btn btn-linear color-gray-850 hover-up" type="submit" >Create an account</button>
                                            </div>
                                            <div className="form-group mb-0"><span>Already have an account?</span><Link className="color-linear" href="/page-login"> Sign In</Link></div>
                                        </form>
                                    </div>
                                    <div className="box-line"><span className="bg-gray-900">Or, sign up with your email</span></div>
                                    <div className="box-login-gmail bg-gray-850 border-gray-800 hover-up"><Link className="btn btn-login-gmail color-gray-500" href="#">Sign up with Google</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}