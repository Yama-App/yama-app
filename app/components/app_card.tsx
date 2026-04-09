'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type AppCardProps = {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
};

export function AppCard({ icon, title, description, subtitle, href }: AppCardProps) {
  const [showBadges, setShowBadges] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">
      {/* タイトル・アイコン・サブタイトル */}
      <Link href={href} className="block">
        <div className="flex cursor-pointer flex-col gap-1">
          <div className="flex items-center gap-3">
            <Image src={icon} alt={`${title} icon`} width={32} height={32} />
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
          </div>

          {subtitle && (
            <p className="ml-[44px] text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          )}
        </div>
      </Link>

      {/* 説明文 */}
      <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{description}</p>

      {/* ダウンロードボタン */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowBadges(!showBadges)}
          className="rounded-md bg-zinc-200 px-3 py-1 text-sm text-zinc-700 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          {showBadges ? '閉じる' : 'ダウンロード'}
        </button>
      </div>

      {/* バッジ表示 */}
      {showBadges && (
        <div className="animate-fadeIn mt-8 flex justify-center gap-4 px-4">
          <Image src="/badges/appstore.svg" alt="App Store" width={120} height={40} />
          <Image src="/badges/googleplay.svg" alt="Google Play" width={135} height={40} />
        </div>
      )}
    </div>
  );
}
