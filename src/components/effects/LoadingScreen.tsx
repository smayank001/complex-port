import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          {/* Circuit Lines Animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{
                  left: "-100%",
                  top: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 100}px`,
                }}
                animate={{
                  left: "100%",
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-px bg-gradient-to-b from-transparent via-secondary to-transparent"
                initial={{
                  top: "-100%",
                  left: `${Math.random() * 100}%`,
                  height: `${50 + Math.random() * 100}px`,
                }}
                animate={{
                  top: "100%",
                }}
                transition={{
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.5)",
                    "0 0 60px hsl(var(--primary) / 0.8)",
                    "0 0 20px hsl(var(--primary) / 0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Logo */}
              <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center relative">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span className="font-heading text-3xl font-bold text-gradient">
                  WS
                </span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 font-heading text-primary tracking-widest text-sm"
            >
              INITIALIZING
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-primary via-secondary to-primary mt-4 rounded-full"
              style={{ maxWidth: "200px", margin: "1rem auto 0" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
