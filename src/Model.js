import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/suzanne.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.18918666, -0.04341321]}
      />
    </group>
  );
};

useGLTF.preload("/suzanne.gltf");

export default Model;
