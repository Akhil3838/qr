import React from 'react';
import Header from '../components/Header';

function QrVerification() {
  // Static data for the design
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=EXAMPLE_UTR_ID_12345";
  const utrId = "UTR20231115XYZ789";
  const isVerified = false; // Toggle this to see verified state

  return (
<div   style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Header/>
        <div className="container d-flex justify-content-center align-items-center">
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
              <h5 className="text-center fw-bold text-success bg-light p-2 rounded ">
      Rs.1500
    </h5>
                <p className="text-muted small mb-1">Unique Transaction Reference (UTR)</p>
                <p className="fw-bold mb-0 text-break"></p>
                <input type="text" className='w-100 text-center ' placeholder={utrId}  />
              </div>
              
              {!isVerified ? (
                <button className="btn btn-primary w-100 py-2 fw-bold">
                  Verify Payment
                </button>
              ) : (
                <div className="d-flex align-items-center justify-content-center gap-2 text-success bg-success bg-opacity-10 p-2 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
    
                  <input type="text" />
                  <span className="fw-bold">Payment Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>
    
</div>  );
}

export default QrVerification;