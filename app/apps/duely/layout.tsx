import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'duely -無限投票SNS-',
  description: '1人1票の概念を覆す投票型SNS',
};

export default function DuelyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
