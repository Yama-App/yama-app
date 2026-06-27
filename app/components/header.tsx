'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative z-50 w-full border-b border-zinc-200 bg-white backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900 dark:backdrop-blur-none">
      <div className="mx-auto flex w-full items-center justify-start px-4 py-1">
        {/* Left: Logo + Title */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/yama-app.svg" alt="yamaapp logo" width={32} height={32} />
          <span className="text-base font-black text-zinc-800 dark:text-zinc-100">Yama-App</span>
        </Link>
      </div>
    </header>
  );
}
