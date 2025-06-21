"use client";

import React from "react";
import { Skeleton } from "@mui/material";

const TemplateSkeletonCard = () => {
  return (
    <div className="col-md-4 mt-3">
      <div className="card shadow-sm">
        <Skeleton variant="rectangular" height={200} />
        <div className="card-body text-center py-3">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton
            variant="rectangular"
            height={30}
            width="50%"
            style={{ margin: "auto", marginTop: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateSkeletonCard;
