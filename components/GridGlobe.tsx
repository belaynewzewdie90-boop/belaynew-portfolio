// components/GridGlobe.tsx
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#1a1a2e"
        emissive="#0f0f1a"
        emissiveIntensity={0.5}
        metalness={0.2}
        roughness={0.8}
        wireframe={false}
      />
      {/* Grid lines */}
      <lineSegments>
        <wireframeGeometry args={[new THREE.SphereGeometry(1.01, 64, 64)]} />
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.3} />
      </lineSegments>
    </mesh>
  );
}

export default function GridGlobe() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.8}
          color="#a855f7"
        />

        <Globe />

        {/* Stars background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>

      {/* Overlay text (optional) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Global Perspective
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
            Building for users worldwide with clean code and performance first
          </p>
        </div>
      </div>
    </div>
  );
}
