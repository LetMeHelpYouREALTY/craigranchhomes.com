export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
  ).replace(/\/$/, '');
  const content = `# Craig Ranch Homes — Dr. Jan Duffy
> Hyperlocal real estate for Craig Ranch, North Las Vegas (ZIP 89031)

## About
Dr. Jan Duffy is a Nevada-licensed real estate professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. This site focuses on Craig Ranch buyer and seller services in North Las Vegas.
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** 702-820-5408
- **Office:** 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032
- **Community ZIP:** 89031 (Craig Ranch)
- **Website:** ${baseUrl}

## Services
- Buy Craig Ranch homes (buyer representation)
- Sell Craig Ranch homes (listing strategy)
- Home valuation and market analysis
- First-time buyer guidance for 89031
- Luxury and investment property search
- Relocation and Nellis AFB PCS support
- School-proximity home search (named campuses only)

## Coverage Area
Craig Ranch and North Las Vegas 89031, plus nearby Las Vegas / Henderson as needed.

## Named Schools (verify per address)
- Eva G. Simmons Elementary
- Clifford O. Pete Findlay Middle School
- Mojave High School

## Key Pages
- [Home](${baseUrl}/)
- [Homes for Sale](${baseUrl}/homes)
- [Buy Craig Ranch Homes](${baseUrl}/buy-craig-ranch-homes)
- [Sell Craig Ranch](${baseUrl}/sell-craig-ranch)
- [Home Valuation](${baseUrl}/home-valuation-craig-ranch)
- [Craig Ranch REALTOR®](${baseUrl}/craig-ranch-realtor)
- [89031 Real Estate](${baseUrl}/craig-ranch-89031-real-estate)
- [First-Time Buyers](${baseUrl}/first-time-home-buyers-craig-ranch-89031)
- [Luxury Homes](${baseUrl}/luxury-homes-craig-ranch-north-las-vegas)
- [Investment Properties](${baseUrl}/craig-ranch-investment-properties)
- [Relocate to Craig Ranch](${baseUrl}/relocate-to-craig-ranch-north-las-vegas)
- [Nellis AFB Relocation](${baseUrl}/nellis-afb-relocation-craig-ranch)
- [Homes Near Eva G. Simmons](${baseUrl}/homes-near-eva-g-simmons-elementary)
- [Homes Near Findlay Middle](${baseUrl}/homes-near-findlay-middle-school)
- [Homes Near Mojave High](${baseUrl}/homes-near-mojave-high-school)
- [Community](${baseUrl}/community)
- [Neighborhood](${baseUrl}/neighborhood)
- [Market Report](${baseUrl}/craig-ranch-market-report)
- [Contact](${baseUrl}/contact)
- [Sitemap](${baseUrl}/sitemap.xml)

## Contact
- **Call/Text:** 702-820-5408
- **Email:** DrDuffy@CraigRanchHomes.com
- **Website:** ${baseUrl}
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
