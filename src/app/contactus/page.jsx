import React from 'react'
import Header from '../components/Header'

function page() {
  return (
    <>
    <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Header/>
        <div>
          <h1 className='text-center'>Contact Us</h1>
          <p className='text-center text-white'>Welcome to our website! We provide awesome services for your needs.</p>
        </div>
    
</div> 

    </>
  )
}

export default page