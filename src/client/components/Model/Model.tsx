import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../Models/types";

export const Model = () => {
  const { nodes, materials } = useGLTF("/models/waterfall.glb") as GLTFResult;

  return (
    <group>
      {/** Mountain */}
      <group position={[-0.606, 40.697, -53.498]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials.ziemia}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_2.geometry}
          material={materials.trawa}
        />
      </group>
      {/** Waterfalls */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water.geometry}
        material={materials.Water}
        position={[0.355, 40.4, -64.324]}
        rotation={[0, -0.026, 0]}
        scale={[16.355, 22.824, 31.278]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water001.geometry}
        material={materials.Water}
        position={[56.096, 40.4, -58.796]}
        rotation={[0, -0.172, 0]}
        scale={[16.355, 22.824, 31.278]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water002.geometry}
        material={materials.Water}
        position={[-54.007, 40.4, -57.298]}
        rotation={[0, 0.201, 0]}
        scale={[16.355, 22.824, 31.278]}
      />
      {/** Chest */}
      <group position={[3.753, 5.798, -55.787]} rotation={[-0.054, 0, 0.038]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials.tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_2.geometry}
          material={materials["stal mat"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_3.geometry}
          material={materials["zloto mat"]}
        />
      </group>
      {/** Lake */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane226.geometry}
        material={materials.Water}
        position={[0.484, -1.005, -7.495]}
        scale={[94.934, 91.285, 91.285]}
      />

      {/* <group
        position={[0.175, 2.327, 17.809]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-4.589, -0.421, -4.589]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.ziemia}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.trawa}
        />
      </group> */}

      {/** Island */}
      <group
        position={[0.175, 2.327, 17.809]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-4.589, -0.421, -4.589]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.ziemia}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.trawa}
        />
      </group>
      {/** Sword and platform */}
      <group position={[0.175, 7.322, 17.809]} scale={0.22}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004.geometry}
          material={materials.stal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_1.geometry}
          material={materials.rekojesc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_2.geometry}
          material={materials.skala}
        />
      </group>

      {/** platfoms */}
      <group position={[1.504, 3.741, -11.422]} scale={3.275}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.skala}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials.trawa}
        />
      </group>
      <group position={[1.504, 3.741, -21.796]} scale={3.275}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.skala}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials.trawa}
        />
      </group>
      {/** Stones */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials.skala}
        position={[17.801, 4.586, 7.41]}
        rotation={[-0.582, -0.07, 2.662]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.skala}
        position={[7.675, 3.512, 10.877]}
        rotation={[-0.43, -0.227, -2.648]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials.skala}
        position={[11.334, 3.319, 28.643]}
        rotation={[-0.582, -0.07, 2.662]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials.skala}
        position={[-13.481, 3.844, 20.107]}
        rotation={[2.87, -0.528, -0.463]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials.skala}
        position={[-9.23, 3.512, 16.037]}
        rotation={[-0.43, -0.227, -2.648]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials.skala}
        position={[-16.139, 3.319, 32.196]}
        rotation={[-0.582, -0.07, 2.662]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.skala}
        position={[-17.805, 3.319, 13.431]}
        rotation={[-1.715, -0.983, 0.965]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.skala}
        position={[-3.241, 3.351, 9.796]}
        rotation={[0.944, -0.227, -2.648]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.skala}
        position={[16.267, 3.512, 32.604]}
        rotation={[-0.43, -0.227, -2.648]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={materials.skala}
        position={[-6.604, 10.401, 9.288]}
        rotation={[2.465, 0.106, 1.854]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere013.geometry}
        material={materials.skala}
        position={[0.761, 6.064, 1.957]}
        rotation={[1.757, -0.566, 0.479]}
        scale={9.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere014.geometry}
        material={materials.skala}
        position={[8.777, 6.959, 2.823]}
        rotation={[-2.778, -0.132, -2.532]}
        scale={7.384}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere015.geometry}
        material={materials.skala}
        position={[-12.064, 6.698, 3.679]}
        rotation={[-1.113, -0.132, -2.532]}
        scale={6.482}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials.skala}
        position={[13.659, 12.419, -56.005]}
        rotation={[1.129, -0.721, 0.81]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials.skala}
        position={[13.336, 8.915, -55.996]}
        rotation={[0.728, 0.28, 1.096]}
        scale={[0.969, 0.709, 0.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials.skala}
        position={[11.082, 11.358, -60.309]}
        rotation={[-1.335, 0.28, 1.096]}
        scale={[1.328, 0.971, 0.904]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials.skala}
        position={[-8.757, 12.419, -58.798]}
        rotation={[2.361, -0.266, 2.748]}
        scale={[0.603, 0.441, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials.skala}
        position={[-7.996, 8.915, -60.602]}
        rotation={[1.249, -0.831, 2.485]}
        scale={[0.969, 0.709, 0.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials.skala}
        position={[-3.504, 11.358, -62.475]}
        rotation={[-1.304, -0.25, -0.494]}
        scale={[1.328, 0.971, 0.904]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere016.geometry}
        material={materials.skala}
        position={[24.934, 36.889, -36.671]}
        rotation={[-2.021, 0.117, 1.83]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere017.geometry}
        material={materials.skala}
        position={[27.444, 39.721, -37.973]}
        rotation={[0.417, -0.915, -2.027]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere018.geometry}
        material={materials.skala}
        position={[32.99, 31.911, -35.478]}
        rotation={[0.683, 0.085, 1.87]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere019.geometry}
        material={materials.skala}
        position={[82.828, 67.128, -39.691]}
        rotation={[0.683, 0.085, 1.87]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere020.geometry}
        material={materials.skala}
        position={[71.593, 10.499, -29.512]}
        rotation={[0.417, -0.915, -2.027]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere021.geometry}
        material={materials.skala}
        position={[82.828, 47.164, -29.381]}
        rotation={[0.683, 0.085, 1.87]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere022.geometry}
        material={materials.skala}
        position={[-29.211, 37.559, -35.773]}
        rotation={[1.516, -1.242, -1.15]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere023.geometry}
        material={materials.skala}
        position={[-19.764, 53.476, -37.509]}
        rotation={[0.417, -0.915, -2.027]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere024.geometry}
        material={materials.skala}
        position={[-12.585, 20.83, -35.782]}
        rotation={[-0.278, 0.08, 1.846]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere025.geometry}
        material={materials.skala}
        position={[82.832, 67.128, -38.348]}
        rotation={[0.874, 0.609, 1.34]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere026.geometry}
        material={materials.skala}
        position={[80.151, 70.684, -48.639]}
        rotation={[-1.94, 0.609, 1.34]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027.geometry}
        material={materials.skala}
        position={[90.738, 70.684, -69.058]}
        rotation={[-1.94, 0.609, 1.34]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere028.geometry}
        material={materials.skala}
        position={[87.276, 72.202, -78.071]}
        rotation={[-1.995, 0.265, -2.726]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere029.geometry}
        material={materials.skala}
        position={[89.739, 67.772, -46.087]}
        rotation={[-1.94, 0.609, 1.34]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere030.geometry}
        material={materials.skala}
        position={[-85.088, 32.396, -59.658]}
        rotation={[1.757, -0.566, 0.479]}
        scale={9.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere031.geometry}
        material={materials.skala}
        position={[-76.171, 62.968, -41.67]}
        rotation={[0.204, 1.01, 0.61]}
        scale={9.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere032.geometry}
        material={materials.skala}
        position={[-84.602, 51.24, -28.994]}
        rotation={[-2.778, -0.132, -2.532]}
        scale={7.384}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere033.geometry}
        material={materials.skala}
        position={[-67.125, 27.141, -30.22]}
        rotation={[1.003, -0.249, 1.08]}
        scale={7.384}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere034.geometry}
        material={materials.skala}
        position={[-29.705, 71.707, -88.102]}
        rotation={[-1.113, -0.132, -2.532]}
        scale={6.482}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere035.geometry}
        material={materials.skala}
        position={[-23.798, 67.131, -53.617]}
        rotation={[-2.394, -0.721, -1.102]}
        scale={6.482}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere036.geometry}
        material={materials.skala}
        position={[32.99, 53.81, -39.474]}
        rotation={[0.683, 0.085, 1.87]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere037.geometry}
        material={materials.skala}
        position={[27.568, 74.948, -82.498]}
        rotation={[-2.78, 1.431, -0.401]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere038.geometry}
        material={materials.skala}
        position={[29.351, 71.093, -58.517]}
        rotation={[-0.38, 1.194, 3.012]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere039.geometry}
        material={materials.skala}
        position={[19.236, 67.141, -47.848]}
        rotation={[-0.38, 1.194, 3.012]}
        scale={[8.278, 3.881, 4.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere040.geometry}
        material={materials.skala}
        position={[12.326, 46.765, -41.062]}
        rotation={[-0.38, 1.194, 3.012]}
        scale={[8.278, 3.881, 4.51]}
      />
      {/** Flower  */}
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials.tree}
          position={[6.685, 4.561, 23.488]}
          rotation={[0, -1.532, -0.125]}
          scale={0.441}
        />
        <group
          position={[6.679, 4.719, 23.501]}
          rotation={[-3.019, 0.404, -3.136]}
          scale={[0.333, 0.333, 0.158]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.bialy}
          />
        </group>
      </group>

      {/** Grass */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane163.geometry}
        material={materials["wystajaca trawa"]}
        position={[1.561, 4.608, 38.369]}
        rotation={[1.42, 0, 0]}
        scale={0.182}
      />

      {/** Trees */}
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.trawa}
          position={[11.118, 20.143, 14.739]}
          rotation={[0.209, 0.691, 2.584]}
          scale={[4.082, 3.032, 3.955]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pien002.geometry}
          material={materials.Tree}
          position={[11.575, 11.677, 15.184]}
          rotation={[0, -0.509, 0]}
        />
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.trawa}
          position={[-10.582, 22.33, 19.077]}
          rotation={[2.978, -0.21, -0.458]}
          scale={[4.64, 3.446, 4.496]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pien003.geometry}
          material={materials.Tree}
          position={[-11.303, 12.706, 18.386]}
          rotation={[-Math.PI, 0.998, -Math.PI]}
          scale={1.137}
        />
      </group>

      {/** Pinecones */}
      <group
        position={[-83.914, 81.312, -83.108]}
        scale={[4.292, 2.878, 4.292]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-85.496, 79.574, -44.815]}
        rotation={[0.143, 0, 0]}
        scale={[3.926, 2.632, 3.926]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-90.858, 79.157, -50.303]}
        rotation={[0, 0, -0.013]}
        scale={[2.748, 1.843, 2.748]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-78.543, 80.151, -54.028]}
        scale={[4.292, 2.878, 4.292]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-85.876, 80.619, -70.183]}
        scale={[4.008, 2.687, 4.008]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[-75.127, 79.463, -65.043]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-87.945, 78.281, -60.581]}
        scale={[1.784, 1.196, 1.784]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-23.405, 81.782, -95.651]}
        scale={[4.292, 2.878, 4.292]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-30.967, 80.131, -66.365]}
        scale={[4.292, 2.878, 4.292]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[23.939, 79.574, -58.116]}
        rotation={[0.143, 0, 0]}
        scale={[3.926, 2.632, 3.926]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-35.251, 79.411, -82.693]}
        rotation={[0, 0, -0.013]}
        scale={[2.748, 1.843, 2.748]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-34.949, 80.808, -92.915]}
        scale={[4.008, 2.687, 4.008]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[-19.833, 78.845, -81.942]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[-27.8, 78.182, -76.698]} scale={[1.784, 1.196, 1.784]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-30.244, 77.904, -55.467]}
        rotation={[0, 0, -0.013]}
        scale={[2.748, 1.843, 2.748]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group
        position={[-19.194, 76.992, -60.425]}
        scale={[1.784, 1.196, 1.784]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[25.207, 81.115, -94.844]} scale={[4.292, 2.878, 4.292]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[38.063, 79.463, -83.82]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[20.851, 79.171, -79.282]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[35.742, 80.667, -69.363]} scale={[4.292, 2.878, 4.292]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[36.505, 76.789, -55.044]} scale={[1.784, 1.196, 1.784]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[21.959, 78.255, -70.439]} scale={[1.784, 1.196, 1.784]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[78.929, 80.397, -52.307]} scale={[4.292, 2.878, 4.292]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[89.399, 78.784, -87.182]} scale={[1.784, 1.196, 1.784]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[80.311, 79.628, -83.663]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[88.604, 79.605, -71.928]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[79.242, 80.794, -67.642]} scale={[4.292, 2.878, 4.292]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[82.984, 78.655, -59.642]} scale={[1.784, 1.196, 1.784]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[90.169, 79.553, -55.811]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>
      <group position={[89.386, 78.781, -45.483]} scale={[2.968, 1.99, 2.968]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["wystajaca trawa"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Tree}
        />
      </group>

      {/** Gold ores */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere041.geometry}
        material={materials.yellow}
        position={[-5.879, 4.287, -54.206]}
        rotation={[0, -0.098, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere042.geometry}
        material={materials.yellow}
        position={[-2.802, 4.072, -52.952]}
        rotation={[Math.PI, -1.245, Math.PI]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere043.geometry}
        material={materials.yellow}
        position={[-5.605, 4.265, -56.309]}
        rotation={[0, -0.486, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere044.geometry}
        material={materials.yellow}
        position={[10.532, 4.152, -54.536]}
        rotation={[0, 0.364, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere045.geometry}
        material={materials.yellow}
        position={[8.992, 4.18, -57.073]}
        rotation={[Math.PI, -0.404, Math.PI]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere046.geometry}
        material={materials.yellow}
        position={[0.356, 4.089, -52.721]}
        rotation={[-Math.PI, 0.698, -Math.PI]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere047.geometry}
        material={materials.yellow}
        position={[6.797, 4.232, -52.041]}
        rotation={[0, -0.461, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere048.geometry}
        material={materials.yellow}
        position={[-0.865, 4.116, -50.847]}
        rotation={[0, -0.461, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere049.geometry}
        material={materials.yellow}
        position={[-4.389, 4.131, -50.327]}
        rotation={[0, -0.029, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere050.geometry}
        material={materials.yellow}
        position={[10.396, 4.176, -50.365]}
        rotation={[Math.PI, -1.191, Math.PI]}
        scale={0.164}
      />
    </group>
  );
};

useGLTF.preload("/waterfall.glb");
