import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";

import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className}`}>
        {children}
        <Analytics />
        <Toaster position='bottom-center' containerClassName="toaster" toastOptions={{
          success: {
            className: 'toaster-success',
            iconTheme: {
              primary: 'rgb(45 212 191)',
              secondary: 'black',
            },
          },
          error: {
            className: 'toaster-error',
          },
        }} />
      </body>
    </html>
  );
}