import { AppPageLayout } from '@/app/components/app_page_layout';

export default function TeameyPage() {
  return (
    <AppPageLayout
      icon="/app_icons/teamey.svg"
      title="teamey"
      subtitle="座席表・グループ分けアプリ"
      googlePlayId="yama.reiya.teamey"
      appStoreId="6503121116"
      termsUrl="/apps/teamey/terms"
      privacyUrl="/apps/teamey/privacy"
    >
      {/* 特徴 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">特徴</h2>

        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          Teamey は、イベントや飲み会、学校の活動などで使える
          「グループ分け」と「座席表づくり」を手早く、気持ちよく行えるアプリです。
          人数が多い場面でもサッと準備できて、当日の運営がぐっと楽になります。
        </p>

        <ul className="space-y-6 text-zinc-700 dark:text-zinc-300">
          <li>
            <p className="font-medium">グループ分け</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>最大300人までまとめてグループ化</li>
              <li>最大100グループまで柔軟に編成可能</li>
              <li>人数バランスや配分ルールを自由に設定</li>
            </ul>
          </li>

          <li>
            <p className="font-medium">座席表作成</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>最大100席までのレイアウトに対応</li>
              <li>席の位置を直感的に調整できる編集しやすい設計</li>
            </ul>
          </li>

          <li>
            <p className="font-medium">保存と共有</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>作ったグループや座席表をアプリ内に保存</li>
              <li>いつでも呼び出して再利用できるので準備がスムーズ</li>
            </ul>
          </li>
        </ul>
      </section>
    </AppPageLayout>
  );
}
