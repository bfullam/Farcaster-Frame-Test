import type { Metadata } from 'next';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Test Frame',
  description: 'A test frame',
  openGraph: {
    title: 'Test Frame',
    description: 'A test frame',
    images: [`https://framesjs.org/og.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
