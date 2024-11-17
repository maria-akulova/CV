import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Roboto } from 'next/font/google';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const roboto = Roboto({
  subsets: ['latin'], // Add subsets as needed
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'], // Specify required weights
});

export const metadata: Metadata = {
  title: 'Maria Akulova',
  description: 'CV',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
