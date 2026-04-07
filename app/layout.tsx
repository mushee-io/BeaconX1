import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beacon X1',
  description: 'Premium DePIN website for Beacon X1 on X1 EcoChain.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
