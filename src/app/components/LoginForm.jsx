import Link from "next/link";

import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add your login API call here
  };

  return (
<form onSubmit={handleSubmit} >
  <div className="col-xl-12">
    <div className="input-field">
      <input
        type="text"
        name="email"
        placeholder="Enter Mail id *"
        value={formData.email}
        onChange={handleChange}
        style={{
          borderRadius: "50px",
          padding: "10px 20px",
          border: "1px solid #ccc",
          width: "100%",
          outline: "none",
        }}
      />
      <div className="icon-holder">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </div>
    </div>
  </div>

  <div className="col-xl-12">
    <div className="input-field">
      <input
        type="text"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        style={{
          borderRadius: "50px",
          padding: "10px 20px",
          border: "1px solid #ccc",
          width: "100%",
          outline: "none",
        }}
      />
      <div className="icon-holder">
        <i className="fa fa-lock" aria-hidden="true"></i>
      </div>
    </div>
  </div>

  <div className="col-xl-12">
    <div className="row d-flex justify-content-center">
      <div className="col-xl-6 col-lg-6 col-sm-12 text-center">
       <Link href={'/dashboard'}> <button className="shop-btn" type="submit">Login now</button></Link>

        {/* Sign Up Link */}
        <p style={{ marginTop: "15px", fontSize: "11px" }}>
  Don’t have an account?{" "}
  <Link href="/register" legacyBehavior>
    <a style={{ color: "#007bff", textDecoration: "none" }}>Sign Up</a>
  </Link>
</p>
      </div>
    </div>
  </div>
</form>
  );
};

export default LoginForm;
