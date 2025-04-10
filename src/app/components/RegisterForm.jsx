
import { useState } from "react";
import Link from "next/link";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    // Add your register API logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-xl-12">
        <div className="input-field">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
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
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>
      </div>

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
          <i className="fa fa-lock" aria-hidden="true" ></i>
          </div>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-6 col-sm-12 text-center">
            <button className="shop-btn" type="submit">Sign Up</button>
        {/* Sign Up Link */}
        <p style={{ marginTop: "15px", fontSize: "11px" }}>
        Already have an account?{" "}
  <Link href="/login" legacyBehavior>
    <a style={{ color: "#007bff", textDecoration: "none" }}>Login</a>
  </Link>
</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
