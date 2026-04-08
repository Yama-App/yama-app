import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sheetmaker -マークシート作成アプリ-',
  description: '150問・記述式対応の受験や試験のためのマークシート作成アプリ',
};

export default function SheetmakerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
