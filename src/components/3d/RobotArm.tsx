'use client';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function RobotArm() {
  const { scene } = useGLTF('/models/robot_arm.glb');
  
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={scene} scale={0.5} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}