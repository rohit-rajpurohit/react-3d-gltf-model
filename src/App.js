import React, { useState, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import "./style.css";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./flower_pool.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={10} />
    </>
  );
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loading">{progress} % loaded</div>
    </Html>
  );
};

const App = () => {
  return (
    <>
      <div className="bg">
        <h1>Medeival Fantasy Lore</h1>
      </div>
      {/* <div className="container"> */}
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [100, 30, 200], fov: 20 }}
        shadowMap
      >
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.5} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2}
          angle={1}
          penumbra={0.5}
          position={[250, 25, 250]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <Suspense fallback={<Loader />}>
          <OrbitControls
            // autoRotate
            enablePan={true}
            enableZoom={true}
            enableDamping
            dampingFactor={1}
            rotateSpeed={0.9}
          />
          <Model />
        </Suspense>
      </Canvas>
      {/* </div> */}
    </>
  );
};

export default App;
