import Image from 'next/image';

export default function QChanPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <section className="mx-auto max-w-2xl text-center">
        {/* きゅーちゃんのメインヘッダー */}
        <div className="flex flex-col items-center">
          <Image
            src="/qchan.svg"
            alt="きゅーちゃん"
            width={140}
            height={140}
            className="mb-4 drop-shadow-sm"
          />

          <h1 className="text-3xl font-black text-zinc-800 dark:text-zinc-100">
            きゅーちゃんの部屋
          </h1>

          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            うちで暮らしているセキセイインコのきゅーちゃんを紹介します。
          </p>
        </div>

        <div className="mt-12 space-y-10 text-center">
          {/* 年齢 */}
          <div>
            <p className="text-xl font-black text-zinc-800 dark:text-zinc-100">🐦 年齢</p>
            <p className="mt-1 text-lg leading-relaxed font-semibold text-zinc-700 dark:text-zinc-300">
              多分1歳半くらいです。
            </p>
            <div className="mt-4 h-px w-full border-t border-dashed border-zinc-400 dark:border-zinc-600"></div>
          </div>

          {/* お迎え日 */}
          <div>
            <p className="text-xl font-black text-zinc-800 dark:text-zinc-100">📅 お迎え日</p>
            <p className="mt-1 text-lg leading-relaxed font-semibold text-zinc-700 dark:text-zinc-300">
              2025年8月29日（金）にうちへ来ました。
            </p>
            <div className="mt-4 h-px w-full border-t border-dashed border-zinc-400 dark:border-zinc-600"></div>
          </div>

          {/* 好きなもの */}
          <div>
            <p className="text-xl font-black text-zinc-800 dark:text-zinc-100">🥬 好きなもの</p>
            <p className="mt-1 text-lg leading-relaxed font-semibold text-zinc-700 dark:text-zinc-300">
              家で育てている小松菜が大好きです。
            </p>
            <div className="mt-4 h-px w-full border-t border-dashed border-zinc-400 dark:border-zinc-600"></div>
          </div>

          {/* 最近の様子 */}
          <div>
            <p className="text-xl font-black text-zinc-800 dark:text-zinc-100">✨ 最近の様子</p>
            <p className="mt-1 text-lg leading-relaxed font-semibold text-zinc-700 dark:text-zinc-300">
              手や肩に乗るようになって、ますます仲良しになりました。
            </p>
            <div className="mt-4 h-px w-full border-t border-dashed border-zinc-400 dark:border-zinc-600"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
