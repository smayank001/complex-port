import { motion } from 'framer-motion';

export function CyberLaserLines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Horizontal laser lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${20 + i * 20}%`,
            background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.5, 0.5, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 8,
          }}
        />
      ))}
      
      {/* Vertical laser lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px h-full"
          style={{
            left: `${25 + i * 25}%`,
            background: `linear-gradient(180deg, transparent, hsl(var(--secondary) / 0.3), transparent)`,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: [0, 1, 1, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 0.8 + 2,
            repeat: Infinity,
            repeatDelay: 10,
          }}
        />
      ))}
      
      {/* Diagonal laser beams */}
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-px origin-left"
        style={{
          background: `linear-gradient(90deg, hsl(var(--primary) / 0.5), transparent)`,
          transform: 'rotate(30deg)',
        }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 7,
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-[200%] h-px origin-right"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--secondary) / 0.5))`,
          transform: 'rotate(-30deg)',
        }}
        animate={{
          x: ['100%', '-100%'],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 3,
          delay: 5,
          repeat: Infinity,
          repeatDelay: 7,
        }}
      />
    </div>
  );
}
