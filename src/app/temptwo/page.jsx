"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';

function temptwo() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, title: 'Template 1', description: 'Clean and simple layout', image: '/images/temp.jpg', price: '$49' },
    { id: 2, title: 'Template 2', description: 'Colorful and modern', image: '/images/temp1.jpg', price: '$59' },
    { id: 3, title: 'Template 3', description: 'Professional and minimal', image: '/images/temp.jpg', price: '$69' },
    { id: 4, title: 'Template 4', description: 'Dark-themed and stylish', image: '/images/temp1.jpg', price: '$79' },
    { id: 5, title: 'Template 5', description: 'Portfolio showcase style', image: '/images/temp.jpg', price: '$89' },
    { id: 6, title: 'Template 6', description: 'Elegant and soft tones', image: '/images/temp1.jpg', price: '$99' }
  ];

  const handleSelect = (id) => {
    setSelectedTemplate(id);
  };

  const handleSubmit = () => {
    if (!selectedTemplate) {
      alert('Please select a template!');
      return;
    }

    if (selectedTemplate === 1) {
      window.open('https://www.example.com/easypay-checkout', '_blank');
    } else {
      const modal = new bootstrap.Modal(document.getElementById('shippingModal'));
      modal.show();
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <div className="container pb-5">
        <h2 className="text-center text-white mb-4">Select a Template</h2>
        <div className="row g-4">
          {templates.map((template) => (
            <div key={template.id} className="col-md-4 mt-3">
              <div
                className={`card template-card shadow-sm ${selectedTemplate === template.id ? 'border-success border-3' : ''}`}
                onClick={() => handleSelect(template.id)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  transform: selectedTemplate === template.id ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderTopLeftRadius: '0.375rem',
                      borderTopRightRadius: '0.375rem',
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
        <div className="text-right mt-4">
          <button className="btn btn-light text-dark px-4" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>

      {/* Shipping Address Modal */}
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
    <h5 className="modal-title" id="shippingModalLabel">Shipping Information</h5>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div className="modal-body p-4">
    <form>
      <div className="row g-3">
        {/* Name Section */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">First Name*</label>
          <input type="text" className="form-control" id="firstName" placeholder="John" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name*</label>
          <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone Number*</label>
          <input type="tel" className="form-control" id="phone" placeholder="+91 9876543210" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email*</label>
          <input type="email" className="form-control" id="email" placeholder="your@email.com" required />
        </div>

        {/* Address Section */}
        <div className="col-12">
          <label htmlFor="address1" className="form-label">Address Line 1*</label>
          <input type="text" className="form-control" id="address1" placeholder="House/Flat No, Building" required />
        </div>
        <div className="col-12">
          <label htmlFor="address2" className="form-label">Address Line 2</label>
          <input type="text" className="form-control" id="address2" placeholder="Area, Street, Landmark" />
        </div>

        {/* Location Details */}
        <div className="col-md-4">
          <label htmlFor="city" className="form-label">City*</label>
          <input type="text" className="form-control" id="city" placeholder="Mumbai" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">State*</label>
          <select className="form-select" id="state" required>
            <option value="">Select State</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="zip" className="form-label">PIN Code*</label>
          <input type="text" className="form-control" id="zip" placeholder="400001" required />
        </div>

        {/* Additional Options */}
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="saveAddress" />
            <label className="form-check-label" htmlFor="saveAddress">
              Save this address for future purchases
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="billingSame" defaultChecked />
            <label className="form-check-label" htmlFor="billingSame">
              Billing address same as shipping address
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="modal-footer border-top-0">
    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
    <button type="button" className="btn btn-primary px-4">Save Address</button>
  </div>
</div>        </div>
      </div>
    </div>
  );
}

export default temptwo;
