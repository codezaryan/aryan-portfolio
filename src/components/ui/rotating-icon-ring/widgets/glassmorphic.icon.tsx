import React from 'react';
import { LucideIcon } from 'lucide-react';
import { IconAndNames } from './icon.ring';

interface GlassmorphicIconProps {
  Icon: IconAndNames;
  x: number;
  y: number;
  size?: number;
  className:string
}

const GlassmorphicIcon: React.FC<GlassmorphicIconProps> = ({ 
  Icon, 
  x, 
  y, 
  size = 32, 
  className
}) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center transition-all duration-500 ease-in-out group cursor-none ${className}`}
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      {/* Icon */}
      <Icon.icon 
        size={size} 
        className="relative z-10 transition-all duration-500 ease-in-out hover:scale-110"
      />
      
      {/* Simple text tooltip - only visible on hover */}
      <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none">
        <span className="text-sm font-medium text-white drop-shadow-lg">{Icon.name}</span>
      </div>
    </div>
  );
};

export default GlassmorphicIcon;