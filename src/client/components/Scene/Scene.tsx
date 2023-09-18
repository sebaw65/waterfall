import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Stage } from "@react-three/drei";
import { Model } from "../Model";
import { StyledCanvas } from "./styled";

export const Scene = () => {
  return (
    <StyledCanvas
      camera={{ position: [0, 15, 50], near: 0.01 }}
      frameloop="demand"
      performance={{ min: 0.1 }}
      gl={{ antialias: false }}
    >
      <ambientLight intensity={0.9} />

      <Environment files={"/studio_2k.hdr"} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <CameraControls />
    </StyledCanvas>
  );
};
