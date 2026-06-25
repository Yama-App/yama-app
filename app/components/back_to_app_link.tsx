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
      className="mb-8 inline-flex items-center gap-3 rounded-full bg-zinc-100 px-4 py-2 text-lg font-bold text-zinc-700 transition hover:-translate-x-1 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
    >
      <span className="text-xl">←</span>
      <Image src={`/app_icons/${app}.svg`} alt="" width={24} height={24} className="rounded-md" />
      <span>{text}</span>
    </Link>
  );
}
