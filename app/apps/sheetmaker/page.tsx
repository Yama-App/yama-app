import { AppPageLayout } from '@/app/components/app_page_layout';

export default function SheetmakerPage() {
  return (
    <AppPageLayout
      icon="/app_icons/sheetmaker.svg"
      title="sheetmaker"
      subtitle="マークシート作成アプリ"
      googlePlayId="yama.reiya.sheetmaker"
      appStoreId="6602891274"
      termsUrl="/apps/sheetmaker/terms"
      privacyUrl="/apps/sheetmaker/privacy"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          SheetMaker について
        </h2>

        {/* 導入 */}
        <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          📝{' '}
          <strong>SheetMaker は、資格試験や受験勉強に使える「マークシート作成アプリ」です。</strong>
          <br />
          問題数や回答方式を自由にカスタマイズでき、自分だけのシートを手軽に作れます。
        </p>

        {/* マークシート作成 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            ✏️ マークシート作成
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>最大150問までのマークシートを作成可能</li>
            <li>記述式や問題文の追加にも対応</li>
            <li>選択肢数や回答方式を細かくカスタマイズ</li>
            <li>複数回答にも対応</li>
          </ul>
        </div>

        {/* 成績の確認 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            📊 成績の確認
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>過去の回答を期間ごとにチェック</li>
            <li>成績の推移をわかりやすく確認できる</li>
          </ul>
        </div>

        {/* 共有機能 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">🔗 共有機能</p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>作成したマークシートを QR コードで簡単共有</li>
            <li>紙でもデジタルでも使いやすい設計</li>
          </ul>
        </div>

        {/* まとめ */}
        <p className="mt-10 leading-relaxed text-zinc-700 dark:text-zinc-300">
          SheetMaker
          は、勉強や練習問題をもっと自由に、もっと自分らしく進めたい人のためのアプリです。
          <br />
          <strong>必要な形式を、必要なときに、すぐ作れる。</strong>
          そんな “ちょうどいい便利さ” を目指しています。
        </p>
      </section>
    </AppPageLayout>
  );
}
