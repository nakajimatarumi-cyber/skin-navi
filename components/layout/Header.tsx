"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Home, Search, Calendar, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "ホーム" },
  { href: "/diagnosis", icon: Sparkles, label: "診断" },
  { href: "/products", icon: Search, label: "商品" },
  { href: "/favorites", icon: Heart, label: "お気に入り" },
  { href: "/booking", icon: Calendar, label: "予約" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop header */}
      <header className="hidden md:flex sticky top-0 z-50 w-full border-b border-rose-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 max-w-screen-xl mx-auto items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-rose-500" />
            <span className="font-bold text-rose-600 text-lg">SkinNavi</span>
          </Link>
          <nav className="flex items-center gap-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                  pathname === href ? "text-rose-600" : "text-gray-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-rose-100 pb-safe">
        <div className="flex items-center justify-around h-16">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  active ? "text-rose-600" : "text-gray-400"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "fill-rose-100" : ""}`} />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
