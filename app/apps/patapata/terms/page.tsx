export default function PatapataTermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-semibold text-zinc-800 dark:text-zinc-100">利用規約</h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none leading-relaxed">
        <p className="text-base">
          <strong>
            この利用規約（以下，「本規約」といいます。）は，
            Yama-App（以下，「当方」といいます。）がこのアプリ上で提供するサービス
            （以下，「本サービス」といいます。）の利用条件を定めるものです。
            登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，
            本規約に従って本サービスをご利用いただきます。
          </strong>
        </p>

        {/* --- 第1条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第1条（適用）</h2>
        <ol className="space-y-2">
          <li>
            <strong>
              本規約は，ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されます。
            </strong>
          </li>
          <li>
            <strong>
              当方は本サービスに関し，本規約のほか，各種のルール（以下，「個別規定」といいます。）を定めることがあります。
              個別規定は本規約の一部を構成します。
            </strong>
          </li>
          <li>
            <strong>
              本規約と個別規定が矛盾する場合，特段の定めがない限り個別規定が優先されます。
            </strong>
          </li>
        </ol>

        {/* --- 第2条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第2条（利用登録）</h2>
        <ol className="space-y-2">
          <li>
            <strong>登録希望者が本規約に同意し，当方が承認した時点で利用登録が完了します。</strong>
          </li>
          <li>
            <strong>以下の場合，当方は登録を承認しないことがあります。</strong>
            <ol className="mt-2 space-y-1">
              <li>虚偽の申請があった場合</li>
              <li>過去に規約違反があった場合</li>
              <li>その他，当方が不適当と判断した場合</li>
            </ol>
          </li>
        </ol>

        {/* --- 第3条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第3条（ユーザーIDおよびパスワードの管理）</h2>
        <ol className="space-y-2">
          <li>
            <strong>
              ユーザーは自己責任でユーザーID・メールアドレス・パスワードを管理するものとします。
            </strong>
          </li>
          <li>
            <strong>
              第三者への譲渡・貸与は禁止します。登録情報と一致してログインされた場合，
              当方はユーザー本人による利用とみなします。
            </strong>
          </li>
          <li>
            <strong>
              第三者利用による損害について，当方に故意または重大な過失がない限り責任を負いません。
            </strong>
          </li>
        </ol>

        {/* --- 第5条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第4条（禁止事項）</h2>
        <p className="font-medium">ユーザーは以下の行為をしてはなりません。</p>
        <ol className="space-y-1">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>サーバー・ネットワークの破壊や妨害</li>
          <li>サービス運営の妨害</li>
          <li>個人情報の収集・蓄積</li>
          <li>不正アクセス</li>
          <li>なりすまし</li>
          <li>反社会的勢力への利益供与</li>
          <li>知的財産権・プライバシー等の侵害</li>
          <li>不適切な表現の投稿</li>
          <li>営利目的・出会い目的などの不正利用</li>
          <li>宗教活動・勧誘</li>
          <li>その他，当方が不適切と判断する行為</li>
        </ol>

        {/* --- 第6条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第5条（本サービスの提供の停止等）</h2>
        <ol className="space-y-2">
          <li>
            <strong>以下の場合，事前通知なくサービスを停止できます。</strong>
            <ol className="mt-2 space-y-1">
              <li>システム保守</li>
              <li>天災などの不可抗力</li>
              <li>通信回線事故</li>
              <li>その他，当方が困難と判断した場合</li>
            </ol>
          </li>
          <li>
            <strong>停止により生じた損害について当方は責任を負いません。</strong>
          </li>
        </ol>

        {/* --- 第7条〜第16条（省略せず整形） --- */}
        <h2 className="mt-10 text-xl font-semibold">第6条（著作権）</h2>
        <ol className="space-y-1">
          <li>ユーザーは権利を有する情報のみ投稿できます。</li>
          <li>
            投稿物の権利はユーザーに留保されますが，当方はサービス改善等の目的で利用できます。
          </li>
          <li>本サービスに関する著作権は当方または権利者に帰属します。</li>
        </ol>

        <h2 className="mt-10 text-xl font-semibold">第7条（利用制限および登録抹消）</h2>
        <p>当方は以下の場合，利用制限または登録抹消を行うことがあります。</p>
        <ol className="space-y-1">
          <li>規約違反</li>
          <li>虚偽登録</li>
          <li>決済手段の停止</li>
          <li>料金未払い</li>
          <li>連絡不通</li>
          <li>長期間の未利用</li>
          <li>その他不適当と判断した場合</li>
        </ol>

        <h2 className="mt-10 text-xl font-semibold">第8条（退会）</h2>
        <p>ユーザーは当方の定める方法により退会できます。</p>

        <h2 className="mt-10 text-xl font-semibold">第9条（保証の否認および免責事項）</h2>
        <p>当方は本サービスに瑕疵がないことを保証しません。</p>
        <p>当方は損害について原則責任を負いません。</p>

        <h2 className="mt-10 text-xl font-semibold">第10条（サービス内容の変更等）</h2>
        <p>当方は事前告知の上，サービス内容を変更できます。</p>

        <h2 className="mt-10 text-xl font-semibold">第11条（利用規約の変更）</h2>
        <p>当方は合理的な場合，ユーザーの同意なく規約を変更できます。</p>

        <h2 className="mt-10 text-xl font-semibold">第12条（個人情報の取扱い）</h2>
        <p>個人情報は当方のプライバシーポリシーに従って取り扱います。</p>

        <h2 className="mt-10 text-xl font-semibold">第13条（通知または連絡）</h2>
        <p>通知は登録された連絡先に行われ，発信時に到達したものとみなします。</p>

        <h2 className="mt-10 text-xl font-semibold">第14条（権利義務の譲渡の禁止）</h2>
        <p>ユーザーは権利義務を第三者に譲渡できません。</p>

        <h2 className="mt-10 text-xl font-semibold">第15条（準拠法・裁判管轄）</h2>
        <p>日本法を準拠法とし，横浜地方裁判所を専属的合意管轄とします。</p>

        <p className="mt-10">以上</p>
      </div>
    </main>
  );
}
