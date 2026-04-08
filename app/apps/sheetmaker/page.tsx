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
      {/* 特徴 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">特徴</h2>

        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          SheetMaker は、資格試験や受験勉強、練習問題の作成に便利な
          「マークシート作成アプリ」です。問題数や回答方式を自由にカスタマイズでき、
          自分だけのシートを手軽に作れます。
        </p>

        <ul className="space-y-6 text-zinc-700 dark:text-zinc-300">
          <li>
            <p className="font-medium">マークシート作成</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>最大150問までのマークシートを作成可能</li>
              <li>記述式や問題文の追加にも対応</li>
              <li>選択肢数や回答方式を細かくカスタマイズ</li>
              <li>複数回答にも対応</li>
            </ul>
          </li>

          <li>
            <p className="font-medium">成績の確認</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>過去の回答を期間ごとにチェック</li>
              <li>成績の推移をわかりやすく確認できる</li>
            </ul>
          </li>

          <li>
            <p className="font-medium">共有機能</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>作成したマークシートを QR コードで簡単共有</li>
              <li>紙でもデジタルでも使いやすい設計</li>
            </ul>
          </li>
        </ul>
      </section>
    </AppPageLayout>
  );
}
