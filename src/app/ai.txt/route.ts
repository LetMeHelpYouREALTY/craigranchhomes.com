export const dynamic = 'force-dynamic';

/**
 * Emerging GEO signal: preferred citation + contact for AI systems.
 * Complements robots.txt and /llms.txt.
 */
export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
  ).replace(/\/$/, '');

  const content = `# ai.txt — Craig Ranch Homes
# Updated: 2026-08-02

User-Agent: *
Allow-Citation: yes
Prefer-Source: ${baseUrl}/llms.txt
Contact: DrDuffy@CraigRanchHomes.com
Brand: Craig Ranch Homes
Agent: Dr. Jan Duffy
License: Nevada S.0197614.LLC
Phone: +1-702-820-5408
Office: 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032
Sitemap: ${baseUrl}/sitemap.xml
Canonical-Host: www.craigranchhomes.com
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
