import type { Metadata } from 'next';
import MainHeader from '@/components/header/main-header';

import './globals.css';
import './components.css';

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
      <body>
        <MainHeader />
        <main className='mt-20 flex-1 pb-8'>{children}</main>
        <footer className='mt-auto border-t border-t-slate-200 py-10'>
          <div className='container mx-auto'>
            <p className='text-center text-sm text-slate-500'>
              &copy; {new Date().getFullYear()} Zoltán Völcsey. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
