import React from 'react';

interface DecorativeRingProps {
  radius: number;
  dashCount?: number;
  dashWidth?: number;
}

const DecorativeRing: React.FC<DecorativeRingProps> = ({ 
  radius, 
  dashCount = 40,
  dashWidth = 3
}) => {
  const circumference = 2 * Math.PI * radius;
  const dashLength = (circumference / dashCount) * 0.6; // 60% dash
  const gapLength = (circumference / dashCount) * 0.4; // 40% gap
  
  return (
    <svg
      className="absolute left-1/2 top-1/2 pointer-events-none"
      width={radius * 2}
      height={radius * 2}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(192, 132, 252)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <circle
        cx={radius}
        cy={radius}
        r={radius - dashWidth / 2}
        fill="none"
        stroke="url(#purpleGradient)"
        strokeWidth={dashWidth}
        strokeDasharray={`${dashLength} ${gapLength}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DecorativeRing;