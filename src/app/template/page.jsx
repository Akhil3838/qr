"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';
import { PrimaryTempApi } from '../services/allApi';
import { imageBasePath } from '../services/imgUrl';

function TemplateSelector() {
  const [template, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await PrimaryTempApi(reqHeader);
        console.log(res);
        
        setTemplates(res.data.primarytemplates);

      } catch (err) {
        console.error("Error fetching templates:", err);
      }
    };
    fetchTemplates();
  }, []);

  const handleSelect = (id) => {
    setSelectedTemplate(id);
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
          {template.map((temp) => (
            <div key={temp.id} className="col-md-4 mt-2">
              <div
                className={`card template-card shadow-sm ${selectedTemplate === temp.id ? 'border-success border-3' : ''}`}
                onClick={() => handleSelect(temp.id)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  transform: selectedTemplate === temp.id ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
src={`${imageBasePath}${temp.image}`}
// No extra quote at the end --> ...qr1.jpg
                    alt={temp.title}
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
                  <h6 className="card-title mb-1">{temp.title}</h6>
                  <p className="card-text small mb-0">{temp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href={'/temptwo'}>
            <button className="btn btn-light text-dark px-4">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TemplateSelector;
