import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function CursorRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setRipples((prev) => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };
    
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Inner ring */}
            <div
              className="w-20 h-20 rounded-full border-2"
              style={{
                borderColor: 'hsl(var(--primary))',
                boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={`${ripple.id}-outer`}
            className="absolute"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Outer ring */}
            <div
              className="w-20 h-20 rounded-full border"
              style={{
                borderColor: 'hsl(var(--secondary) / 0.5)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
