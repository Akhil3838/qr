import React from 'react';
import Header from '../components/Header';

function NegReviewTable() {
  // Sample review data
  const reviews = [
    { id: 1, name: 'John Doe', email: 'john@example.com', rating: 1, comment: 'Terrible service! Will never come back.', date: '2023-05-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', rating: 2, comment: 'Poor quality products and rude staff.', date: '2023-06-20' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', rating: 1, comment: 'Worst experience ever!', date: '2023-07-10' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', rating: 2, comment: 'Not what I expected at all.', date: '2023-08-05' },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="d-flex">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i}
            className={`fa ${i < rating ? 'fa-star text-warning' : 'fa-star text-secondary opacity-25'}`}
          />
        ))}
      </div>
    );
  };

  return (
<div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Header/>
        <div className="container p-4">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-danger text-white py-3">
              <h4 className="mb-0 text-white" >
                <i className="fa fa-exclamation-triangle text-dark" style={{marginRight:'10px'}}></i>
                Negative Reviews
              </h4>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="py-3 ps-4">#</th>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Rating</th>
                      <th>Comment</th>
                      <th className="pe-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review, index) => (
                      <tr key={review.id} className="border-top">
                        <td className="ps-4">{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px', marginRight:'10px'}}>
                              <i className="fa fa-user" style={{color:'black'}}></i>
                            </div>
                            <strong >{review.name}</strong>
                          </div>
                        </td>
                        <td>
                          <a href={`mailto:${review.email}`} className="text-primary">
                            {review.email}
                          </a>
                        </td>
                        <td>
                          {renderStars(review.rating)}
                          <small className="text-muted d-block">({review.rating}/5)</small>
                        </td>
                        <td>
                          <div className="text-truncate" style={{maxWidth: '200px'}} title={review.comment}>
                            {review.comment}
                          </div>
                        </td>
                        <td className="pe-4">
                          <small className="text-muted">{review.date}</small>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-light py-3">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Showing {reviews.length} of {reviews.length} reviews</small>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="fa fa-download me-1"></i> Export
                </button>
              </div>
            </div>
          </div>
        </div>
    
</div>  );
}

export default NegReviewTable;