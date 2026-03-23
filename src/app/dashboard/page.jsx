"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Link from "next/link";
import BusinessForm from "../components/BusinessForm";
import SkeletonCard from "../components/SkeltonCard";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("create");
  const [showModal, setShowModal] = useState(false);
  const [loadingTab, setLoadingTab] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingTab(false), 800);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleOpenModal = () => setShowModal(true);
  const handleTabChange = (key) => {
    setLoadingTab(true);
    setActiveSection(key);
  };

  const renderSection = () => {
    if (loadingTab) return <SkeletonCard />;

    switch (activeSection) {
     case "create":
        return (
          <div className="text-center pt-2">
            <div className="mb-4" style={{ fontSize: "3.5rem" }}>📱</div>
            <h2 className="fw-bold text-dark mb-3">Create QR Code</h2>
            <p className="text-muted mb-4">Create beautiful QR codes for your business in seconds</p>
            <button
              className="btn btn-primary btn-lg px-4 py-2 rounded-pill d-flex align-items-center mx-auto"
              onClick={handleOpenModal}
              style={{ 
                boxShadow: "0 4px 14px rgba(0, 123, 255, 0.4)",
                fontSize: "1.1rem"
              }}
            >
               Create New QR
            </button>
            
            <div className="row mt-5 ">
              <div className="col-md-4 mb-4">
                <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ fontSize: "2.5rem" }}>①</div>
                    <h5 className="card-title">Fill Business Info</h5>
                    <p className="card-text text-muted">Enter your business details once</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ fontSize: "2.5rem" }}>②</div>
                    <h5 className="card-title">Customize Design</h5>
                    <p className="card-text text-muted">Choose templates </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ fontSize: "2.5rem" }}>③</div>
                    <h5 className="card-title">Download & Share</h5>
                    <p className="card-text text-muted">Get your QR code instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "completed":
        return (
          <div>
            <h4 className="fw-bold mb-3" style={{ color: "#2c3e50" }}>
              ✅ Completed QRs
            </h4>
            <p className="text-muted">
              Review completed QR codes and take actions as needed.
            </p>

            {[1, 2].map((i) => (
              <div
                key={i}
                className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 p-3 rounded"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderLeft: "5px solid #007bff",
                }}
              >
                <div className="text-start">
                  <h6 className="mb-1 fw-bold">Business Name</h6>
                  <p className="text-muted mb-0">business@example.com</p>
                </div>
                <div className="mx-3 d-none d-md-block">
                  <i className="fa fa-qrcode fa-2x text-secondary"></i>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                  <Link href={"/negreview"}>
                    <button
                      className="btn btn-sm mb-2 mb-sm-0 me-sm-2"
                      style={{
                        border: "1px solid #e74c3c",
                        color: "#e74c3c",
                        background: "transparent",
                      }}
                    >
                      <i className="fa fa-thumbs-down"></i> Negative Review
                    </button>
                  </Link>
                  <button
                    className="btn btn-sm text-white"
                    style={{
                      background: "linear-gradient(135deg, #007bff, #6f42c1)",
                      border: "none",
                    }}
                  >
                    <i className="fa fa-download"></i> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "payment":
        return (
          <div>
            <h4 className="fw-bold mb-3" style={{ color: "#2c3e50" }}>
              💳 Payment Details
            </h4>
            <p className="text-muted">
              Track your transactions and payment status here.
            </p>
          </div>
        );

      case "profile":
        return (
 <div>
            <h4 className="text-dark mb-4">Profile Settings</h4>
            
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="position-relative d-inline-block">
                      <div 
                        className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                        style={{ width: "100px", height: "100px" }}
                      >
                        <i className="fa fa-user fa-2x text-secondary"></i>
                      </div>
                      <button className="btn btn-sm btn-primary rounded-circle position-absolute" style={{ bottom: "0", right: "0" }}>
                        <i className="fa fa-camera"></i>
                      </button>
                    </div>
                    <h5 className="mt-3 mb-0">Akhil</h5>
                    <p className="text-muted">akhil@example.com</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-8">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Account Details</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" value="Akhil" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" value="Smith" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value="akhil@example.com" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" value="+1 (555) 123-4567" />
                      </div>
                      <button  type="submit" className="btn btn-primary">Update Profile</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>       
           );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 123, 255, 0.6), rgba(255, 0, 150, 0.6))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          role="dialog"
        >
          <BusinessForm />
        </div>
      )}

      <section className="py-4">
        {/* <h2 className="fw-bolder text-center mb-5 text-white">
          Welcome Akhil 🚀
        </h2> */}
        <div className="container">
          {/* Tabs */}
          <ul
            className="nav nav-pills justify-content-center mb-4 shadow-sm"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "50px",
              padding: "10px",
            }}
          >
            {[
           { 
  key: "create", 
  label: (
    <>
      <i className="fa fa-plus" style={{ marginRight: "6px", fontSize: "1.1rem" }}></i> 
      Create QR
    </>
  ) 
},
{ key: "completed", label: "✅ Completed QRs" },
{ key: "payment", label: "💳 Payment Details" },
{ key: "profile", label: "👤 Profile" },
            ].map((item) => (
              <li className="nav-item" key={item.key}>
                <button
                  className={`nav-link px-4 py-2 fw-semibold ${
                    activeSection === item.key
                      ? "text-white"
                      : "text-dark"
                  }`}
                  style={{
                    borderRadius: "30px",
                    margin: "0 5px",
                    background:
                      activeSection === item.key
                        ? "linear-gradient(135deg, #007bff, #6f42c1)"
                        : "transparent",
                    transition: "0.3s",
                  }}
                  onClick={() => handleTabChange(item.key)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Content */}
          <div
            className="card border-0 shadow-lg p-4"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              backdropFilter: "blur(12px)",
            }}
          >
            {renderSection()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
