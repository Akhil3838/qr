"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { PrimaryTempApi, sendtempdata } from "../services/allApi";
import { imageBasePath } from "../services/imgUrl";
import { useRouter } from "next/navigation";
import TemplateSkeletonCard from "../components/TemplateSkeletonCard";

function TemplateSelector() {
  const [template, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch templates from API
  useEffect(() => {
    const fetchTemplates = async () => {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await PrimaryTempApi(reqHeader);
        setTemplates(res.data.primarytemplates);
      } catch (err) {
        console.error("Error fetching templates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  // Send selected template and business ID
  const sendTemp = async () => {
    const token = sessionStorage.getItem("token");
    const business_id = sessionStorage.getItem("business_id");

    if (!token || !business_id || !selectedTemplate) {
      alert("Missing token, business ID, or selected template.");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const formData = new FormData();
    formData.append("primary_template_id", selectedTemplate);
    formData.append("business_id", business_id);

    try {
      const result = await sendtempdata(formData, reqHeader);
      router.push("/temptwo");
    } catch (error) {
      console.error("Error sending template:", error);
    }
  };

  const handleSelect = (id) => {
    setSelectedTemplate(id);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(255, 0, 150, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="container pb-5">
        <h2 className="text-center text-white mb-4">Select a Template</h2>

        <div className="row g-4">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TemplateSkeletonCard key={i} />
              ))
            : template.map((temp) => (
                <div key={temp.id} className="col-md-4 mt-2">
                  <div
                    className={`card template-card shadow-sm ${
                      selectedTemplate === temp.id ? "border-success border-3" : ""
                    }`}
                    onClick={() => handleSelect(temp.id)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      transform:
                        selectedTemplate === temp.id ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <Image
                        src={`${imageBasePath}${temp.image}`}
                        alt={temp.title}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                          borderTopLeftRadius: "0.375rem",
                          borderTopRightRadius: "0.375rem",
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
          <button
            className="btn btn-light text-dark px-4"
            onClick={() => {
              if (selectedTemplate) {
                sendTemp();
              } else {
                alert("Please select a template.");
              }
            }}
            disabled={loading}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateSelector;
