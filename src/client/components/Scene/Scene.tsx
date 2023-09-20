import React, { Suspense } from "react";
import { CameraControls, Environment } from "@react-three/drei";
import { StyledCanvas } from "./styled";
import { Model } from "../Model";

export const Scene = () => {
  return (
    <StyledCanvas
      camera={{ position: [0, 15, 50], near: 0.1 }}
      frameloop="demand"
      gl={{ antialias: false }}
    >
      <ambientLight intensity={0.9} />
      <Environment files={"/studio_2k.hdr"} background={true} blur={0.2} />
      <CameraControls />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </StyledCanvas>
  );
};
