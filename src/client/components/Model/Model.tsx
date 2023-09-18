import React from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { type GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const Model = () => {
  const loader = new GLTFLoader();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  loader.setDRACOLoader(dracoLoader);

  //   const model = useLoader("/model/waterfall.glb");
  const model = useGLTF("/model/waterfall.glb");

  return <primitive object={model.scene} />;
};
