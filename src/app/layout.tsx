import type { Metadata } from 'next';
import './globals.css';

import StoreProvider from './StoreProvider';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Gushop',
  description: 'store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>
          <Header />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
