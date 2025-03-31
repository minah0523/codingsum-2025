"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { href: "/about", label1: "회사소개", label2: "About" },
  { href: "/build", label1: "신규개발", label2: "Build" },
  { href: "/develop", label1: "외주개발", label2: "Develop" },
  { href: "/promote", label1: "홍보마케팅", label2: "Promote" },
  { href: "/educate", label1: "교육지원", label2: "Educate" },
  { href: "/contact", label1: "문의하기", label2: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold tracking-tight">
          <Link href="/">CODINGSUM</Link>
        </div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ href, label1, label2 }) => (
            <Link
              key={href}
              href={href}
              className="relative group font-medium min-w-fit"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-[110%]">
                {label1}
              </span>
              <span className="absolute left-0 top-0 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label2}
              </span>
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden bg-black px-4 pb-4 space-y-3">
          {navItems.map(({ href, label1 }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-gray-700 hover:text-blue-400 transition"
            >
              {label1}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
