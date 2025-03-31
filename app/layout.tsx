import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "코딩섬 | 신뢰를 설계하는 웹 개발 스튜디오",
  description:
    "템플릿이 아닌 맞춤형 개발! UI/UX, 디자인, 보안까지 완성도 높은 웹사이트를 제작하는 코딩섬입니다.",
  keywords:
    "웹사이트 제작, 개발자, 웹 개발, 프론트엔드, 맞춤형 웹, 반응형 웹, UI/UX, Next.js, React, Tailwind CSS, 코딩섬",
  authors: [{ name: "코딩섬" }],
  creator: "코딩섬",
  publisher: "코딩섬",
  openGraph: {
    type: "website",
    url: "https://www.codingsum.com",
    title: "코딩섬 | 신뢰를 설계하는 웹 개발 스튜디오",
    description:
      "템플릿이 아닌 맞춤형 개발! UI/UX, 디자인, 보안까지 완성도 높은 웹사이트를 제작하는 코딩섬입니다.",
    siteName: "코딩섬",
    images: [
      {
        url: "https://www.codingsum.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "코딩섬 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codingsum",
    title: "코딩섬",
    description: "신뢰와 기술로 완성하는 웹사이트. 코딩섬과 함께하세요.",
    images: ["https://www.codingsum.com/og-image.jpg"],
  },
  other: {
    "naver-site-verification": 'c9b9ef036b09d1f52cd868761d0ae41ac1eb9e5f"',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
