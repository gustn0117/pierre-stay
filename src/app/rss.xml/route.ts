const SITE_URL = "https://pierre.hsweb.pics";
const SITE_NAME = "PIERRE 피에르 풀빌라";
const SITE_DESCRIPTION =
  "용인 PIERRE 피에르 풀빌라의 소식 — 객실, 이벤트, 공지사항 업데이트 피드.";

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: Date;
}

const items: FeedItem[] = [
  {
    title: "A타입 풀빌라 원룸 오픈행사 (450,000원 → 350,000원)",
    link: `${SITE_URL}/rooms?type=a`,
    description:
      "1층 전용 프라이빗 수영장과 포인트존을 갖춘 원룸형 객실. 기준 2인 기준 1박 35만원 오픈행사 진행 중.",
    pubDate: new Date("2026-04-01T00:00:00+09:00"),
  },
  {
    title: "B타입 블랙&화이트 복층 — 2026년 하반기 오픈 예정",
    link: `${SITE_URL}/rooms?type=b`,
    description:
      "2~3층 복층 구조의 블랙&화이트 컨셉 객실. 기준 4인(최대 8인). 하반기 운영 시작 예정.",
    pubDate: new Date("2026-04-10T00:00:00+09:00"),
  },
];

function escape(xml: string): string {
  return xml
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const lastBuildDate = new Date().toUTCString();

  const itemsXml = items
    .map(
      (item) => `    <item>
      <title>${escape(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escape(item.description)}</description>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escape(SITE_DESCRIPTION)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
