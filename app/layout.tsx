import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from './components/header';
import { Footer } from './components/footer';

import { M_PLUS_Rounded_1c } from 'next/font/google';

const rounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'], // ← 太さ最大まで使える
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yamaapp.net'),
  title: 'Yama-App',
  description: 'Yama です。あぷりつくってます。セキセイインコのきゅーちゃんもいます。',
  openGraph: {
    title: 'Yama-App',
    description: 'Yama です。あぷりつくってます。セキセイインコのきゅーちゃんもいます。',
    url: 'https://yamaapp.net',
    siteName: 'Yama-App',
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
    title: 'Yama-App',
    description: 'Yama です。あぷりつくってます。セキセイインコのきゅーちゃんもいます。',
    images: {
      url: '/ogp/opengraph-image.png',
      type: 'image/png',
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${rounded.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
