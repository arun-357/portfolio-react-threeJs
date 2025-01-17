import { MeshStandardMaterial } from 'three';
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes } = useGLTF('models/react.glb');

  const reactMaterial = new MeshStandardMaterial({
    color: '#61dafb',
    emissive: '#000000',
    metalness: 0.5,
    roughness: 0.3
  })

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={reactMaterial}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;