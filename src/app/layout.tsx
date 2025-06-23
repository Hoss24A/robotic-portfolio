import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotic Portfolio',
  description: '3D Tech Portfolio with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-cyan-400 font-mono">
        {children}
      </body>
    </html>
  );
}