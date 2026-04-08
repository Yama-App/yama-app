import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'きゅーちゃんの部屋',
  description: 'うちで飼っているセキセイインコのキューちゃんお部屋です。',
};

export default function QchanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
