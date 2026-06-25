import { AppPageLayout } from '@/app/components/app_page_layout';

export default function SheetmakerPage() {
  return (
    <AppPageLayout
      icon="/app_icons/sheetmaker.svg"
      title="Sheetmaker"
      subtitle="マークシート作成アプリ"
      googlePlayId="yama.reiya.sheetmaker"
      appStoreId="6602891274"
      termsUrl="/apps/sheetmaker/terms"
      privacyUrl="/apps/sheetmaker/privacy"
      contact="/apps/sheetmaker/contact"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          SheetMaker について
        </h2>

        {/* 導入 */}
        <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          📝 <strong>SheetMaker</strong> は、資格試験や受験勉強で使える
          <strong>「マークシート作成アプリ」</strong>です。
          <br />
          問題数や回答方式を自由に設定し、用途に合わせたシートを作成できます。
        </p>

        {/* マークシート作成 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            ✏️ マークシート作成
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>
              最大 <strong>150問</strong> までのマークシートを作成
            </li>
            <li>記述式や問題文の追加に対応</li>
            <li>選択肢数や回答方式を細かく設定可能</li>
            <li>複数回答形式にも対応</li>
          </ul>
        </div>

        {/* 成績の確認 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            📊 成績の確認
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>過去の回答を期間ごとに確認</li>
            <li>成績の推移を一覧でチェック</li>
          </ul>
        </div>

        {/* 共有機能 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">🔗 共有機能</p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>作成したマークシートを QR コードで共有</li>
            <li>紙・デジタルどちらでも使いやすい形式で出力</li>
          </ul>
        </div>

        {/* まとめ */}
        <p className="mt-10 leading-relaxed text-zinc-700 dark:text-zinc-300">
          SheetMaker は、必要な形式のマークシートを自由に作成し、
          <br />
          <strong>問題演習や模擬試験の準備を効率化できます。</strong>
        </p>
      </section>
    </AppPageLayout>
  );
}
