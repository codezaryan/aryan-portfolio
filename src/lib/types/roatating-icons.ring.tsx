import { LucideIcon } from 'lucide-react';

export interface IconPosition {
  x: number;
  y: number;
  angle: number;
}

export interface RingConfig {
  radius: number;
  icons: LucideIcon[];
  reverse?: boolean;
}

export interface RotatingIconsRingProps {
  userImage?: string;
  innerRadius?: number;
  outerRadius?: number;
  innerIcons?: LucideIcon[];
  outerIcons?: LucideIcon[];
  rotationSpeed?: number;
  iconSize?: number;
}