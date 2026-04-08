'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-zinc-200 bg-white/70 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3">
        {/* Left: Logo + Title */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/yama-app.svg" alt="yamaapp logo" width={24} height={24} />
          <span className="text-foreground text-sm font-semibold">Yama@個人開発</span>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-3 active:opacity-70"
          aria-label="メニューを開く"
        >
          {open ? (
            <FaXmark className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
          ) : (
            <FaBars className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
          )}
        </button>
      </div>

      {/* Menu */}
      {open && (
        <nav className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
            {/* ▼ 開発したアプリ（サブメニュー付き） */}
            <button
              onClick={() => setAppsOpen(!appsOpen)}
              className="hover:text-foreground flex w-full items-center justify-between"
            >
              <span>開発したアプリ</span>
              <span>{appsOpen ? '▲' : '▼'}</span>
            </button>

            {/* サブメニュー */}
            {appsOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-3">
                {/* patapata */}
                <Link
                  href="/apps/patapata"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image src="/app_icons/patapata.svg" width={20} height={20} alt="patapata" />
                  <span className="font-semibold">patapata -鳥さん専用記録アプリ-</span>
                </Link>

                {/* duely */}
                <Link
                  href="/apps/duely"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image src="/app_icons/duely.svg" width={20} height={20} alt="duely" />
                  <span className="font-semibold">duely -無限投票SNS-</span>
                </Link>

                {/* sheetmaker */}
                <Link
                  href="/apps/sheetmaker"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image src="/app_icons/sheetmaker.svg" width={20} height={20} alt="sheetmaker" />
                  <span className="font-semibold">sheetmaker -マークシート作成-</span>
                </Link>

                {/* teamey */}
                <Link
                  href="/apps/teamey"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image src="/app_icons/teamey.svg" width={20} height={20} alt="teamey" />
                  <span className="font-semibold">teamey -座席表・グループ分け-</span>
                </Link>
              </div>
            )}

            <Link href="/q-chan" onClick={() => setOpen(false)} className="hover:text-foreground">
              きゅーちゃんの部屋
            </Link>

            {/*
            <Link href="/diary" onClick={() => setOpen(false)} className="hover:text-foreground">
              日記
            </Link>*/}
          </div>
        </nav>
      )}
    </header>
  );
}
