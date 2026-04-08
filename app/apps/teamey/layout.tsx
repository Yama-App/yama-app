import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'teamey -グループ分け・座席表作成アプリ-',
  description: '飲み会や席替えなどの、グループ分けや座席表を作成するためのアプリ',
};

export default function TeameyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
