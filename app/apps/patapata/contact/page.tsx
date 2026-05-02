import { BackToAppLink } from '@/app/components/back_to_app_link';

export default function PatapataContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BackToAppLink app="patapata" />

      {/* 日本語 */}
      <h1 className="mt-8 mb-6 text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
        Patapata サポート
      </h1>

      <p className="mb-6 text-zinc-700 dark:text-zinc-300">
        Patapata（ぱたぱた）は、鳥の健康記録を簡単に管理できるアプリです。
        アプリの使い方や不具合についてのお問い合わせはこちらからご連絡ください。
      </p>

      {/* Support Contact */}
      <section className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          📩 サポート連絡先
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          メール:
          <a
            href="mailto:chameleonjapanapp@gmail.com"
            className="ml-1 font-medium text-blue-600 underline"
          >
            chameleonjapanapp@gmail.com
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          ❓ よくある質問（FAQ）
        </h2>
        <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
          <li className="mb-2">
            <strong>写真が追加できません。</strong>
            <br />
            iOS の設定アプリから「プライバシーとセキュリティ → 写真」で Patapata
            に写真アクセスを許可してください。
          </li>
        </ul>
      </section>

      {/* Links */}
      <section className="mb-16 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          🔗 関連リンク
        </h2>
        <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>
            <a
              href="/apps/patapata/terms"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              利用規約
            </a>
          </li>
          <li>
            <a
              href="/apps/patapata/privacy"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              プライバシーポリシー
            </a>
          </li>
        </ul>
      </section>

      {/* English */}
      <h1 className="mb-6 text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
        Patapata Support
      </h1>

      <p className="mb-6 text-zinc-700 dark:text-zinc-300">
        Patapata is a simple and gentle app for recording your birds’ daily health and care. If you
        have questions about how to use the app or need help with any issues, please contact us.
      </p>

      {/* Support Contact EN */}
      <section className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          📩 Contact
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Email:
          <a
            href="mailto:chameleonjapanapp@gmail.com"
            className="ml-1 font-medium text-blue-600 underline"
          >
            chameleonjapanapp@gmail.com
          </a>
        </p>
      </section>

      {/* FAQ EN */}
      <section className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          ❓ Frequently Asked Questions
        </h2>
        <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
          <li className="mb-2">
            <strong>I can’t add photos.</strong>
            <br />
            Please open the iOS Settings app and allow photo access for Patapata under “Privacy &
            Security → Photos”.
          </li>
        </ul>
      </section>

      {/* Links EN */}
      <section className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          🔗 Related Links
        </h2>
        <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>
            <a
              href="/apps/patapata/terms"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/apps/patapata/privacy"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
