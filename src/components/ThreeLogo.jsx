import { Float, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const ThreeLogo = ({ ...props }) => {
  const { nodes } = useGLTF('/models/threeJs/scene.gltf');
  // const threeLogoRef = useRef();
  // const [hovered, setHovered] = useState(false);
  // const tlRef = useRef();

  // useEffect(() => {
  //   tlRef.current = gsap.timeline({ repeat: -1, paused: true })
  //     .to(threeLogoRef.current.rotation, {
  //       y: `+=${Math.PI * 2}`,
  //       x: `+=${Math.PI * 2}`,
  //       duration: 5,
  //       ease: 'none',
  //     });
  //   tlRef.current.play();
  // }, []);

  // useEffect(() => {
  //   if (hovered) {
  //     tlRef.current.pause();
  //   } else {
  //     tlRef.current.resume();
  //   }
  // }, [hovered]);

  const goldMaterial = new MeshStandardMaterial({
    color: '#ffd700',
    emissive: '#000000',
    metalness: 1,
    roughness: 0.1,
  });

  return (
    <Float floatIntensity={0.5}>
      <group rotation={[0, 0, 0]} dispose={null} {...props}>
        <mesh
          // ref={threeLogoRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={goldMaterial}
          // onPointerEnter={() => setHovered(true)}
          // onPointerLeave={() => setHovered(false)}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/threeJs/scene.gltf');

export default ThreeLogo;