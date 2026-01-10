import React from 'react';
import { IconAndNames } from './icon.ring';

interface GlassmorphicIconProps {
  Icon: IconAndNames;
  x: number;
  y: number;
  size?: number;
  className?: string;
}

const GlassmorphicIcon: React.FC<GlassmorphicIconProps> = ({
  Icon,
  x,
  y,
  size = 32,
  className = ''
}) => {
  return (
    <div
      className={`absolute group flex flex-col items-center justify-center transition-transform duration-300 cursor-none ${className}`}
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      {/* Icon */}
      <Icon.icon
        size={size}
        style={{ color: Icon.color }}
        className="relative z-10 transition-transform duration-200 group-hover:scale-110"
      />

      {/* Solid Tooltip */}
      <div className="absolute top-full mt-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-20">
        <div
          className="relative px-3 py-1.5 text-sm font-medium rounded-md shadow-md"
          style={{
            backgroundColor: Icon.color,
            color: '#ffffff',
          }}
        >
          {Icon.name}

          {/* Arrow */}
          <span
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
            style={{
              backgroundColor: Icon.color,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GlassmorphicIcon;
