import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'patapata -鳥さん専用記録アプリ-',
  description: 'やさしい鳥たちと過ごす日記アプリ',
};

export default function PatapataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
