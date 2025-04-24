"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import BusinessForm from '../components/BusinessForm';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('create');
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);

  const renderSection = () => {
    switch (activeSection) {
      case 'create':
        return (
          <div className="text-center">
            <h2 className="fw-bold text-dark mb-3">➕ Create QR</h2>
            <p className="text-muted">Create and manage your QR codes easily.</p>
            <button
              className="btn btn-primary btn-lg rounded-circle"
              onClick={handleOpenModal}
            >
➕</button>
          </div>
        );
      case 'completed':
        return (
<div>
  <h4 className="text-dark mb-3">✅ Completed QRs</h4>
  <p className="text-muted">Here you can view all the QRs that have been completed.</p>
  
  <div className="d-flex flex-column flex-md-row justify-content-between border shadow-sm align-items-center mt-4 p-3 bg-light rounded">
    <div className="mb-2 mb-md-0 text-start text-md-start">
      <h6 className="mb-1">Business Name</h6>
      <p className="text-muted mb-0">business@example.com</p>
    </div>

    <div className="mx-3 d-none d-md-block">
      <i className="fa fa-qrcode fa-2x text-secondary"></i>
    </div>

    <div className="d-flex flex-column flex-sm-row">
      <Link href={'/negreview'}>
        <button className="btn btn-sm btn-outline-danger mb-2 mb-sm-0 me-sm-2" style={{marginRight:'10px'}}>
          <i className="fa fa-thumbs-down"></i> Negative Review
        </button>
      </Link>
      <button className="btn btn-sm btn-primary">
        <i className="fa fa-download"></i> Download
      </button>
    </div>
  </div>

  <div className="d-flex flex-column flex-md-row justify-content-between border shadow-sm align-items-center mt-4 p-3 bg-light rounded">
    <div className="mb-2 mb-md-0 text-start text-md-start">
      <h6 className="mb-1">Business Name</h6>
      <p className="text-muted mb-0">business@example.com</p>
    </div>

    <div className="mx-3 d-none d-md-block">
      <i className="fa fa-qrcode fa-2x text-secondary"></i>
    </div>

    <div className="d-flex flex-column flex-sm-row">
      <button className="btn btn-sm btn-outline-danger mb-2 mb-sm-0 me-sm-2" style={{marginRight:'10px'}}>
        <i className="fa fa-thumbs-down"></i> Negative Review
      </button>
      <button className="btn btn-sm btn-primary">
        <i className="fa fa-download"></i> Download
      </button>
    </div>
  </div>


</div> );
      case 'payment':
        return (
          <div>
            <h4 className="text-dark mb-3">💳 Payment Details</h4>
            <p className="text-muted">Track your payment history and current payment status.</p>
          </div>
        );
      case 'profile':
        return (
          <div>
            <h4 className="text-dark mb-3">👤 Profile</h4>
            <p className="text-muted">Manage your profile information.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
  <div  style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 123, 255, 0.6), rgba(255, 0, 150, 0.6))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight:'100%'
        }}>
        <Header />
  
        {/* Modal */}
        {showModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            role="dialog"
          >
            <BusinessForm/>
          </div>
        )}
  
        <section
          className="banner-style5-are"
         
        >
          <h2 className=' fw-bolder text-center my-3'>Welcome Akhil</h2>
          <div className="container-fluid p-0">
            <main className="text-white">
              <div className="container">
                {/* Tab Nav Bar */}
                <ul className="nav justify-content-center mb-4  p-2 rounded shadow-sm border">
                  {[
                    { key: 'create', label: '➕ Create QR' },
                    { key: 'completed', label: '✅ Completed QRs' },
                    { key: 'payment', label: '💳 Payment Details' },
                    { key: 'profile', label: '👤 Profile' },
                  ].map((item, index, array) => (
                    <React.Fragment key={item.key}>
                      <li className="nav-item">
                        <button
                          className={`nav-link px-4 py-2 ${activeSection === item.key ? 'active text-white' : 'text-dark'}`}
                          style={{
                            borderRadius: '0',
                            borderRight: index !== array.length - 1 ? '1px solid #dee2e6' : 'none',
                            backgroundColor: activeSection === item.key ? '' : 'transparent',
                          }}
                          onClick={() => setActiveSection(item.key)}
                        >
                          {item.label}
                        </button>
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
  
                {/* Section Content */}
                <div
                  className="card shadow-lg p-4 rounded"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                >
                  {renderSection()}
                </div>
              </div>
            </main>
          </div>
        </section>
  </div>
    </>
  );
}

export default Dashboard;
