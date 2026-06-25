import { BackToAppLink } from '@/app/components/back_to_app_link';

type AppSupportLayoutProps = {
  app: string;
  title: string;
  termsUrl: string;
  privacyUrl: string;
  email: string;
};

export function AppSupportLayout({
  app,
  title,
  termsUrl,
  privacyUrl,
  email,
}: AppSupportLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <BackToAppLink app={app} />

      {/* タイトル */}
      <h1 className="mt-10 mb-2 text-4xl font-extrabold text-zinc-800 dark:text-zinc-100">
        {title} サポート
      </h1>
      <p className="mb-10 text-lg font-medium text-zinc-500 dark:text-zinc-400">{title} Support</p>
      {/* Support Contact */}
      <section className="mb-16">
        <h2 className="mb-1 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          📩 サポート連絡先
        </h2>
        <p className="mb-4 text-base font-medium text-zinc-500 dark:text-zinc-400">
          Support Contact
        </p>

        {/* メールアドレスを強調 */}
        <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">メール / Email:</p>
        <a
          href={`mailto:${email}`}
          className="mt-2 inline-block text-xl font-bold text-zinc-900 underline decoration-2 underline-offset-4 dark:text-zinc-100"
        >
          {email}
        </a>
      </section>

      {/* Links */}
      <section className="mb-10">
        <h2 className="mb-1 text-2xl font-bold text-zinc-800 dark:text-zinc-100">🔗 関連リンク</h2>
        <p className="mb-4 text-base font-medium text-zinc-500 dark:text-zinc-400">Related Links</p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={termsUrl}
            className="rounded-md bg-zinc-200 px-5 py-3 text-base font-semibold text-zinc-700 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            利用規約 / Terms of Service
          </a>

          <a
            href={privacyUrl}
            className="rounded-md bg-zinc-200 px-5 py-3 text-base font-semibold text-zinc-700 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            プライバシーポリシー / Privacy Policy
          </a>
        </div>
      </section>
    </main>
  );
}
