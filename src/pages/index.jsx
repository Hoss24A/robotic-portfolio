import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';import { useFrame } from '@react-three/fiber';

function RobotArm() {
  const armRef = useRef();
  useFrame(({ mouse }) => {
    armRef.current.rotation.y = mouse.x * 0.5;
    armRef.current.rotation.x = mouse.y * 0.2;
  });
  return <mesh ref={armRef}>{/* ... */}</mesh>;
}

export default function Home() {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* 3D Background */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <RobotArm /> {/* We'll create this later */}
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 text-white p-12">
        <h1 className="text-6xl font-mono">HELLO, I'M [YOUR NAME]</h1>
        <p className="text-xl mt-4 font-mono">// ROBOTIC ENGINEER & CREATIVE CODER</p>
      </div>
    </div>

    
  );
}

<button 
  className="mt-8 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-mono"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'yourname_resume.pdf';
    link.click();
  }}
>
  DOWNLOAD RESUME (PDF)
</button>