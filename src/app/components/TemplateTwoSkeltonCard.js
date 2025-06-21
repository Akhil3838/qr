// components/TemplateSkeletonCard.js
"use client";

import React from "react";
import { Skeleton } from "@mui/material";

function TemplateTwoSkeletonCard() {
  return (
    <div className="card template-card shadow-sm">
      {/* Image placeholder */}
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>

      {/* Body mimic */}
      <div className="card-body text-center py-3">
        <Skeleton variant="text" width="60%" height={24} className="mx-auto mb-2" />
        <Skeleton variant="text" width="80%" height={20} className="mx-auto mb-2" />
        <Skeleton
          variant="rectangular"
          width={80}
          height={30}
          className="mx-auto mt-3 rounded-pill"
        />
      </div>
    </div>
  );
}

export default TemplateTwoSkeletonCard;
