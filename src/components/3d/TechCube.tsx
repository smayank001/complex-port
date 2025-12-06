import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { Float, Text, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'AI/ML', color: '#FF6F61' },
];

function TechFace({ position, rotation, text, color }: { 
  position: [number, number, number]; 
  rotation: [number, number, number];
  text: string;
  color: string;
}) {
  return (
    <group position={position} rotation={rotation}>
      <Text
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron.woff"
      >
        {text}
      </Text>
    </group>
  );
}

function RotatingCube() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current && !hovered) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group 
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color="#000000"
            emissive="#00E6FF"
            emissiveIntensity={0.1}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </RoundedBox>
        
        {/* Edges */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
          <lineBasicMaterial color="#00E6FF" linewidth={2} />
        </lineSegments>
        
        {/* Front */}
        <TechFace position={[0, 0, 1.01]} rotation={[0, 0, 0]} text={techStack[0].name} color={techStack[0].color} />
        {/* Back */}
        <TechFace position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]} text={techStack[1].name} color={techStack[1].color} />
        {/* Right */}
        <TechFace position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} text={techStack[2].name} color={techStack[2].color} />
        {/* Left */}
        <TechFace position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} text={techStack[3].name} color={techStack[3].color} />
        {/* Top */}
        <TechFace position={[0, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]} text={techStack[4].name} color={techStack[4].color} />
        {/* Bottom */}
        <TechFace position={[0, -1.01, 0]} rotation={[Math.PI / 2, 0, 0]} text={techStack[5].name} color={techStack[5].color} />
      </group>
    </Float>
  );
}

export function TechCube() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00E6FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8F00FF" />
          
          <RotatingCube />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
