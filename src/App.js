import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
// import { useSpring, animated, config } from "@react-spring/three";
import Model from "./Model";
import "./style.css";

const App = () => {
  const ref = useRef();
  const Loader = () => {
    const { progress } = useProgress();
    return (
      <Html center>
        <div className="loading">{progress} % loaded</div>
      </Html>
    );
  };

  return (
    <>
      <div className="bg"></div>
      <Canvas concurrent colorManagement camera={{ fov: 50 }} shadowMap>
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
            autoRotate
            enablePan={true}
            enableZoom={true}
            enableDamping
            dampingFactor={1}
            rotateSpeed={0.9}
          />
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment="city"
          >
            <Model />
          </Stage>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
