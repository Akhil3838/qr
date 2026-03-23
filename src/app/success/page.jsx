"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

function Success() {
  const router = useRouter();
   
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="flex items-center justify-center min-h-screen" style={{ paddingTop: '150px' }}>
        <div className="relative p-10 rounded-2xl shadow-xl text-center max-w-md w-full border-t-4 border-green-500 py-4" style={{ backgroundColor: '#ffffff' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1a202c', // dark gray
            marginBottom: '1rem',
            marginTop: '1rem'
          }}>
            Payment Successful!
          </h2>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Thank you for your payment. Your transaction was completed successfully. A receipt has been sent to your email.
          </p>

<div style={{
  marginBottom: '1.5rem',
  padding: '1rem',
  backgroundColor: '#f0fdf4',
  borderRadius: '0.5rem',
  border: '1px solid #d1fae5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem'
}}>
  <div style={{ textAlign: 'center' }}>
    <div style={{ color: '#4b5563', fontWeight: '500' }}>Order ID :#123456789</div>
    {/* <div style={{ fontWeight: '600' }}></div> */}
  </div>
  <div style={{ textAlign: 'center' }}>
    <div style={{ color: '#4b5563', fontWeight: '500' }}>Amount Paid: $99.00</div>
    {/* <div style={{ fontWeight: '600' }}></div> */}
  </div>
</div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={() => router.push('/orders')}
              style={{
                color: '#16a34a',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#15803d'}
              onMouseLeave={e => e.currentTarget.style.color = '#16a34a'}
            >
              Back to Home
            </button>
                        <button
              onClick={() => router.push('/')}
              style={{
                background: 'linear-gradient(to right, #22c55e, #14b8a6)',
                color: '#fff',
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'background-color 0.3s ease'
              }}
            >
                 View Your Orders
             
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
