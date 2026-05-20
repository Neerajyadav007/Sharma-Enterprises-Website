import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sharma Enterprises - Premium Healthcare Imaging Solutions',
  description: 'Professional medical printer installation, diagnostic imaging film supply, technical support, and imaging equipment solutions for hospitals and diagnostic centers.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-background text-foreground">
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
