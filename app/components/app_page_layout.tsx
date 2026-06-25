import Image from 'next/image';

type AppPageLayoutProps = {
  icon: string;
  title: string;
  subtitle: string;
  appStoreId?: string;
  googlePlayId?: string;
  termsUrl: string;
  privacyUrl: string;
  contact?: string;
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
  contact,
  children,
}: AppPageLayoutProps) {
  const appStoreUrl = appStoreId ? `https://apps.apple.com/app/id${appStoreId}` : null;

  const googlePlayUrl = googlePlayId
    ? `https://play.google.com/store/apps/details?id=${googlePlayId}`
    : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-8 text-center">
      {/* アイコン */}
      <Image src={icon} alt={title} width={256} height={256} className="mx-auto" />

      {/* タイトル */}
      <h1 className="text-3xl font-black text-zinc-800 dark:text-zinc-100">{title}</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>

      {/* ダウンロードバッジ */}
      <div className="mt-8 flex justify-center gap-4">
        {appStoreUrl && (
          <a href={appStoreUrl} target="_blank">
            <Image
              src="/badges/appstore.svg"
              alt="App Store"
              height={40}
              width={120}
              style={{ width: 'auto' }}
            />
          </a>
        )}

        {googlePlayUrl && (
          <a href={googlePlayUrl} target="_blank">
            <Image src="/badges/googleplay.svg" alt="Google Play" height={40} width={135} />
          </a>
        )}
      </div>

      {/* アプリ固有のコンテンツ */}
      {children && <section className="my-12 text-left">{children}</section>}

      {/* 利用規約 & プライバシーポリシー & お問い合わせ */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <a
          href={termsUrl}
          className="rounded-md bg-zinc-200 px-6 py-3 text-base font-bold text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          利用規約（Terms of Service）
        </a>

        <a
          href={privacyUrl}
          className="rounded-md bg-zinc-200 px-6 py-3 text-base font-bold text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          プライバシーポリシー（Privacy Policy）
        </a>

        {contact && (
          <a
            href={contact}
            className="rounded-md bg-zinc-200 px-6 py-3 text-base font-bold text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            お問い合わせ（Contact）
          </a>
        )}
      </div>
    </main>
  );
}
