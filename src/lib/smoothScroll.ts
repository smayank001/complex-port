// Smooth scrolling implementation for buttery smooth navigation
let isScrolling = false;
let scrollTimeout: number | null = null;

export function smoothScrollTo(target: number, duration = 800) {
  if (isScrolling) return;
  
  isScrolling = true;
  
  const start = window.pageYOffset;
  const distance = target - start;
  let startTime: number | null = null;
  
  // Easing function for smooth animation
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  
  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    window.scrollTo(0, start + distance * easeInOutQuad(progress));
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      isScrolling = false;
    }
  };
  
  requestAnimationFrame(animation);
  
  // Reset scrolling flag after timeout as fallback
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = window.setTimeout(() => {
    isScrolling = false;
  }, duration + 100);
}

// Scroll to element with offset
export function scrollToElement(elementId: string, offset = 80) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;
  
  smoothScrollTo(offsetPosition);
}

// Handle anchor link clicks
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  
  if (href.startsWith('#')) {
    const targetId = href.substring(1);
    scrollToElement(targetId);
  } else {
    window.location.href = href;
  }
}