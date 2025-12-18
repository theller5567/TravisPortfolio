'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import { twMerge } from 'tailwind-merge';

export default function Stars() {
  return (
    <StarsBackground>
      <StarLayer count={2000} size={1} transition={{ repeat: Infinity, duration: 50, ease: 'linear' }} starColor='#fff' />
    </StarsBackground>
  )
}

function generateStars(count, starColor) {
  const shadows = [];

  // Get actual viewport dimensions
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

  // Create stars that extend well beyond viewport for full coverage
  // Add generous padding for parallax movement and edge cases
  const totalWidth = viewportWidth + 4000;  // Extend 2000px beyond each edge
  const totalHeight = viewportHeight + 4000;

  for (let i = 0; i < count; i++) {
    // Center the distribution around the viewport
    const x = Math.floor(Math.random() * totalWidth) - totalWidth / 2;
    const y = Math.floor(Math.random() * totalHeight) - totalHeight / 2;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }

  return shadows.join(', ');
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: 'linear' },
  starColor = '#08F2C1',
  className,
  ...props
}) {
  const [boxShadow, setBoxShadow] = React.useState('');

  React.useEffect(() => {
    const updateStars = () => {
      setBoxShadow(generateStars(count, starColor));
    };

    // Generate stars initially
    updateStars();

    // Regenerate stars when window resizes
    window.addEventListener('resize', updateStars);
    return () => window.removeEventListener('resize', updateStars);
  }, [count, starColor]);

  return (
    <motion.div
      data-slot="star-layer"
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={twMerge('absolute top-0 left-1/2 transform -translate-x-1/2 w-[8000px] h-[2000px]', className)}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}



function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = '#fff',
  pointerEvents = true,
  ...props
}) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor],
  );

  return (
    <div
      data-slot="stars-background"
      className={twMerge(
        'relative size-full overflow-visible bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)]',
        className,
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={twMerge({ 'pointer-events-none': !pointerEvents })}
      >
        <StarLayer
          count={1000}
          size={1}
          transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
          starColor={starColor}
        />
        <StarLayer
          count={400}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: 'linear',
          }}
          starColor={starColor}
        />
        <StarLayer
          count={200}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 3,
            ease: 'linear',
          }}
          starColor={starColor}
        />
      </motion.div>
      {children}
    </div>
  );
}

export {
  StarLayer,
  StarsBackground,
};