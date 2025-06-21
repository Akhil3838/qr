import React, { useState } from 'react'
import { qrDataApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



function BusinessForm() {
     const router = useRouter();
    const handleCloseModal = () => setShowModal(false);

    const [formData,setFormData]=useState({
        business_name:"",
        email:"",
        business_link:""
      })
      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
    
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
    
        // Call your API
        const result=  await qrDataApi(formData,reqHeader);
        console.log(result);
        const business_id=result?.data?.business_id
        console.log(business_id);
        // Store in session storage
if (business_id) {
  sessionStorage.setItem("business_id", business_id);
}
            if (result.status === 200) {
              // Show success toast
              toast.success("details Added successfully", {
                position: "top-center",
                autoClose: 1000,
                theme: "colored",
              });
              
        
setTimeout(() => router.push(`/template`), 1000);
                } else {
              toast.error("", {
                position: "top-center",
                autoClose: 1000,
                theme: "colored",
              });
              
            }
        
        

        // router.push('/template');
      };
    
    
  return (
    <>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content shadow-lg rounded-4 border-0">
          <div className="modal-header bg-primary text-white rounded-top-4 px-4 py-3">
            <h5 className="modal-title fw-semibold">🚀 Create Your QR</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body px-4 py-4 bg-light rounded-bottom-4">
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">📛 Business Name</label>
                <input
                  type="text"
                  className="form-control rounded-3 shadow-sm"
                  placeholder="Enter your business name"
                  onChange={(e) => setFormData({...formData, business_name: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">📧 Email</label>
                <input
                  type="email"
                  className="form-control rounded-3 shadow-sm"
                  placeholder="Enter your email address"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">🔗 Business Link</label>
                <input
                  type="url"
                  className="form-control rounded-3 shadow-sm"
                  placeholder="https://yourbusiness.com"
                  onChange={(e) => setFormData({...formData, business_link: e.target.value})}
                />
              </div>
              <div className="text-end">
                  <button type="submit" className="btn btn-success px-4 py-2 rounded-3 shadow"onClick={handleSubmit} >
                    Generate QR
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default BusinessForm