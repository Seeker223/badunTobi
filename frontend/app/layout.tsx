import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Badun Oluwatobi - DevOps, AI & Fullstack Developer',
  description: 'Portfolio website for Badun Oluwatobi.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
