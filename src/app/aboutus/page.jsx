'use client';
import React from 'react'
import Link from "next/link";

import { useState } from "react";
import { loginApi } from "../services/allApi";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';



function AboutUs() {
    const router = useRouter();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      // remember: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    const handleSubmit =  async(e) => {
      e.preventDefault();
      const result= await loginApi(formData)
      console.log(result);
  
      if (result.status === 200) {
        sessionStorage.setItem("token", result.data.token);
        // sessionStorage.setItem("existingUser", JSON.stringify(result.data.user));
        // Show success toast
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
        });
        console.log(result);
        
  
        setTimeout(() => router.push('/dashboard'), 2000);
          } else {
        toast.error("Invalid password or email!", {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
        });
        
      }
      
      console.log("Form submitted", formData);
      // Add your login API call here
    };
  
  
  return (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="username">Enter Email</label>
                  <input type="text"  name="email" id="email"  value={formData.email}
        onChange={handleChange} required />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password"   name="password"  id="password" required  value={formData.password}
                  onChange={handleChange} />
                </div>

                   <div className="input-group">
                  <label htmlFor="password">Re-enter Password</label>
                  <input type="password"   name="c_password"  id="password" required   value={formData.c_password}
                  onChange={handleChange} />
                </div>


                <div className="actions">
                  <button type="submit" className="btn">
                    Sign in
                  </button>
                  <a href="#" className="forgot-password">
                    Forgot password?
                  </a>
                </div>

                <div className="or-divider">or</div>

                <div className="google-signin">
                  <button type="button" className="btn google-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="20"
                      height="20"
                      className="google-icon"
                    >
                      <path
                        fill="#4285F4"
                        d="M44.5,20H24v8.5h11.7c-1.1,3.2-3.6,5.7-6.7,6.9l6.7,5.2
                        c3.9-3.6,6.3-8.8,6.3-14.6C44.7,24.9,44.6,22.4,44.5,20z"
                      />
                      <path
                        fill="#34A853"
                        d="M24,44c5.9,0,10.8-1.9,14.4-5.1l-6.7-5.2
                        c-2,1.3-4.6,2-7.7,2c-5.9,0-10.8-4-12.6-9.4l-7.2,5.6
                        C8.9,39.7,15.9,44,24,44z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M11.4,26.3c-0.5-1.3-0.8-2.7-0.8-4.3s0.3-3,
                        0.8-4.3l-7.2-5.6C2.3,15.6,1,19.1,1,
                        22.8s1.3,7.2,3.2,10.7L11.4,26.3z"
                      />
                      <path
                        fill="#EA4335"
                        d="M24,9.5c3.2,0,6.1,1.1,8.4,
                        3.2l6.3-6.3C34.8,2.9,29.9,
                        1,24,1c-8.1,0-15.1,4.3-19.2,
                        10.7l7.2,5.6C13.2,13.5,18.1,
                        9.5,24,9.5z"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                </div>

                <div className="create-account">
                  <p>
                    New to oxomQR? <a href="#">Create Account</a>
                  </p>
                </div>
              </form>
  )
}

export default AboutUs
