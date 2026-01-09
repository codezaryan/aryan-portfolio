'use client';

import React from 'react';

import UserAvatar from './widgets/user.avatar';
import IconRing, { IconAndNames } from './widgets/icon.ring';
import DecorativeRing from './widgets/decorative.rings';
import { SiExpress, SiHibernate, SiMongodb, SiNodedotjs, SiReact, SiSpringboot } from 'react-icons/si';
import { useRotation } from '@/lib/hooks/useRoatation';
import { HeroImages } from '@/lib/constants/images/hero/hero.images';


interface RotatingIconsRingProps {
  userImage?: string;
  innerRadius?: number;
  outerRadius?: number;
  innerIcons?: IconAndNames[];
  outerIcons?: IconAndNames[];
  rotationSpeed?: number;
  iconSize?: number;
}

const RotatingIconsRing: React.FC<RotatingIconsRingProps> = ({ 
  innerRadius = 160,
  outerRadius = 210,
  innerIcons = [
    { icon: SiSpringboot, name: "Spring Boot" },
    { icon: SiHibernate, name: "Hibernate" },
    { icon: SiMongodb, name: "MongoDB" },
        { icon: SiMongodb, name: "MongoDB" },
            { icon: SiMongodb, name: "MongoDB" }
  ],
  outerIcons = [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
            { icon: SiMongodb, name: "MongoDB" }
  ],
  rotationSpeed = 15,
  iconSize = 36
}) => {
  const rotation = useRotation(rotationSpeed);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      <div 
        className="relative" 
        style={{ 
          width: outerRadius * 2 + 100, 
          height: outerRadius * 2 + 100 
        }}
      >
        <IconRing 
          icons={innerIcons}
          radius={innerRadius}
          rotation={rotation}
          reverse={false}
          iconSize={iconSize}
          className="z-10"
        />

        <UserAvatar imageUrl={HeroImages.my_avatar} maxRadius={outerRadius} />
        
        <IconRing 
          icons={outerIcons}
          radius={outerRadius}
          rotation={rotation}
          reverse={true}
          iconSize={iconSize}
          className='z-10'
        />
        
        <DecorativeRing dashCount={50} radius={innerRadius} />
        <DecorativeRing dashWidth={5} radius={outerRadius} />
      </div>
    </div>
  );
};

export default RotatingIconsRing;