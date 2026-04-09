import Image from 'next/image';
import Link from 'next/link';

type BackToAppLinkProps = {
  app: string;
  label?: string;
};

function formatAppName(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function BackToAppLink({ app, label }: BackToAppLinkProps) {
  const appName = formatAppName(app);
  const text = label ?? `${appName} に戻る`;

  return (
    <Link
      href={`/apps/${app}`}
      className="mb-6 inline-flex items-center gap-2 text-lg text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
    >
      <Image src={`/app_icons/${app}.svg`} alt="" width={20} height={20} />
      <span>← {text}</span>
    </Link>
  );
}
