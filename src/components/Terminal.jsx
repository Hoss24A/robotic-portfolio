import { TypeAnimation } from 'react-type-animation';

export function Terminal() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg font-mono">
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