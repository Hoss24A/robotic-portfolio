import { useGLTF } from '@react-three/drei';

export function RobotArm() {
  const { nodes } = useGLTF('/robot_arm.glb');
  return (
    <group>
      <mesh geometry={nodes.arm.geometry} position={[0, -1, 0]}>
        <meshStandardMaterial color="#00ffcc" wireframe />
      </mesh>
    </group>
  );
}