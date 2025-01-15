import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ThreeLogo = ({ ...props }) => {
  const { nodes } = useGLTF('/models/threeJs/scene.gltf');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const tlRef = useRef();

  useEffect(() => {
    tlRef.current = gsap.timeline({ repeat: -1, paused: true })
      .to(cubeRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        x: `+=${Math.PI * 2}`,
        duration: 5,
        ease: 'none',
      });
    tlRef.current.play();
  }, []);

  useEffect(() => {
    if (hovered) {
      tlRef.current.pause();
    } else {
      tlRef.current.resume();
    }
  }, [hovered]);

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xffff00,
    emissive: 0xffff00,
  });

  return (
    <Float floatIntensity={2}>
      <group rotation={[0, 0, 0]} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={goldMaterial}
          // onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/threeJs/scene.gltf');

export default ThreeLogo;