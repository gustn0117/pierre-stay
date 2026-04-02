import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PIERRE | 자연 속 프라이빗 스테이",
    template: "%s | PIERRE",
  },
  description:
    "서울 근교 용인에 자리한 PIERRE는 자연과 휴식이 만나 완성되는 풀빌라 스테이입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
