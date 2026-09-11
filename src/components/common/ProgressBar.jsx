import React from 'react';
import { useReadingProgress } from '../../hooks/useReadingProgress';

export default function ProgressBar() {
  const progress = useReadingProgress();

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}

