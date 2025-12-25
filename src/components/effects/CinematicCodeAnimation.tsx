import { useEffect, useRef } from "react";

// Pre-rendered code lines for better performance
const preRenderedLines = [
  '<span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> UserProfile = ({ userId }) => {',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> [user, setUser] = useState(null);',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">useEffect</span>(() => {',
  '    fetchUser(userId).then(setUser);',
  '  }, [userId]);',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">return</span> (',
  '    &lt;div className="user-profile"&gt;',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">async</span> <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">function</span> fetchUsers() {',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">try</span> {',
  '      <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> response = <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">await</span> api.get(\'/users\');',
  '      <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">return</span> response.data;',
  '    } <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">catch</span> (error) {',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">class</span> NotificationService {',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">private</span> queue: Queue;',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">async</span> sendBulk(users: User[]) {',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">interface</span> ApiResponse&lt;T&gt; {',
  '    data: T;',
  '    status: number;',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">type</span> User = {',
  '    id: number;',
  '    name: string;',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">for</span> (<span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">await</span> <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> item of data) {',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">if</span> (processed.valid) {',
  '      results.push(processed);',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">export</span> <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> Dashboard = () => {',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">return</span> (',
  '      &lt;div className="dashboard"&gt;',
  '  app.post(\'/api/users\', <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">async</span> (req, res) => {',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> { name, email } = req.body;',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> debounce = (func, delay) => {',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">let</span> timeoutId;',
  '    <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">return</span> (...args) => {',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> queryBuilder = knex(\'users\')',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">useState</span>&lt;User[]&gt;([]);',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">useQuery</span>(GET_USERS);',
  '  data.map(<span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">item</span> => &lt;Component key={item.id} data={item} /&gt;)',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">if</span> (loading) <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">return</span> &lt;Loading /&gt;;',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">try</span> { await process(); } <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">catch</span> (err) {}',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">const</span> result = data.<span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">filter</span>(item => item.active);',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">await</span> Promise.all(promises);',
  '  <span class="font-bold" style="text-shadow: 0 0 8px hsl(186, 100%, 60%), 0 0 15px hsl(186, 100%, 60%)">return</span> &lt;div className="container"&gt;&lt;/div&gt;;'
];

export function CinematicCodeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const lines: HTMLElement[] = [];
    let animationFrameId: number;
    let isVisible = true;
    
    // Throttle function to limit animation updates
    const throttle = (func: () => void, limit: number) => {
      let inThrottle: boolean;
      return function() {
        if (!inThrottle) {
          func.apply(this, arguments);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    };
    
    // Create floating code lines with better performance
    const createCodeLine = throttle(() => {
      if (!isVisible || lines.length > 20) return; // Increased max lines to 20
      
      const line = document.createElement("div");
      line.className = "absolute whitespace-pre font-mono tracking-tight";
      
      // Use pre-rendered lines for better performance
      const preRenderedLine = preRenderedLines[Math.floor(Math.random() * preRenderedLines.length)];
      line.innerHTML = preRenderedLine;
      
      // Random position and styling
      const startY = Math.random() * 100;
      const startX = -40;
      const speed = 0.4 + Math.random() * 0.4; // Increased speed (0.4-0.8 vs 0.2-0.5)
      const opacity = 0.25 + Math.random() * 0.25;
      const fontSize = 9 + Math.random() * 2;
      const zIndex = Math.random() > 0.8 ? '10' : '1';
      
      line.style.left = `${startX}%`;
      line.style.top = `${startY}%`;
      line.style.opacity = opacity.toString();
      line.style.fontSize = `${fontSize}px`;
      line.style.color = `hsl(185, 95%, 75%)`;
      line.style.textShadow = `0 0 5px hsl(186, 100%, 60%), 0 0 10px hsl(186, 100%, 60%)`;
      line.style.transform = `rotate(${-2 + Math.random() * 4}deg)`;
      line.style.zIndex = zIndex;
      line.style.willChange = 'left, opacity'; // Optimize for GPU
      
      container.appendChild(line);
      lines.push(line);
      
      // Animate the line with better performance
      let position = startX;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        // Use time-based animation for consistency
        const elapsed = currentTime - startTime;
        position = startX + (elapsed * 0.05 * speed); // Increased animation speed
        
        line.style.left = `${position}%`;
        
        // Fade in initially
        if (position < -30) {
          const fadeInProgress = (position + 40) / 10;
          line.style.opacity = (opacity * fadeInProgress).toString();
        }
        // Fade out as it moves
        else if (position > 50) {
          const fadeOutProgress = (position - 50) / 50;
          line.style.opacity = (opacity * (1 - fadeOutProgress)).toString();
        }
        
        // Remove line when it goes off screen
        if (position < 110) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          line.remove();
          const index = lines.indexOf(line);
          if (index > -1) lines.splice(index, 1);
        }
      };
      
      animationFrameId = requestAnimationFrame(animate);
    }, 80); // Reduced throttle time to 80ms for more frequent creation
    
    // Create initial lines
    for (let i = 0; i < 10; i++) { // Increased initial lines to 10
      setTimeout(() => createCodeLine(), i * 600); // Faster initial creation
    }
    
    // Continuously create new lines at a higher rate
    const intervalId = setInterval(createCodeLine, 1200); // Increased frequency to every 1.2s
    
    // Intersection Observer for performance - pause when not visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    
    if (container) {
      observer.observe(container);
    }
    
    // Cleanup
    return () => {
      isVisible = false;
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      lines.forEach((line) => line.remove());
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.05) 100%)",
      }}
    >
      {/* Optimized grid background */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(hsl(186, 80%, 20%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(186, 80%, 20%) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />
      
      {/* Simplified atmospheric elements for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanning line effect */}
        <div 
          className="absolute top-0 left-0 right-0 h-px opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(186, 100%, 60%), transparent)',
            animation: 'scan 4s linear infinite', // Increased scan speed
          }}
        />
      </div>
      
      {/* Simplified CSS for animations */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}