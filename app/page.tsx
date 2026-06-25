import Image from 'next/image';

import { AppCard } from '@/app/components/app_card';
import { FaEnvelope, FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="mx-auto w-full px-6 py-8">
      {/* プロフィール */}
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/yama-app-logo.svg"
          alt="yamaapp logo"
          width={128}
          height={128}
          className="mb-4"
        />

        <h1 className="text-3xl font-black text-zinc-800 dark:text-zinc-100">Yama</h1>

        <p className="mt-3 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          個人でアプリをつくっている Yama です。
          <br />
          今まで５つのアプリを作りました。
          <br />( 内一つは売却済み )
        </p>

        <div className="mt-4 flex items-center gap-12 text-zinc-500 dark:text-zinc-400">
          <a
            href="mailto:chameleonjapanapp@gmail.com"
            className="transition hover:text-zinc-700 dark:hover:text-zinc-200"
            aria-label="メールを送る"
          >
            <FaEnvelope className="h-8 w-8" />
          </a>

          <a
            href="https://x.com/yama250tr"
            className="transition hover:text-zinc-700 dark:hover:text-zinc-200"
            aria-label="X のプロフィールへ"
          >
            <FaXTwitter className="h-8 w-8" />
          </a>
        </div>
      </section>

      {/* きゅーちゃん */}
      <section className="mx-auto mt-12 flex max-w-3xl flex-col items-center text-center">
        <Image src="/qchan.svg" alt="きゅーちゃん" width={64} height={64} className="mb-2" />

        <h2 className="text-2xl font-black text-zinc-800 dark:text-zinc-100">きゅーちゃん</h2>

        <p className="mt-2 max-w-sm text-lg text-zinc-600 dark:text-zinc-400">
          うちで暮らしているセキセイインコです。
          <br />
          うちで育てた小松菜が大好きです。
        </p>

        <a
          href="/q-chan"
          className="mt-4 inline-block rounded-full bg-zinc-100 px-8 py-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          きゅーちゃんの部屋
        </a>
      </section>

      {/* アプリ一覧（広がる） */}
      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="mb-6 text-center text-3xl font-black text-zinc-800 dark:text-zinc-100">
          つくったアプリ
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AppCard
            icon="/app_icons/patapata.svg"
            title="Patapata"
            href="apps/patapata"
            subtitle="鳥さん専用記録アプリ"
            appStoreId="6761470449"
            googlePlayId="net.yamaapp.patapata"
          />

          <AppCard
            icon="/app_icons/duely.svg"
            title="Duely"
            href="apps/duely"
            subtitle="無限投票SNS"
            appStoreId="6748050757"
            googlePlayId="yama.reiya.duely"
          />

          <AppCard
            icon="/app_icons/sheetmaker.svg"
            title="Sheetmaker"
            href="apps/sheetmaker"
            subtitle="マークシート作成アプリ"
            appStoreId="6602891274"
            googlePlayId="yama.reiya.sheetmaker"
          />

          <AppCard
            icon="/app_icons/teamey.svg"
            title="Teamey"
            href="apps/teamey"
            subtitle="座席表・グループ分けアプリ"
            appStoreId="6503121116"
            googlePlayId="yama.reiya.teamey_android"
          />
        </div>
      </section>
    </main>
  );
}
