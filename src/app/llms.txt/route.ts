export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
  ).replace(/\/$/, '');
  const content = `# Craig Ranch Homes — Dr. Jan Duffy
> Homes in Craig Ranch, North Las Vegas
## About
Dr. Jan Duffy is a Nevada-licensed real estate professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. With 30+ years of experience serving the Las Vegas area and over $127M in career sales, Dr. Duffy specializes in Craig Ranch and helps buyers and sellers with Nevada real estate.
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** 702-820-5408
- **Office:** 851 W Lone Mountain Rd, North Las Vegas, NV 89032
- **Website:** ${baseUrl}
## Services
- Residential home buying and selling
- Community-specific property expertise
- Relocation services for moving to Nevada
- Home valuation and market analysis
- Investment property guidance
## Coverage Area
Las Vegas, Henderson, North Las Vegas, and surrounding Southern Nevada communities
## Key Pages
- [Home](${baseUrl}/)
- [Homes](${baseUrl}/homes)
- [Contact](${baseUrl}/contact)
- [Community](${baseUrl}/community)
## Contact
- **Call/Text:** 702-820-5408
- **Website:** ${baseUrl}
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
