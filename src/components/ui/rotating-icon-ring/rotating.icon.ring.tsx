'use client';

import React from 'react';
import UserAvatar from './widgets/user.avatar';
import IconRing, { IconAndNames } from './widgets/icon.ring';
import DecorativeRing from './widgets/decorative.rings';
import {
  SiExpress,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiSpringboot
} from 'react-icons/si';
import { useRotation } from '@/lib/hooks/useRoatation';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { HeroImages } from '@/lib/constants/images/hero/hero.images';

const RotatingIconsRing: React.FC = () => {
  const rotation = useRotation(15);

  const isLg = useMediaQuery('(min-width: 1024px)');
  const isXl = useMediaQuery('(min-width: 1280px)');

  const innerRadius = isXl ? 200 : isLg ? 170 : 120;
  const outerRadius = isXl ? 270 : isLg ? 230 : 170;
  const iconSize = isXl ? 44 : isLg ? 40 : 32;

  return (
    <div className="flex items-center justify-center relative overflow-hidden">
      <div
        className="relative"
        style={{
          width: outerRadius * 2 + 100,
          height: outerRadius * 2 + 100
        }}
      >
        <IconRing
          icons={[
            { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
            { icon: SiHibernate, name: 'Hibernate', color: '#6DB33F' },
            { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },

          ]}
          radius={innerRadius}
          rotation={rotation}
          iconSize={iconSize}
        />

        <UserAvatar imageUrl={HeroImages.my_avatar} maxRadius={outerRadius} />

        <IconRing
          icons={[
             {icon: SiMysql ,name:"MySQL",color:"#61DAFB"},
            { icon: SiExpress, name: 'Express.js', color: '#47A248' },
            { icon: SiReact, name: 'React', color: '#61DAFB' },
            { icon: SiNodedotjs, name: 'Node.js', color: '#339933' }
          ]}
          radius={outerRadius}
          rotation={rotation}
          reverse
          iconSize={iconSize*1.5}
          className='z-10'
        />

        <DecorativeRing dashCount={50} radius={innerRadius} />
        <DecorativeRing dashWidth={5} radius={outerRadius} />
      </div>
    </div>
  );
};

export default RotatingIconsRing;
