import React from "react";
import { useGLTF } from "@react-three/drei";

export const Model = () => {
  const model = useGLTF("/model/waterfall.glb");

  return <primitive object={model.scene} />;
};
