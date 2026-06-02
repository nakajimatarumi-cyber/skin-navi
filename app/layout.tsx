import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "SkinNavi | AI肌診断・スキンケア提案",
  description: "10問の質問に答えるだけで、あなたの肌に合ったスキンケアをAIが提案。Qoo10・楽天・Amazonでお得に購入。大阪エステサロンのピーリング予約も。",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SkinNavi",
  },
  openGraph: {
    title: "SkinNavi | AI肌診断・スキンケア提案",
    description: "あなたの肌に本当に合ったスキンケアをAIが提案します",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  themeColor: "#f43f5e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto-sans-jp)]">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
