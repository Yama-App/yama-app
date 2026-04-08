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
      {/* 特徴 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">patapata について</h2>

        <p className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong>patapata は、鳥さんとの毎日をやさしく残せる日記アプリです。</strong>
          鳥さんと暮らす人のために作られた、ふだんの小さな出来事をそっと記録できる場所。
          むずかしい操作はなく、写真やメモを “ちょっと残しておこう” という気持ちで使えます。
        </p>

        {/* アクセントライン */}
        <div className="mb-4 border-l-4 border-emerald-300 pl-4 dark:border-emerald-500">
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            たとえば、こんな記録にぴったりです。
          </p>
        </div>

        <ul className="mb-6 ml-4 list-disc space-y-1 text-zinc-700 dark:text-zinc-300">
          <li>今日のようす</li>
          <li>ごはんの時間</li>
          <li>体重の記録</li>
          <li>かわいい写真</li>
          <li>その日の気持ち</li>
        </ul>

        <p className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
          こうした “鳥さんとの生活のリズム” を、やさしいデザインの中で自然に残せます。
          写真は日記の中にふわっと添えられ、あとから見返すと、
          その日の空気まで思い出せるようなつくりになっています。
        </p>

        {/* アクセントライン（色を変えてリズムをつくる） */}
        <div className="mb-4 border-l-4 border-sky-300 pl-4 dark:border-sky-500">
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            あなたの大切な記録を守るために、バックアップ機能も用意しています。
            安心して長く使えるように、丁寧に作られたアプリです。
          </p>
        </div>

        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong>「鳥さんとの毎日を、そっと大切に残したい」</strong>
          ——そんな人のための、やさしい日記アプリです。
        </p>
      </section>
    </AppPageLayout>
  );
}
