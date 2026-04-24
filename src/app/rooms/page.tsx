import type { Metadata } from "next";
import RoomsClient from "./RoomsClient";

const SITE_URL = "https://pierre.hsweb.pics";
const TITLE = "객실 안내 — A타입 풀빌라 원룸 / B타입 블랙&화이트 복층";
const DESCRIPTION =
  "PIERRE 피에르 풀빌라의 객실 안내. A타입 원룸형 풀빌라(기준 2인, 350,000원~ 오픈행사) 및 B타입 블랙&화이트 복층 객실의 상세 시설, 편의시설, 추가요금 안내.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/rooms" },
  keywords: [
    "피에르 객실",
    "피에르 풀빌라 A타입",
    "피에르 풀빌라 B타입",
    "용인 풀빌라 객실",
    "프라이빗 풀빌라 원룸",
    "블랙 화이트 복층 풀빌라",
    "사계절 온수풀 객실",
  ],
  openGraph: {
    type: "website",
    url: `${SITE_URL}/rooms`,
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/photos/a/main.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/photos/a/main.jpg`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "객실 안내",
      item: `${SITE_URL}/rooms`,
    },
  ],
};

export default function RoomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <RoomsClient />
    </>
  );
}
