'use client';
import React from 'react';
import { Skeleton, Box } from '@mui/material';

const SkeletonCard = () => {
  return (
     <div>
      <Skeleton variant="text" width={220} height={40} />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="rectangular" height={120} className="mb-3 mt-3" />
      <Skeleton variant="rectangular" height={120} />
    </div>
  );
};

export default SkeletonCard;
