import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Box, Torus, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingCube({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </Box>
    </Float>
  );
}

function GlowingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.8, 32, 32]}>
      <MeshDistortMaterial
        color="#00E6FF"
        emissive="#00E6FF"
        emissiveIntensity={0.4}
        metalness={0.9}
        roughness={0.1}
        distort={0.4}
        speed={2}
      />
    </Sphere>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Torus ref={meshRef} position={position} args={[1.2, 0.3, 16, 100]}>
        <meshStandardMaterial
          color="#8F00FF"
          emissive="#8F00FF"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00E6FF"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00E6FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8F00FF" />
          <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" angle={0.3} />
          
          <FloatingCube position={[-4, 2, -2]} color="#00E6FF" speed={0.8} />
          <FloatingCube position={[4, -1, -3]} color="#8F00FF" speed={1.2} />
          <FloatingCube position={[2, 3, -4]} color="#00E6FF" speed={0.6} />
          
          <GlowingSphere position={[-3, -2, -2]} />
          <FloatingTorus position={[3, 1, -3]} />
          
          <ParticleField />
          <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
