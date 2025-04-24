"use client";

import { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RatingForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [commandName, setCommandName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      commandName,
      rating,
      comment,
    };
    console.log('Submitted Rating:', formData);

    // SweetAlert2 success alert
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your rating has been submitted successfully.',
      confirmButtonColor: '#3085d6',
    });

    // Reset form
    setRating(0);
    setHover(null);
    setCommandName('');
    setComment('');
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
      className='pt-5'
    >
      <div className="rating-container">
        <div className="d-flex align-items-center justify-content-center bg-primary py-3 rounded">
          <Link href="/" className="header__logo-lin">
            <img 
              src="/images/resources/logo-5.png" 
              alt="Company Logo" 
              className="header__logo" 
            />
          </Link>
        </div>
        <h2 className="rating-title pt-1">⭐ Rate Our Service</h2>
        <form onSubmit={handleSubmit} className="rating-form">

          <label className="rating-label">Rating</label>
          <div className="star-container">
            {[...Array(5)].map((_, i) => {
              const currentRating = i + 1;
              return (
                <i
                  key={i}
                  className="fa fa-star rating-star"
                  style={{
                    color: currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                    cursor: 'pointer',
                  }}
                  onClick={() => setRating(currentRating)}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                ></i>
              );
            })}
          </div>

          <label className="rating-label mt-2">Full Name</label>
          <input
            type="text"
            value={commandName}
            onChange={(e) => setCommandName(e.target.value)}
            required
            className="rating-input"
            placeholder="Enter Full Name"
          />

          <label className="rating-label">Comment (optional)</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="rating-textarea"
            placeholder="Write your feedback..."
          ></textarea>

          <button type="submit" className="rating-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RatingForm;
