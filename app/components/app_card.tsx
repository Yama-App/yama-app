'use client';

import Image from 'next/image';
import Link from 'next/link';

type AppCardProps = {
  icon: string;
  title: string;
  subtitle?: string;
  href: string;
  appStoreId?: string;
  googlePlayId?: string;
};

export function AppCard({ icon, title, subtitle, href, appStoreId, googlePlayId }: AppCardProps) {
  const appStoreUrl = appStoreId ? `https://apps.apple.com/app/id${appStoreId}` : null;

  const googlePlayUrl = googlePlayId
    ? `https://play.google.com/store/apps/details?id=${googlePlayId}`
    : null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 dark:hover:shadow-zinc-800/50">
      {/* アイコン中心のヘッダー */}
      <Link href={href} className="block">
        <div className="flex cursor-pointer flex-col items-center gap-4 text-center">
          <Image src={icon} alt={`${title} icon`} width={112} height={112} className="rounded-lg" />
          <h3 className="text-3xl font-black text-zinc-800 dark:text-zinc-100">{title}</h3>

          {subtitle && (
            <p className="text-base font-normal text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          )}
        </div>
      </Link>

      {/* ストアバッジ */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row">
        {appStoreUrl && (
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition active:scale-95"
          >
            <Image
              src="/badges/appstore.svg"
              alt="App Store"
              height={40}
              width={100}
              style={{ width: 'auto' }}
            />
          </a>
        )}

        {googlePlayUrl && (
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition active:scale-95"
          >
            <Image
              src="/badges/googleplay.svg"
              alt="Google Play"
              height={40}
              width={110}
              style={{ width: 'auto' }}
            />
          </a>
        )}
      </div>
    </div>
  );
}
