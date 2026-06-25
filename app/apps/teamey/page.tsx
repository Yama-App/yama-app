import { AppPageLayout } from '@/app/components/app_page_layout';

export default function TeameyPage() {
  return (
    <AppPageLayout
      icon="/app_icons/teamey.svg"
      title="Teamey"
      subtitle="座席表・グループ分けアプリ"
      googlePlayId="yama.reiya.teamey_android"
      appStoreId="6503121116"
      termsUrl="/apps/teamey/terms"
      privacyUrl="/apps/teamey/privacy"
      contact="/apps/teamey/contact"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Teamey について
        </h2>

        {/* 導入 */}
        <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          🎉 <strong>Teamey</strong> は、イベント・飲み会・学校行事などで使える
          <strong>「グループ分け」と「座席表づくり」</strong>のアプリです。
          <br />
          大人数でもサッと準備できて、当日の運営がぐっと楽になります。
        </p>

        {/* グループ分け */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            👥 グループ分け
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>
              最大 <strong>300人</strong> まで一括でグループ化
            </li>
            <li>
              最大 <strong>100グループ</strong> まで柔軟に編成可能
            </li>
            <li>人数バランスや配分ルールを自由に設定</li>
          </ul>
        </div>

        {/* 座席表作成 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            🪑 座席表作成
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>
              最大 <strong>100席</strong> までのレイアウトに対応
            </li>
            <li>席の位置をドラッグ感覚で直感的に調整</li>
          </ul>
        </div>

        {/* 保存と共有 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            💾 保存と共有
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>作成したグループや座席表をアプリ内に保存</li>
            <li>いつでも呼び出して再利用できるので準備がスムーズ</li>
          </ul>
        </div>

        {/* まとめ */}
        <p className="mt-10 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong>「大人数の準備をもっと簡単にしたい」</strong>
          そんな思いから生まれたアプリです。
          <br />
          イベントでも学校でも、誰でも迷わず使えるようにシンプルに設計されています。
        </p>
      </section>
    </AppPageLayout>
  );
}
