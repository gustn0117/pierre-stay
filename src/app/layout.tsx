import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://pierre.hsweb.pics";
const SITE_NAME = "PIERRE 풀빌라 스테이";
const DESCRIPTION =
  "용인 PIERRE는 자연과 휴식이 만나 완성되는 프라이빗 풀빌라 스테이입니다. 사계절 온수풀, 포인트존, 블랙&화이트 복층 객실까지. 서울 근교 용인에서 특별한 하루를 시작하세요.";
const OG_IMAGE = `${SITE_URL}/hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PIERRE 피에르 풀빌라 | 용인 프라이빗 스테이",
    template: "%s | PIERRE 피에르 풀빌라",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "피에르",
    "피에르 풀빌라",
    "용인 피에르",
    "용인 풀빌라",
    "용인 프라이빗 풀빌라",
    "서울 근교 풀빌라",
    "프라이빗 풀빌라",
    "풀빌라 스테이",
    "사계절 온수풀",
    "모현읍 풀빌라",
    "에버랜드 근처 숙소",
    "PIERRE",
    "pierre stay",
    "pierre pool villa",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: `${SITE_NAME} 업데이트` }],
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "PIERRE 피에르 풀빌라 | 용인 프라이빗 스테이",
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1393,
        height: 907,
        alt: "PIERRE 풀빌라 — 사계절 온수풀과 포인트존",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIERRE 피에르 풀빌라 | 용인 프라이빗 스테이",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // 네이버 서치어드바이저에서 발급받은 HTML 태그 값을 여기에 채워주세요.
    // 예) other: { "naver-site-verification": "xxxxxxxxxxxxxxxxxxxxxxxxxx" }
    other: {
      "naver-site-verification": "9956e71bed660290deba0761bf2318534be14ffc",
    },
  },
  category: "lodging",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#lodging`,
  name: "PIERRE 피에르 풀빌라",
  alternateName: ["피에르 풀빌라", "용인 피에르", "PIERRE"],
  description: DESCRIPTION,
  url: SITE_URL,
  image: [`${SITE_URL}/hero.jpg`, `${SITE_URL}/photos/intro.jpg`],
  telephone: "+82-10-3542-8138",
  email: "mocacia@naver.com",
  priceRange: "₩350,000–₩500,000",
  currenciesAccepted: "KRW",
  checkinTime: "15:00",
  checkoutTime: "11:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "곡현로 485번길 31-7",
    addressLocality: "용인시 처인구 모현읍",
    addressRegion: "경기도",
    postalCode: "17038",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.3153,
    longitude: 127.2306,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "사계절 온수풀", value: true },
    { "@type": "LocationFeatureSpecification", name: "프라이빗 야외 수영장", value: true },
    { "@type": "LocationFeatureSpecification", name: "야외 테라스", value: true },
    { "@type": "LocationFeatureSpecification", name: "선베드", value: true },
    { "@type": "LocationFeatureSpecification", name: "드레스룸", value: true },
    { "@type": "LocationFeatureSpecification", name: "빔프로젝터", value: true },
    { "@type": "LocationFeatureSpecification", name: "불멍(가습)", value: true },
    { "@type": "LocationFeatureSpecification", name: "LG 스탠바이미", value: true },
  ],
  sameAs: ["https://www.instagram.com/pierre__stay/"],
  containsPlace: [
    {
      "@type": "HotelRoom",
      name: "A타입 — 풀빌라 원룸",
      description:
        "1층 전용 프라이빗 수영장과 포인트존을 갖춘 원룸형 객실. 기준 2인(최대 6인), 82㎡.",
      occupancy: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 6,
      },
      bed: [
        {
          "@type": "BedDetails",
          typeOfBed: "Queen",
          numberOfBeds: 2,
        },
      ],
      floorSize: {
        "@type": "QuantitativeValue",
        value: 82,
        unitCode: "MTK",
      },
    },
    {
      "@type": "HotelRoom",
      name: "B타입 — 블랙&화이트 복층",
      description:
        "2~3층 복층 구조의 블랙&화이트 컨셉 객실. 기준 4인(최대 8인), 각 층 82㎡.",
      occupancy: {
        "@type": "QuantitativeValue",
        minValue: 4,
        maxValue: 8,
      },
      bed: [
        {
          "@type": "BedDetails",
          typeOfBed: "King",
          numberOfBeds: 1,
        },
        {
          "@type": "BedDetails",
          typeOfBed: "Queen",
          numberOfBeds: 2,
        },
      ],
      floorSize: {
        "@type": "QuantitativeValue",
        value: 164,
        unitCode: "MTK",
      },
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/hero.jpg`,
  sameAs: ["https://www.instagram.com/pierre__stay/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-10-3542-8138",
    email: "mocacia@naver.com",
    contactType: "reservations",
    areaServed: "KR",
    availableLanguage: ["Korean"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="alternate" type="application/rss+xml" title={`${SITE_NAME} RSS`} href="/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
