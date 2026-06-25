import { AppPageLayout } from '@/app/components/app_page_layout';

export default function DuelyPage() {
  return (
    <AppPageLayout
      icon="/app_icons/duely.svg"
      title="Duely"
      subtitle="無限投票SNS"
      googlePlayId="yama.reiya.duely"
      appStoreId="6748050757"
      termsUrl="/apps/duely/terms"
      privacyUrl="/apps/duely/privacy"
      contact="/apps/duely/contact"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Duely（デュエリィ）とは？
        </h2>

        {/* 導入 */}
        <p className="mb-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
          🔥 <strong>Duely</strong> は、タップで勝敗が決まる
          <strong>2択バトル形式の SNS</strong> です。
          <br />
          投稿された2択にタップで投票し、タップ数の多い方が勝者になります。
        </p>

        {/* デュエル機能 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            ⚔️ デュエル（2択バトル）
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>2択のデュエル投稿を作成</li>
            <li>ユーザーはタップで投票</li>
            <li>タップ数が多い方が勝者</li>
            <li>勝敗は勝率やランキングに反映</li>
          </ul>
        </div>

        {/* 参加機能 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            🌟 投稿・投票
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>アカウント作成後すぐに投稿・投票が可能</li>
            <li>ジャンルは自由に設定</li>
          </ul>
        </div>

        {/* まとめ */}
        <p className="mt-10 leading-relaxed text-zinc-700 dark:text-zinc-300">
          Duely は、2択の投稿を作成し、タップ数で勝敗を決める SNS です。
          <br />
          <strong>投稿・投票・ランキング・通知などの機能を通じて、2択バトルを楽しめます。</strong>
        </p>
      </section>
    </AppPageLayout>
  );
}
