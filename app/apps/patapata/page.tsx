import { AppPageLayout } from '@/app/components/app_page_layout';

export default function PatapataPage() {
  return (
    <AppPageLayout
      icon="/app_icons/patapata.svg"
      title="patapata"
      subtitle="鳥さん専用記録アプリ"
      googlePlayId="net.yamaapp.patapata"
      appStoreId="6761470449"
      termsUrl="/apps/patapata/terms"
      privacyUrl="/apps/patapata/privacy"
    >
      <section className="mb-10">
        {/* 見出し */}
        <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          patapata について
        </h2>

        {/* 導入 */}
        <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          🐦 <strong>patapata は、鳥さんとの毎日をやさしく残せる日記アプリです。</strong>
          <br />
          鳥さんと暮らす人のために作られた、ふだんの小さな出来事をそっと記録できる場所。
          むずかしい操作はなく、写真やメモを “ちょっと残しておこう” という気持ちで使えます。
        </p>

        {/* 記録例 */}
        <p className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          ✏️ こんな記録にぴったり
        </p>

        <ul className="mb-6 ml-4 list-disc space-y-1.5 text-zinc-700 dark:text-zinc-300">
          <li>今日のようす</li>
          <li>ごはんの時間</li>
          <li>体重の記録</li>
          <li>かわいい写真</li>
          <li>その日の気持ち</li>
        </ul>

        {/* デザインの特徴 */}
        <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          こうした “鳥さんとの生活のリズム” を、やさしいデザインの中で自然に残せます。
          写真は日記の中にふわっと添えられ、あとから見返すと、
          その日の空気まで思い出せるようなつくりになっています。
        </p>

        {/* バックアップ */}
        <p className="mb-6 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          💾 大切な記録を守るために
        </p>

        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
          バックアップ機能を用意しているので、安心して長く使えます。
          鳥さんとの思い出を失わないよう、丁寧に作られたアプリです。
        </p>

        {/* 最後のまとめ */}
        <p className="mt-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong>「鳥さんとの毎日を、そっと大切に残したい」</strong>
          ——そんな人のための、やさしい日記アプリです。
        </p>
      </section>
    </AppPageLayout>
  );
}
