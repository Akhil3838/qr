"use client";

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { paymentVerificationApi } from '../services/allApi';

function QrVerification() {
  const [paymentId, setPaymentId] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [token, setToken] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=a";
  const utrPlaceholder = "UTR20231115XYZ789";

  // Load sessionStorage on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBusinessId(sessionStorage.getItem("business_id") || "");
      setToken(sessionStorage.getItem("token") || "");
      setTotalAmount(sessionStorage.getItem("total_amount") || "");
    }
  }, []);

  // Submit handler
  const handleSubmit = async () => {
    if (!paymentId) {
      alert("Please enter UTR/Payment ID.");
      return;
    }

    const formData = new FormData();
    formData.append("payment_id", paymentId);
    formData.append("business_id", businessId);

    const reqHeader = {
      Authorization: `Bearer ${token}`
    };

    try {
      const result = await paymentVerificationApi(formData, reqHeader);
  console.log(result);
  
      if (result.status === 200) {
        setIsVerified(true);
        alert("Payment verified successfully!");
      } else {
        alert("Payment verification failed.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Something went wrong!");
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
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="card shadow-sm p-3" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="card-body text-center">
            <h3 className="card-title mb-4">Payment Verification</h3>

            <div className="border rounded p-3 mb-4 d-inline-block">
              <img
                src={qrCodeUrl}
                alt="Transaction QR Code"
                className="img-fluid"
                style={{ width: '180px', height: '180px' }}
              />
            </div>

            <div className="bg-light rounded p-3 mb-4">
              <h5 className="text-center fw-bold text-success bg-light p-2 rounded">
                Rs.{totalAmount || "1500"}
              </h5>
              <p className="text-muted small mb-1">Unique Transaction Reference (UTR)</p>
              <input
                type="text"
                className="form-control text-center"
                placeholder={utrPlaceholder}
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
              />
            </div>

            {!isVerified ? (
              <button
                className="btn btn-primary w-100 py-2 fw-bold"
                onClick={handleSubmit}
              >
                Verify Payment
              </button>
            ) : (
              <div className="d-flex align-items-center justify-content-center gap-2 text-success bg-success bg-opacity-10 p-2 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="fw-bold text-light">Payment Verified</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrVerification;
