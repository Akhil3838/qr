"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { secondaryTempApi, sendtemptwodata, shippingAddressApi } from "../services/allApi";
import { imageBasePath } from "../services/imgUrl";
import TemplateSkeletonCard from "../components/TemplateSkeletonCard";
import { useRouter } from 'next/navigation';

function Temptwo() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [template, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", phone: "", email: "",
    address1: "", address2: "", city: "", state: "", pin: ""
  });

  const handleSelect = (id) => setSelectedTemplate(id);

  useEffect(() => {
    const fetchTemplates = async () => {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await secondaryTempApi(reqHeader);
        setTemplates(res.data.secondarytemplates);
        setTimeout(() => setLoading(false), 800); // Delay for better UX
      } catch (err) {
        console.error("Error fetching templates:", err);
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    if (!selectedTemplate) return alert("Please select a template!");
    if (selectedTemplate === 1) return window.open("https://www.example.com/easypay-checkout", "_blank");

    const token = sessionStorage.getItem("token");
    const business_id = sessionStorage.getItem("business_id");

    const reqHeader = { Authorization: `Bearer ${token}` };
    const formDataToSend = new FormData();
    formDataToSend.append("secondary_template_id", selectedTemplate);
    formDataToSend.append("business_id", business_id);
    
    try {
      await sendtemptwodata(formDataToSend, reqHeader);
      const modal = new bootstrap.Modal(document.getElementById("shippingModal"));
      modal.show();
    } catch (err) {
      console.error("Error sending template data:", err);
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, phone, email, address1, city, state, pin } = formData;
    if (!first_name || !last_name || !phone || !email || !address1 || !city || !state || !pin)
      return alert("Please fill all required fields");

    const token = sessionStorage.getItem("token");
    const business_id = sessionStorage.getItem("business_id");

    const addressData = {
      ...formData,
      address: `${formData.address1}${formData.address2 ? ", " + formData.address2 : ""}`,
      business_id,
    };

      const reqHeader = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      };
    const result=  await shippingAddressApi(addressData, reqHeader);
    console.log(result);
    const total_amount=result?.data?.total_amount
 if (total_amount) {
       sessionStorage.setItem("total_amount", total_amount);

 }


   if (result.status === 200) {
        // Close modal safely
        // const modalElement = document.getElementById("shippingModal");
        // if (modalElement) {
        //   const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
        //   modal.hide();
        // }
        
        // Navigate to viewqr page
        router.push('/viewqr');
      } else {
        throw new Error(result.data?.message || 'Failed to save address');
      }
 
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="container pb-5">
        <h2 className="text-center text-white mb-4">Select a Template</h2>
        <div className="row g-4">
          {loading
            ? [1, 2, 3].map((_, i) => <TemplateSkeletonCard key={i} />)
            : template.map((template) => (
                <div key={template.id} className="col-md-4 mt-3">
                  <div
                    className={`card template-card shadow-sm ${selectedTemplate === template.id ? "border-success border-3" : ""}`}
                    onClick={() => handleSelect(template.id)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      transform: selectedTemplate === template.id ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <div style={{ position: "relative", width: "100%", height: "200px" }}>
                      <Image
                        src={`${imageBasePath}${template.image}`}
                        alt={template.title}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                          borderTopLeftRadius: "0.375rem",
                          borderTopRightRadius: "0.375rem",
                        }}
                      />
                    </div>
                    <div className="card-body text-center py-3">
                      <h6 className="card-title mb-1">{template.title}</h6>
                      <p className="card-text small mb-0">{template.description}</p>
                      <div className="mt-2">
                        <span className="badge bg-info text-white rounded-pill px-5 py-2">
                          {template.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {!loading && (
          <div className="text-right mt-4">
            <button className="btn btn-light text-dark px-4" onClick={handleSubmit}>
              Next
            </button>
          </div>
        )}
      </div>

      {/* SHIPPING MODAL (same as before) */}
      {/* ... Modal code unchanged ... */}
            <div
        className="modal fade"
        id="shippingModal"
        tabIndex="-1"
        aria-labelledby="shippingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title text-light" id="shippingModalLabel">Shipping Information</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleAddressSubmit}>
                <div className="row g-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="first_name" className="form-label">First Name*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="first_name" 
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="last_name" 
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number*</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210" 
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="address1" className="form-label">Address Line 1*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address1" 
                      value={formData.address1}
                      onChange={handleInputChange}
                      placeholder="House/Flat No, Building" 
                      required 
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="address2" className="form-label">Address Line 2</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address2" 
                      value={formData.address2}
                      onChange={handleInputChange}
                      placeholder="Area, Street, Landmark" 
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="city" className="form-label">City*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai" 
                      required 
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">State*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="state" 
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Kerala" 
                      required 
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="pin" className="form-label">PIN Code*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="pin" 
                      value={formData.pin}
                      onChange={handleInputChange}
                      placeholder="400001" 
                      required 
                    />
                  </div>
                </div>
                <div className="modal-footer border-top-0">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-primary px-4">Save Address</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Temptwo;
