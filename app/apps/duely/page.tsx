import { AppPageLayout } from '@/app/components/app_page_layout';

export default function DuelyPage() {
  return (
    <AppPageLayout
      icon="/app_icons/duely.svg"
      title="duely"
      subtitle="無限投票SNS"
      googlePlayId="yama.reiya.duely"
      appStoreId="6748050757"
      termsUrl="/apps/duely/terms"
      privacyUrl="/apps/duely/privacy"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Duely（デュエリィ）とは？
        </h2>

        {/* シンプルな導入 */}
        <p className="mb-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
          🔥 <strong>タップで勝敗が決まる、新感覚の2択SNS。</strong>
          <br />
          好きなだけタップできるから、
          <strong>“好きの強さ” がそのまま勝敗に反映</strong>されるのが Duely の魅力です。
        </p>

        {/* デュエル機能 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            ⚔️ デュエル（2択バトル）
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>2択の投稿を作成して勝負できる</li>
            <li>ユーザーは直感でタップして投票</li>
            <li>タップ数が多い方が勝者に</li>
            <li>勝率・ランキングに反映される本格バトル</li>
          </ul>
        </div>

        {/* 誰でも参加できる */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            🌟 誰でも参加できる
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>アカウント作成だけで投稿も投票も自由</li>
            <li>顔出し不要、ネタ系〜真剣系までジャンル自由</li>
            <li>お題対決・アイデア比較など遊び方は無限大</li>
          </ul>
        </div>

        {/* タップ制限 */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            🎯 タップには戦略性あり
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>タップ回数には制限があるので使いどころが重要</li>
            <li>時間経過やデュエル終了でタップが回復</li>
            <li>“ここぞ” の勝負にタップを集中させよう</li>
          </ul>
        </div>

        {/* ランキング */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            🏆 勝率・ランキング・称号
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>投稿ごとに勝敗が記録される</li>
            <li>連勝数やランキングで実力が可視化</li>
            <li>上位ユーザーには称号やバッジが付与</li>
          </ul>
        </div>

        {/* 通知・コメント */}
        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            💬 通知・リアクション・コメント
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>タップやコメントが届くと通知でわかる</li>
            <li>応援や意見交換も楽しめる</li>
            <li>ユーザー同士のコミュニケーションも充実</li>
          </ul>
        </div>

        {/* おすすめ */}
        <div className="mt-10">
          <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            ✨ こんな人におすすめ
          </p>
          <ul className="ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
            <li>シンプルだけど中毒性のあるアプリが好き</li>
            <li>SNSで数字や反応を見るのが好き</li>
            <li>おもしろ投稿でバズりたい</li>
            <li>2択で人の好みを知るのが好き</li>
            <li>ROM専でも楽しみたい</li>
          </ul>
        </div>

        {/* 最後に */}
        <p className="mt-10 leading-relaxed text-zinc-700 dark:text-zinc-300">
          Duely は、「好き」「面白い」「強い」をタップで証明する SNS。
          誰でも投稿者になれて、誰でも審判になれる。
          <strong> “論破” じゃなくて “タップ数” で勝つ。</strong>
          さぁ、君も Duely で勝負しよう🔥
        </p>
      </section>
    </AppPageLayout>
  );
}
