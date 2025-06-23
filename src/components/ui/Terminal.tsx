'use client';
import { TypeAnimation } from 'react-type-animation';

export default function Terminal() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg max-w-2xl mx-auto">
      <TypeAnimation
        sequence={[
          '> SYSTEM INITIALIZING...',
          1000,
          '> LOADING PORTFOLIO_OS v2.0...',
          1000,
          '> WELCOME, USER. READY TO EXPLORE.',
        ]}
        speed={50}
        style={{ color: '#00ffcc' }}
        repeat={0}
      />
    </div>
  );
}