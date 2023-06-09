"use client";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

type GLTFResult = GLTF & {
  nodes: {
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
  };
  materials: {
    ibm_3278: THREE.MeshStandardMaterial;
    display: THREE.MeshStandardMaterial;
    ibm_3278_keyboard: THREE.MeshStandardMaterial;
  };
};

function Model() {
  const { nodes, materials } = useGLTF("/ibm.gltf") as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.set(
        Math.cos(t / 4) / 12,
        0,
        0.15 + Math.sin(t / 3) / 12
      );
      ref.current.position.y = (0.5 + Math.cos(t / 2)) / 1;
    }
  });

  return (
    <group ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.ibm_3278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.display}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.ibm_3278_keyboard}
      />
    </group>
  );
}

// Change this to a named function after Next.js fixes issue 47704
// (see https://github.com/vercel/next.js/issues/47704)
const IBM3DModel = () => {
  return (
    <Canvas camera={{ position: [25, 25, -25], fov: 25 }}>
      <OrbitControls enableZoom={false} />
      <Stage
        intensity={0.5}
        environment="city"
        shadows={{ type: "accumulative", bias: -0.001 }}
        adjustCamera={false}
      >
        <Model />
      </Stage>
    </Canvas>
  );
};

export default IBM3DModel;
