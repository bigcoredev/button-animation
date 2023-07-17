import '@/styles/globals.scss';
import Head from 'next/head';

export const metadata = {
  title: 'Beautiful CSS Button animations',
  description: 'Explore Amazing Buttons animation for your next project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={'text-slate-600 bg-white px-5'}>{children}</body>
    </html>
  );
}
