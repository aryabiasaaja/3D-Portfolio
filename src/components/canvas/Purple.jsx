import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Purple = () => {
  const purple = useGLTF("./purple_planet/scene.gltf");
  return (
    <primitive
      object={purple.scene}
      scale={1.7}
      position-y={-0.9}
      rotation-y={0}
    />
  );
};

const PurpleCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Purple />
      </Suspense>
    </Canvas>
  );
};

export default PurpleCanvas;
