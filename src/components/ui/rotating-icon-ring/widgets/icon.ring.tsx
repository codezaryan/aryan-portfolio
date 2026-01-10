import React from 'react';
import { LucideIcon } from 'lucide-react';

import GlassmorphicIcon from './glassmorphic.icon';

export interface IconAndNames {
  icon: React.ElementType;
  name: string;
  color: string;
}


interface IconRingProps {
  icons: IconAndNames[];
  radius: number;
  rotation: number;
  reverse?: boolean;
  iconSize?: number;
  className?:string;
}

const IconRing: React.FC<IconRingProps> = ({ 
  icons, 
  radius, 
  rotation, 
  reverse = false,
  iconSize = 24,
  className =""
}) => {
const calculateIconPosition = (
  index: number,
  total: number,
  radius: number,
  rotation: number,
  reverse: boolean
) => {
  const direction = reverse ? -1 : 1;
  const angle = (360 / total) * index + rotation * direction;
  const angleInRadians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(angleInRadians) * radius,
    y: Math.sin(angleInRadians) * radius
  };
};



  return (
    <>
      {icons.map((Icon, index) => {
        const { x, y } = calculateIconPosition(
          index, 
          icons.length, 
          radius, 
          rotation, 
          reverse
        );

        return (
          <GlassmorphicIcon 
            key={`icon-${index}`}
            Icon={Icon}
            x={x}
            y={y}
            size={iconSize}
            className={className}
          />
        );
      })}
    </>
  );
};

export default IconRing;