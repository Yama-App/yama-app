import Image from 'next/image';

import { AppCard } from '@/app/components/app_card';
import { FaEnvelope, FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <section className="flex flex-col items-center text-center">
        <Image
          src="/yama-app-logo.svg"
          alt="yamaapp logo"
          width={96}
          height={96}
          className="mb-4"
        />

        {/* ← 修正 */}
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Yama</h1>

        <p className="mt-3 max-w-md text-base text-zinc-600 dark:text-zinc-400">
          個人でアプリをつくっている Yama です。
          <br />
          今まで５つのアプリを作りました。
          <br />( 内一つは売却済み )
        </p>

        <div className="mt-4 flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          {/* メール */}
          <a
            href="mailto:chameleonjapanapp@gmail.com"
            className="transition hover:text-zinc-700 dark:hover:text-zinc-200"
            aria-label="メールを送る"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>

          {/* X */}
          <a
            href="https://x.com/yama250tr"
            className="transition hover:text-zinc-700 dark:hover:text-zinc-200"
            aria-label="X のプロフィールへ"
          >
            <FaXTwitter className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mt-12 flex flex-col items-center text-center">
        <Image src="/qchan.svg" alt="きゅーちゃん" width={64} height={64} className="mb-2" />

        {/* ← 修正 */}
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">きゅーちゃん</h2>

        <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
          うちで暮らしているセキセイインコです。
          <br />
          うちで育てた小松菜が大好きです。
        </p>

        <a
          href="/q-chan"
          className="mt-4 inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          きゅーちゃんの部屋
        </a>
      </section>

      <section className="mt-16">
        {/* ← 修正 */}
        <h2 className="mb-6 text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          アプリ一覧
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <AppCard
            icon="/app_icons/patapata.svg"
            title="patapata"
            href="apps/patapata"
            subtitle="鳥さん専用記録アプリ"
            description="鳥さんとの毎日を、そっと見守りながら支えてくれるアプリです。健康管理や放鳥タイマーなど、鳥さんのための機能をやさしくまとめました。"
          />

          <AppCard
            icon="/app_icons/duely.svg"
            title="duely"
            href="apps/duely"
            subtitle="無限投票SNS"
            description="「1人1票」という常識を超えて、好きなだけ投票できる新しい SNS です。熱量がそのまま票数に反映され、少数派でも勝つことができるアプリです。"
          />

          <AppCard
            icon="/app_icons/sheetmaker.svg"
            title="sheetmaker"
            href="apps/sheetmaker"
            subtitle="マークシート作成アプリ"
            description="資格試験や受験勉強に使える、かんたんマークシート作成アプリです。記述式や問題文にも対応しており、様々な形式に対応しています。"
          />

          <AppCard
            icon="/app_icons/teamey.svg"
            title="teamey"
            href="apps/teamey"
            subtitle="座席表・グループ分けアプリ"
            description="飲み会や席替えなどのグループ分け・座席表作成アプリです。完成したものはテキストや画像などの形式で簡単に共有することができます。"
          />
        </div>
      </section>
    </main>
  );
}
