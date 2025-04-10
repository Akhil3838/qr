"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';

function TemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, title: 'Template 1', description: 'Clean and simple layout', image: '/images/temp.jpg' },
    { id: 2, title: 'Template 2', description: 'Colorful and modern', image: '/images/temp1.jpg' },
    { id: 3, title: 'Template 3', description: 'Professional and minimal', image: '/images/temp.jpg' },
    { id: 4, title: 'Template 4', description: 'Dark-themed and stylish', image: '/images/temp1.jpg' },
    { id: 5, title: 'Template 5', description: 'Portfolio showcase style', image: '/images/temp.jpg' },
    { id: 6, title: 'Template 6', description: 'Elegant and soft tones', image: '/images/temp1.jpg' }
  ];

  const handleSelect = (id) => {
    setSelectedTemplate(id);
  };

  // const handleSubmit = () => {
  //   if (selectedTemplate) {
  //     window.open('https://www.example.com/easypay-checkout', '_blank');
  //   } else {
  //     alert('Please select a template!');
  //   }
  // };

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
            <div key={template.id} className="col-md-4 mt-2">
              <div
                className={`card template-card shadow-sm ${
                  selectedTemplate === template.id ? 'border-success border-3' : ''
                }`}
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
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mt-4">
         <Link href={'/temptwo'}>
            <button className="btn btn-light text-dark px-4 " >
              Next
              {/* <i className="fa-solid fa-arrow-down"></i> */}
              </button>
         </Link>

        </div>
      </div>
    </div>
  );
}

export default TemplateSelector;
