import { useState } from "react";
import { motion } from "framer-motion";
import { handleAnchorClick } from "@/lib/smoothScroll";
import { FuturisticNavbar } from "./FuturisticNavbar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Minimal 3-line button on the right side */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 rounded-lg bg-black/30 backdrop-blur-md border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open navigation menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.div
            className="w-6 h-0.5 bg-cyan-400 rounded-full"
            whileHover={{ scaleX: 1.2, originX: 0 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-purple-500 rounded-full"
            whileHover={{ scaleX: 1.2, originX: 0 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-cyan-400 rounded-full"
            whileHover={{ scaleX: 1.2, originX: 0 }}
          />
        </div>
      </motion.button>

      {/* Fullscreen Futuristic Navbar Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <FuturisticNavbar onClose={() => setIsOpen(false)} />
          {/* Close button for the modal */}
          <motion.button
            onClick={() => setIsOpen(false)}
            className="fixed top-6 right-6 z-50 p-2 rounded-full bg-black/50 backdrop-blur-md border border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </>
  );
}
