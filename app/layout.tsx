import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from './components/header';
import { Footer } from './components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yamaapp.net'),
  title: 'Yama@個人開発',
  description:
    'Yama が個人開発しているアプリを紹介するサイトです。セキセイインコのきゅーちゃんもいます。',
  openGraph: {
    title: 'Yama@個人開発',
    description:
      'Yama が個人開発しているアプリを紹介するサイトです。セキセイインコのきゅーちゃんもいます。',
    url: 'https://yamaapp.net',
    siteName: 'Yama@個人開発',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/ogp/opengraph-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yama@個人開発',
    description:
      'Yama が個人開発しているアプリを紹介するサイトです。セキセイインコのきゅーちゃんもいます。',
    images: {
      url: '/ogp/opengraph-image.png',
      type: 'image/png',
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
