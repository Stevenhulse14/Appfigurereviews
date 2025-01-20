"use client";

import { Canvas } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";

export default function ThreeDTitle() {
  return (
    <div className="h-[200px] w-full mb-6">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.2}
            curveSegments={12}
          >
            {`Welcome to\nAppfigures Reviews`}
            <meshStandardMaterial
              color="#f97316"
              metalness={0.5}
              roughness={0.2}
            />
          </Text3D>
        </Center>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
