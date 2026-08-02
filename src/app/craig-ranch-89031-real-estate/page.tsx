import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { ZIP_89031_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Craig Ranch 89031 Real Estate | North Las Vegas ZIP Code Guide',
  description:
    'Craig Ranch real estate in ZIP 89031, North Las Vegas. Market context, buyer/seller services, and NAP-matched contact for Dr. Jan Duffy at (702) 820-5408.',
  keywords:
    'Craig Ranch 89031, 89031 real estate, North Las Vegas 89031 homes, Craig Ranch ZIP code',
  path: '/craig-ranch-89031-real-estate',
});

export default function CraigRanch89031Page() {
  return (
    <HyperlocalLanding
      path='/craig-ranch-89031-real-estate'
      schemaId='zip-89031-schema'
      h1='Craig Ranch Real Estate in ZIP 89031'
      intro='ZIP 89031 is the primary community ZIP for many Craig Ranch addresses in North Las Vegas. Use this guide with MLS search and hyperlocal comps from Dr. Jan Duffy.'
      directAnswer={{
        question: 'Is Craig Ranch in ZIP code 89031?',
        answer:
          'Many Craig Ranch homes are in North Las Vegas ZIP 89031. The Craig Ranch Vegas office for this site is at 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Search both the community name and 89031 for fuller inventory. Call (702) 820-5408.',
        bullets: [
          'Community focus: Craig Ranch master-planned streets',
          'ZIP focus: 89031 for broader North Las Vegas coverage',
          'Office ZIP: 89032 at Lone Mountain Road',
        ],
      }}
      sections={[
        {
          heading: 'How to search 89031 + Craig Ranch together',
          body: 'Portals sometimes label listings by city only. A Craig Ranch REALTOR® filters by subdivision, map polygon, and ZIP so you do not miss homes one street outside a portal’s tag.',
        },
        {
          heading: 'Market numbers to watch in 89031',
          body: 'Track median sale price, days on market, and active inventory for your price band. Pair national headlines with the Craig Ranch market report before you price or offer.',
        },
      ]}
      faqs={ZIP_89031_FAQS}
      primaryCta={{ href: '/homes', label: '89031 / Craig Ranch Homes' }}
      secondaryCta={{
        href: '/craig-ranch-market-report',
        label: 'Local Market Report',
      }}
    />
  );
}
