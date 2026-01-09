import { useState, useEffect } from 'react';

export const useRotation = (speed: number = 20): number => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, (1000 / 60) * (60 / speed));

    return () => clearInterval(interval);
  }, [speed]);

  return rotation;
};