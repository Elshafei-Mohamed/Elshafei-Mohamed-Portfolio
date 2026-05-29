import { useRef, Suspense, useMemo, useCallback, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Optimized UltraComplexWireframe component with reduced complexity
function UltraComplexWireframe() {
  const groupRef = useRef();
  const coreRef = useRef();
  const innerRef = useRef();
  const middleRef = useRef();
  const outerRef = useRef();
  const orbitalsRef = useRef([]);
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  // Deterministic pseudo-random based on index
  const seededRandom = (seed) => {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return x - Math.floor(x);
  };

  // Reduced orbital count from 30 to 15 for better performance
  const orbitals = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      distance: 1.0 + i * 0.15,
      speed: 0.01 + seededRandom(i) * 0.03,
      size: 0.05 + seededRandom(i + 15) * 0.1,
      offset: seededRandom(i + 30) * Math.PI * 2,
      axis: new THREE.Vector3(
        seededRandom(i + 45) - 0.5,
        seededRandom(i + 60) - 0.5,
        seededRandom(i + 75) - 0.5
      ).normalize(),
      shapeType: i % 5,
      color: [0xac4bff, 0x00d1f3, 0x9b4dff, 0x00c1e3, 0x8b3fff][i % 5],
    }));
  }, []);

  // Reduced particle count from 150 to 50 for better performance
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      position: new THREE.Vector3(
        (seededRandom(i + 90) - 0.5) * 5,
        (seededRandom(i + 105) - 0.5) * 5,
        (seededRandom(i + 120) - 0.5) * 5
      ),
      speed: 0.02 + seededRandom(i + 135) * 0.05,
      size: 0.01 + seededRandom(i + 150) * 0.02,
    }));
  }, []);

  const setOrbitalRef = useCallback((el, i) => (orbitalsRef.current[i] = el), []);
  const setParticleRef = useCallback((el, i) => (particlesRef.current[i] = el), []);

  useFrame((state, delta) => {
    const t = timeRef.current += delta;

    // Optimize: Use simpler rotation calculations
    if (groupRef.current) {
      groupRef.current.rotation.set(
        Math.sin(t * 0.3) * 0.5,
        Math.cos(t * 0.2) * 0.6,
        Math.sin(t * 0.4) * 0.4
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.set(
        Math.sin(t * 0.5) * 0.8,
        Math.cos(t * 0.4) * 0.7,
        Math.sin(t * 0.6) * 0.6
      );
    }
    if (innerRef.current) {
      innerRef.current.rotation.set(
        Math.sin(t * 0.4) * 0.7,
        Math.cos(t * 0.5) * 0.8,
        Math.sin(t * 0.6) * 0.6
      );
      innerRef.current.position.set(
        Math.sin(t * 1.5) * 0.15,
        Math.cos(t * 1.7) * 0.15,
        Math.sin(t * 1.3) * 0.15
      );
    }
    if (middleRef.current) {
      middleRef.current.rotation.set(
        Math.sin(t * 0.6) * 0.6,
        Math.cos(t * 0.3) * 0.9,
        Math.sin(t * 0.5) * 0.7
      );
    }
    if (outerRef.current) {
      outerRef.current.rotation.set(
        Math.sin(t * 0.3) * 0.5,
        Math.cos(t * 0.6) * 0.6,
        Math.sin(t * 0.4) * 0.7
      );
    }

    // Optimize: Batch updates and use simpler calculations
    orbitalsRef.current.forEach((orbital, i) => {
      if (!orbital) return;
      const data = orbitals[i];
      const angle = t * data.speed + data.offset;
      orbital.position.set(
        Math.cos(angle) * data.distance,
        Math.sin(angle * 0.8) * data.distance * 0.8,
        Math.sin(angle * 0.5) * data.distance * 0.6
      );
      orbital.rotateOnAxis(data.axis, delta * data.speed * 2);
    });

    particlesRef.current.forEach((particle, i) => {
      if (!particle) return;
      const data = particles[i];
      const angle = t * data.speed + i * 0.1;
      const radius = 1.8 + Math.sin(angle * 0.4) * 0.7;
      particle.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.8) * radius * 0.8,
        Math.sin(angle * 0.5) * radius * 0.6
      );
    });
  });

  return (
    <group ref={groupRef}>
      {/* Reduced geometry complexity - lower segment counts */}
      <mesh ref={outerRef}>
        <torusKnotGeometry args={[1.5, 0.5, 64, 16]} />
        <meshBasicMaterial color={0xac4bff} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshBasicMaterial color={0x00d1f3} wireframe />
      </mesh>
      <mesh ref={middleRef}>
        <dodecahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color={0x9b4dff} wireframe />
      </mesh>
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color={0x00c1e3} wireframe />
      </mesh>
      <mesh ref={coreRef}>
        <tetrahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial color={0x8b3fff} wireframe />
      </mesh>

      {orbitals.map((orb, i) => (
        <mesh key={orb.id} ref={(el) => setOrbitalRef(el, i)}>
          {orb.shapeType === 0 && <tetrahedronGeometry args={[orb.size, 0]} />}
          {orb.shapeType === 1 && <octahedronGeometry args={[orb.size, 0]} />}
          {orb.shapeType === 2 && <sphereGeometry args={[orb.size, 12, 12]} />}
          {orb.shapeType === 3 && <torusGeometry args={[orb.size, orb.size * 0.4, 6, 12]} />}
          {orb.shapeType === 4 && <icosahedronGeometry args={[orb.size, 0]} />}
          <meshBasicMaterial color={orb.color} wireframe />
        </mesh>
      ))}

      {particles.map((p, i) => (
        <mesh key={p.id} ref={(el) => setParticleRef(el, i)}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color={0xffffff} wireframe />
        </mesh>
      ))}
    </group>
  );
}

// Main component with performance optimizations
export default function UltraComplexWireframe3D() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Detect prefers-reduced-motion changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Use IntersectionObserver to pause rendering when not visible
  useEffect(() => {
    const el = canvasRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  const shouldAnimate = isVisible && !prefersReducedMotion;

  return (
    <div ref={canvasRef} className="w-full h-full relative" style={{ minHeight: 600 }}>
      <Canvas
        aria-label="3D interactive portfolio navigation cube"
        style={{ width: "100%", height: "100%", background: "transparent" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        frameloop={shouldAnimate ? "always" : "never"}
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Adaptive performance
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <UltraComplexWireframe />
        </Suspense>

        <OrbitControls
          enablePan
          enableZoom
          zoomSpeed={0.5}
          rotateSpeed={0.5}
          minDistance={7}
          maxDistance={20}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
