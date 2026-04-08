import Image from 'next/image';

type AppPageLayoutProps = {
  icon: string;
  title: string;
  subtitle: string;
  appStoreId?: string; // ← URL ではなく ID
  googlePlayId?: string; // ← URL ではなく ID
  termsUrl: string;
  privacyUrl: string;
  children?: React.ReactNode;
};

export function AppPageLayout({
  icon,
  title,
  subtitle,
  appStoreId,
  googlePlayId,
  termsUrl,
  privacyUrl,
  children,
}: AppPageLayoutProps) {
  const appStoreUrl = appStoreId ? `https://apps.apple.com/app/id${appStoreId}` : null;

  const googlePlayUrl = googlePlayId
    ? `https://play.google.com/store/apps/details?id=${googlePlayId}`
    : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-4 text-center">
      {/* アイコン */}
      <Image src={icon} alt={title} width={128} height={128} className="mx-auto" />

      {/* タイトル */}
      <h1 className="text-foreground text-2xl font-semibold">{title}</h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>

      {/* ダウンロードバッジ */}
      <div className="mt-8 flex justify-center gap-4">
        {appStoreUrl && (
          <a href={appStoreUrl} target="_blank">
            <Image src="/badges/appstore.svg" alt="App Store" width={120} height={40} />
          </a>
        )}

        {googlePlayUrl && (
          <a href={googlePlayUrl} target="_blank">
            <Image src="/badges/googleplay.svg" alt="Google Play" width={135} height={40} />
          </a>
        )}
      </div>

      {/* アプリ固有のコンテンツ */}
      {children && <section className="my-12 text-left">{children}</section>}

      {/* 利用規約 & プライバシーポリシー */}
      <div className="flex flex-col items-center gap-3">
        <a
          href={termsUrl}
          className="rounded-md bg-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
        >
          利用規約
        </a>

        <a
          href={privacyUrl}
          className="rounded-md bg-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
        >
          プライバシーポリシー
        </a>
      </div>
    </main>
  );
}
