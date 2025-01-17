import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

// eslint-disable-next-line react/prop-types
export default function DesktopCamera({children}) {
      const groupRef = useRef();

      useFrame((state, delta) => {
            easing.damp3(groupRef.current.position, [-state.pointer.y / 10, 0, 0], 0.25, delta);
      });

      useFrame((state, delta) => {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 10, 0, 0], 0.25, delta);
      });

      return<>
            <group ref={groupRef}>{children}</group>
      </>
            
}