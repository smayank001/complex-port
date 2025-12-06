import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);
  
  const particleCount = 150;
  const connectionDistance = 2.5;
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return [positions, velocities];
  }, []);
  
  const linePositions = useMemo(() => new Float32Array(particleCount * particleCount * 6), []);
  
  useFrame(() => {
    if (!mesh.current || !linesMesh.current) return;
    
    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      positionArray[i * 3] += velocities[i * 3];
      positionArray[i * 3 + 1] += velocities[i * 3 + 1];
      positionArray[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Boundary check
      if (Math.abs(positionArray[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(positionArray[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
      if (Math.abs(positionArray[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Update connections
    let lineIndex = 0;
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionArray[i * 3] - positionArray[j * 3];
        const dy = positionArray[i * 3 + 1] - positionArray[j * 3 + 1];
        const dz = positionArray[i * 3 + 2] - positionArray[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < connectionDistance) {
          linePositions[lineIndex++] = positionArray[i * 3];
          linePositions[lineIndex++] = positionArray[i * 3 + 1];
          linePositions[lineIndex++] = positionArray[i * 3 + 2];
          linePositions[lineIndex++] = positionArray[j * 3];
          linePositions[lineIndex++] = positionArray[j * 3 + 1];
          linePositions[lineIndex++] = positionArray[j * 3 + 2];
        }
      }
    }
    
    // Clear remaining positions
    for (let i = lineIndex; i < linePositions.length; i++) {
      linePositions[i] = 0;
    }
    
    linesMesh.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00E6FF"
          size={0.08}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      
      <lineSegments ref={linesMesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00E6FF"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </>
  );
}

export function ParticleNetwork() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
