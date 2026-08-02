export const dynamic = 'force-dynamic';

/**
 * humans.txt — who builds and stands behind this site (E-E-A-T signal).
 */
export async function GET() {
  const content = `/* TEAM */
Agent: Dr. Jan Duffy
Role: REALTOR®
Brokerage: Berkshire Hathaway HomeServices Nevada Properties
License: Nevada S.0197614.LLC
Site: https://www.craigranchhomes.com
Contact: DrDuffy@CraigRanchHomes.com
Phone: (702) 820-5408
Location: 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032

/* SITE */
Brand: Craig Ranch Homes
Standards: Next.js App Router, Schema.org JSON-LD, Core Web Vitals
Focus: Craig Ranch hyperlocal real estate (ZIP 89031)
Last update: 2026-08-02
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
