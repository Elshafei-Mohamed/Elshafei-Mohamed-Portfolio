import React, { useRef, Suspense, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// UltraComplexWireframe component
function UltraComplexWireframe() {
  const groupRef = useRef();
  const coreRef = useRef();
  const innerRef = useRef();
  const middleRef = useRef();
  const outerRef = useRef();
  const orbitalsRef = useRef([]);
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  const orbitals = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      distance: 1.0 + i * 0.12,
      speed: 0.01 + Math.random() * 0.03,
      size: 0.05 + Math.random() * 0.1,
      offset: Math.random() * Math.PI * 2,
      axis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
      shapeType: i % 5,
      color: [0xac4bff, 0x00d1f3, 0x9b4dff, 0x00c1e3, 0x8b3fff][i % 5],
    }));
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      position: new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5),
      speed: 0.02 + Math.random() * 0.05,
      size: 0.01 + Math.random() * 0.02,
    }));
  }, []);

  const setOrbitalRef = useCallback((el, i) => (orbitalsRef.current[i] = el), []);
  const setParticleRef = useCallback((el, i) => (particlesRef.current[i] = el), []);

  useFrame((state, delta) => {
    const t = timeRef.current += delta;

    if (groupRef.current) {
      groupRef.current.rotation.set(
        Math.sin(t * 0.3) * 0.5 + Math.sin(t * 0.6) * 0.3 + Math.sin(t * 0.9) * 0.2,
        Math.cos(t * 0.2) * 0.6 + Math.cos(t * 0.5) * 0.4 + Math.cos(t * 0.8) * 0.3,
        Math.sin(t * 0.4) * 0.4 + Math.sin(t * 0.7) * 0.3 + Math.sin(t * 1.0) * 0.2
      );
    }

    if (coreRef.current) coreRef.current.rotation.set(Math.sin(t*0.5)*0.8 + Math.sin(t*1.0)*0.5, Math.cos(t*0.4)*0.7 + Math.cos(t*0.9)*0.6, Math.sin(t*0.6)*0.6 + Math.sin(t*1.1)*0.4);
    if (innerRef.current) {
      innerRef.current.rotation.set(Math.sin(t*0.4)*0.7 + Math.sin(t*0.8)*0.4, Math.cos(t*0.5)*0.8 + Math.cos(t*1.0)*0.5, Math.sin(t*0.6)*0.6 + Math.sin(t*1.2)*0.3);
      innerRef.current.position.set(Math.sin(t*1.5)*0.15, Math.cos(t*1.7)*0.15, Math.sin(t*1.3)*0.15);
    }
    if (middleRef.current) middleRef.current.rotation.set(Math.sin(t*0.6)*0.6 + Math.sin(t*1.1)*0.4, Math.cos(t*0.3)*0.9 + Math.cos(t*0.9)*0.5, Math.sin(t*0.5)*0.7 + Math.sin(t*1.2)*0.3);
    if (outerRef.current) outerRef.current.rotation.set(Math.sin(t*0.3)*0.5 + Math.sin(t*0.7)*0.3, Math.cos(t*0.6)*0.6 + Math.cos(t*0.9)*0.4, Math.sin(t*0.4)*0.7 + Math.sin(t*1.0)*0.5);

    orbitalsRef.current.forEach((orbital, i) => {
      if (!orbital) return;
      const data = orbitals[i];
      const angle = t * data.speed + data.offset;
      orbital.position.set(
        Math.cos(angle) * data.distance + Math.sin(angle * 1.5) * 0.3 + Math.cos(angle * 2.5) * 0.15,
        Math.sin(angle * 0.8) * data.distance * 0.8 + Math.cos(angle * 1.8) * 0.2 + Math.sin(angle * 3.0) * 0.1,
        Math.sin(angle * 0.5) * data.distance * 0.6 + Math.cos(angle * 2.0) * 0.25 + Math.sin(angle * 2.8) * 0.12
      );
      orbital.rotateOnAxis(data.axis, delta * data.speed * 2);
    });

    particlesRef.current.forEach((particle, i) => {
      if (!particle) return;
      const data = particles[i];
      const angle = t * data.speed + i * 0.1;
      const radius = 1.8 + Math.sin(angle * 0.4) * 0.7 + Math.cos(angle * 0.7) * 0.4;
      particle.position.set(Math.cos(angle) * radius, Math.sin(angle * 0.8) * radius * 0.8, Math.sin(angle * 0.5) * radius * 0.6);
    });
  });

  return (
    <group ref={groupRef}>
      <mesh ref={outerRef}>
        <torusKnotGeometry args={[1.5, 0.5, 256, 32]} />
        <meshBasicMaterial color={0xac4bff} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.2, 5]} />
        <meshBasicMaterial color={0x00d1f3} wireframe />
      </mesh>
      <mesh ref={middleRef}>
        <dodecahedronGeometry args={[0.9, 2]} />
        <meshBasicMaterial color={0x9b4dff} wireframe />
      </mesh>
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.7, 1]} />
        <meshBasicMaterial color={0x00c1e3} wireframe />
      </mesh>
      <mesh ref={coreRef}>
        <tetrahedronGeometry args={[0.5, 2]} />
        <meshBasicMaterial color={0x8b3fff} wireframe />
      </mesh>

      {orbitals.map((orb, i) => (
        <mesh key={orb.id} ref={(el) => setOrbitalRef(el, i)}>
          {orb.shapeType === 0 && <tetrahedronGeometry args={[orb.size, 1]} />}
          {orb.shapeType === 1 && <octahedronGeometry args={[orb.size, 1]} />}
          {orb.shapeType === 2 && <sphereGeometry args={[orb.size, 16, 16]} />}
          {orb.shapeType === 3 && <torusGeometry args={[orb.size, orb.size * 0.4, 8, 16]} />}
          {orb.shapeType === 4 && <icosahedronGeometry args={[orb.size, 1]} />}
          <meshBasicMaterial color={orb.color} wireframe />
        </mesh>
      ))}

      {particles.map((p, i) => (
        <mesh key={p.id} ref={(el) => setParticleRef(el, i)}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial color={0xffffff} wireframe />
        </mesh>
      ))}
    </group>
  );
}

// Main component without auto-rotate button
export default function UltraComplexWireframe3D() {
  return (
    <div className="w-full h-full relative" style={{ minHeight: 600 }}>
      <Canvas
        style={{ width: "100%", height: "100%", background: "transparent" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <UltraComplexWireframe />
        </Suspense>

        <OrbitControls
          enablePan
          enableZoom
          zoomSpeed={0.5}
          rotateSpeed={.5}
          minDistance={7}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}
