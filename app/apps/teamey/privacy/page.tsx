import { BackToAppLink } from '@/app/components/back_to_app_link';

export default function TeameyTermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BackToAppLink app="teamey" />
      <h1 className="mb-8 text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
        プライバシーポリシー
      </h1>
      <div className="prose prose-zinc dark:prose-invert max-w-none leading-relaxed">
        <p className="text-base">
          <strong>
            Yama-App（以下，「当方」といいます。）は，本アプリ上で提供するサービス
            （以下，「本サービス」といいます。）におけるユーザーの個人情報の取扱いについて，
            以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
          </strong>
        </p>

        {/* --- 第1条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第1条（個人情報）</h2>
        <p>
          <strong>
            「個人情報」とは，個人情報保護法にいう「個人情報」を指し，
            氏名・生年月日・住所・電話番号・連絡先などにより特定の個人を識別できる情報，
            または容貌・指紋・声紋・保険者番号など単体で個人を識別できる情報（個人識別情報）を指します。
          </strong>
        </p>

        {/* --- 第2条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第2条（個人情報の収集方法）</h2>
        <p>
          <strong>
            当方は，利用登録やお問い合わせ時に氏名・生年月日・住所・電話番号・メールアドレス等を
            お尋ねすることがあります。また，提携先から取引記録や決済情報を取得する場合があります。
            さらに，アプリ利用に伴い，登録情報（ユーザーID・アカウント名・端末固有番号）を収集することがあります。
          </strong>
        </p>

        {/* --- 第3条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第3条（個人情報を収集・利用する目的）</h2>
        <p className="font-medium">当方が個人情報を収集・利用する目的は以下のとおりです。</p>
        <ol className="space-y-1">
          <li>本サービスの提供・運営のため</li>
          <li>お問い合わせ対応（本人確認を含む）</li>
          <li>メンテナンス・重要なお知らせ等の連絡</li>
          <li>不正利用の防止・規約違反ユーザーの特定</li>
          <li>ユーザー自身による登録情報の閲覧・変更・削除のため</li>
          <li>効果的な広告配信のため</li>
          <li>上記に付随する目的</li>
        </ol>

        {/* --- 第4条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第4条（利用目的の変更）</h2>
        <ol className="space-y-1">
          <li>変更前と関連性を有すると合理的に認められる場合に限り，利用目的を変更できます。</li>
          <li>変更後の目的は，当方所定の方法により通知または公表します。</li>
        </ol>

        {/* --- 第5条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第5条（個人情報の第三者提供）</h2>
        <ol className="space-y-2">
          <li>
            <strong>
              当方は，以下の場合を除き，ユーザーの同意なく第三者に個人情報を提供しません。
            </strong>
            <ol className="mt-2 space-y-1">
              <li>生命・身体・財産の保護が必要な場合</li>
              <li>公衆衛生・児童の健全育成のため特に必要な場合</li>
              <li>法令に基づく協力が必要な場合</li>
              <li>事前に第三者提供を公表し，個人情報保護委員会に届出した場合</li>
            </ol>
          </li>

          <li>
            <strong>以下の場合は第三者提供に該当しません。</strong>
            <ol className="mt-2 space-y-1">
              <li>委託先への提供</li>
              <li>事業承継に伴う提供</li>
              <li>共同利用（事前通知済みの場合）</li>
            </ol>
          </li>
        </ol>

        {/* --- 第6条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第6条（個人情報の開示）</h2>
        <ol className="space-y-2">
          <li>
            本人から開示請求があった場合，遅滞なく開示します。ただし以下の場合は開示しません。
            <ol className="mt-2 space-y-1">
              <li>本人または第三者の権利利益を害するおそれがある場合</li>
              <li>当方の業務に著しい支障が生じる場合</li>
              <li>法令に違反する場合</li>
            </ol>
            開示には 1 件あたり 1,000 円の手数料を申し受けます。
          </li>
          <li>履歴情報・特性情報などは原則開示しません。</li>
        </ol>

        {/* --- 第7条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第7条（個人情報の訂正および削除）</h2>
        <ol className="space-y-1">
          <li>ユーザーは訂正・追加・削除を請求できます。</li>
          <li>当方は必要と判断した場合，遅滞なく訂正等を行います。</li>
          <li>訂正等を行った場合・行わない場合は通知します。</li>
        </ol>

        {/* --- 第8条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第8条（個人情報の利用停止等）</h2>
        <ol className="space-y-1">
          <li>利用停止等の請求があった場合，必要な調査を行います。</li>
          <li>必要と判断した場合，遅滞なく利用停止等を行います。</li>
          <li>利用停止等を行った場合・行わない場合は通知します。</li>
          <li>多額の費用等により困難な場合は代替措置を講じます。</li>
        </ol>

        {/* --- 第9条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第9条（プライバシーポリシーの変更）</h2>
        <ol className="space-y-1">
          <li>本ポリシーはユーザーへの通知なく変更できます。</li>
          <li>変更後は本ウェブサイトに掲載した時点で効力を生じます。</li>
        </ol>

        {/* --- 第10条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第10条（アプリ内における広告配信について）</h2>
        <p>
          本サービスでは AdMob(Google Inc.) を利用しています。 AdMob
          により利用情報が自動取得される場合があります。 詳細は以下をご確認ください。
        </p>

        <p>
          <a
            href="https://policies.google.com/technologies/ads?hl=ja"
            target="_blank"
            className="text-blue-600 underline dark:text-blue-400"
          >
            Google 広告に関するポリシー
          </a>
        </p>

        {/* --- 第11条 --- */}
        <h2 className="mt-10 text-xl font-semibold">第11条（児童の安全と CSAE への対応）</h2>
        <p>
          当アプリでは、児童の性的虐待や搾取（CSAE）を厳しく禁止しています。
          以下の行為が確認された場合、コンテンツ削除・アカウント停止・法執行機関への通報など、
          厳正な対応を行います。
        </p>

        <ul className="space-y-1">
          <li>児童を性的に描写・示唆するコンテンツの投稿・共有・送信</li>
          <li>未成年者に対する不適切な接触・やりとり</li>
          <li>CSAM（児童性的虐待コンテンツ）の保存・アップロード・リンク</li>
        </ul>

        <p>
          当方は自動・手動のモデレーションおよびユーザー通報により、
          上記の違反行為に対応します。CSAE に関連するコンテンツが発見された場合、
          日本の関連法令に基づき関係機関と連携します。
        </p>

        <p className="mt-10">以上</p>
      </div>
    </main>
  );
}
