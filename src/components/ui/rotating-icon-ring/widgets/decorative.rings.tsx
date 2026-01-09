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
      <circle
        cx={radius}
        cy={radius}
        r={radius - dashWidth / 2}
        fill="none"
        stroke="rgba(96, 165, 250, 0.5)"
        strokeWidth={dashWidth}
        strokeDasharray={`${dashLength} ${gapLength}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DecorativeRing;