import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import Head from 'next/head';
import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "./firebase/firebaseconfig";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({ name: '', password: '' });
  const [errors, setErrors] = useState({ name: '', password: '' });

  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked Register");

    try {
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
      const response = await axios.post(/* data work because it's defined yet */
        // api login
        { ...formData }
      );
      if (response.data.success === true) {
        console.log('post success');
      }
    } catch (error) {
      console.error("Error during the request:", error.response?.data);
    }
  };

    
    // Sign in with Google
    const GoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
provider.addScope('email');
provider.setCustomParameters({
  prompt: 'select_account'
})
      try {
        const result = await signInWithPopup(auth, provider);
        if (result?.user?.email === result.user.email) {
          router.push('/predictive');
        }
      } 
      catch (error) {
        console.error('Google Sign-In Error:', error.message);
      }
    };

  return (
    <>
      <Head>
        <title>Genz - Login</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="text-center mt-50 pb-50">
                  <h2 className="color-linear d-inline-block">Welcome back !</h2>
                </div>
                <div className="box-form-login pb-50">
                  <div className="form-login bg-gray-850 border-gray-800 text-start">
                    <form action="#">
                      <div className="form-group">
                        <input
                          className="form-control bg-gray-850 border-gray-800"
                          type="text"
                          placeholder="User name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <p className="error-message">{errors.name}</p>
                      </div>
                      <div className="form-group position-relative">
                        <input
                          className="form-control bg-gray-850 border-gray-800 password"
                          name="password"
                          type={passwordShown ? "text" : "password"}
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <p className="error-message">{errors.password}</p>
                        <span className="viewpass" onClick={togglePasswordVisibility} />
                      </div>
                      <div className="form-group">
                        <Link className="color-white link" href="#">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-linear color-gray-850 hover-up"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Log me in
                        </button>
                      </div>
                      <div className="form-group mb-0">
                        <span>Don’t have an account?</span>
                        <Link className="color-linear" href="/page-signup">
                          {" "}
                          Sign Up
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="box-line">
                    <span className="bg-gray-900">Or, sign in with your email</span>
                  </div>
                  <div className="box-login-gmail bg-gray-850 border-gray-800 hover-up">
                    <div className="btn btn-login-gmail color-gray-500" onClick={GoogleLogin}>
                      Sign in with Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
  }
