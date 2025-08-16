import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/header/main-header';

export const metadata: Metadata = {
  title: 'Zoltán Völcsey | Full Stack Developer',
  description:
    'Portfolio website for Zoltán Völcsey - Full-stack web developer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground m-0'>
        <MainHeader />
        <main className='pt-20'>{children}</main>
      </body>
    </html>
  );
}
