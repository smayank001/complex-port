import { useEffect, useRef, useState } from 'react';

// Hook to optimize scroll performance
export function useOptimizedScroll(callback: (time: number) => void, fps = 60) {
  const scrollRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const callbackRef = useRef(callback);
  
  // Update callback ref when it changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  useEffect(() => {
    const throttleInterval = 1000 / fps;
    
    const handleScroll = () => {
      const now = performance.now();
      
      // Throttle scroll events
      if (now - lastTimeRef.current >= throttleInterval) {
        callbackRef.current(now);
        lastTimeRef.current = now;
      } else if (!scrollRef.current) {
        // Schedule next frame if not already scheduled
        scrollRef.current = requestAnimationFrame(() => {
          callbackRef.current(now);
          lastTimeRef.current = now;
          scrollRef.current = null;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current);
      }
    };
  }, [fps]);
}

// Hook to optimize intersection observer
export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) {
  const elementRef = useRef<Element | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, options);
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [callback, options]);
  
  return elementRef;
}

// Hook to enable GPU acceleration for animations
export function useGPUAcceleration() {
  const elementRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (elementRef.current) {
      // Force hardware acceleration
      elementRef.current.style.transform = 'translateZ(0)';
      elementRef.current.style.willChange = 'transform';
    }
    
    return () => {
      if (elementRef.current) {
        elementRef.current.style.transform = '';
        elementRef.current.style.willChange = '';
      }
    };
  }, []);
  
  return elementRef;
}

// Hook to optimize image loading
export function useImageLazyLoad(src: string, placeholder?: string) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (!src) return;
    
    const img = new Image();
    img.decoding = 'async';
    img.loading = 'lazy';
    
    img.onload = () => {
      if (imgRef.current) {
        imgRef.current.src = src;
        setLoaded(true);
      }
    };
    
    img.onerror = () => {
      setError(true);
    };
    
    img.src = src;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholder]);
  
  return { imgRef, loaded, error };
}