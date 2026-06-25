import { AppPageLayout } from '@/app/components/app_page_layout';

export default function PatapataPage() {
  return (
    <AppPageLayout
      icon="/app_icons/patapata.svg"
      title="Patapata"
      subtitle="鳥さん専用記録アプリ"
      googlePlayId="net.yamaapp.patapata"
      appStoreId="6761470449"
      termsUrl="/apps/patapata/terms"
      privacyUrl="/apps/patapata/privacy"
      contact="/apps/patapata/contact"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          パタパタ について
        </h2>

        {/* 導入 */}
        <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          🐦 <strong>パタパタ</strong> は、愛鳥の体調や生活の記録をまとめて管理できる
          お世話記録アプリです。ごはん、体重、ケージのようす、放鳥時間、おくすり、
          病院など、日々の変化を整理して残せます。多頭飼いにも対応しています。
        </p>

        {/* 主な記録項目 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            📘 主な記録項目
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>ごはん：量・種類・時間を記録</li>
            <li>体重：日々の変化を一覧で確認</li>
            <li>ケージのようす：環境や行動のメモ</li>
            <li>放鳥時間：開始・終了を記録</li>
            <li>おくすり：薬の種類や回数を管理</li>
            <li>病院：診察内容やメモを保存</li>
          </ul>
        </div>

        {/* 放鳥タイマー */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            ⏱️ 放鳥専用タイマー
          </p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            放鳥時間を一定に保つためのタイマーを搭載。通知またはアラームで時間を知らせます。
          </p>
        </div>

        {/* 多頭飼い */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            🐥 多頭飼いに対応
          </p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            複数の鳥を飼育している場合でも、鳥ごとにプロフィールを作成し、記録を分けて管理できます。
          </p>
        </div>

        {/* 写真とメモ */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            📷 写真とメモで変化を見える化
          </p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            写真やメモを添えて記録でき、体調の変化や行動の様子を後から振り返りやすくなります。
          </p>
        </div>

        {/* 過去データ */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            📊 過去のデータを一覧で確認
          </p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            記録した内容は一覧で確認でき、日々の変化や傾向を把握できます。
          </p>
        </div>
      </section>
    </AppPageLayout>
  );
}
