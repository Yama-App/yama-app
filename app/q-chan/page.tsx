import Image from 'next/image';

export default function QChanPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <section className="mx-auto max-w-2xl text-center">
        {/* きゅーちゃんのメインヘッダー */}
        <div className="flex flex-col items-center">
          <Image src="/qchan.svg" alt="きゅーちゃん" width={128} height={128} className="mb-3" />

          <h1 className="text-foreground text-xl font-semibold">きゅーちゃんの部屋</h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            うちで暮らしているセキセイインコのきゅーちゃんを紹介します。
          </p>
        </div>

        {/* プロフィールカード */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
          <h2 className="text-foreground mb-5 text-center text-xl font-semibold">プロフィール</h2>

          <div className="flex flex-col items-center">
            {/* プロフィール内容 */}
            <ul className="space-y-3 text-left text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-semibold">年齢：</span>
                多分1歳半くらい
              </li>

              <li>
                <span className="font-semibold">お迎え日：</span>
                2025/08/29 (金)
              </li>

              <li>
                <span className="font-semibold">好きなもの：</span>
                家で育てている小松菜
              </li>

              <li>
                <span className="font-semibold">最近の様子：</span>
                手や肩に乗るようになった
              </li>
            </ul>
          </div>
        </div>
        {/* ベストショットカード */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
          <h2 className="text-foreground mb-5 text-center text-xl font-semibold">
            📸 ベストショット
          </h2>

          <div className="flex h-40 justify-center">
            <Image
              src="/qchan/qchan_photo.jpg"
              alt="きゅーちゃんのベストショット"
              width={1535}
              height={1067}
              className="h-40 w-auto rounded-xl shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
