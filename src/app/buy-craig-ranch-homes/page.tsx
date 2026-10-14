import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { BUY_CRAIG_RANCH_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Buy Craig Ranch Homes | North Las Vegas 89031 Buyer Agent | Dr. Jan Duffy',
  description:
    'Buy a home in Craig Ranch, North Las Vegas with Dr. Jan Duffy. Buyer representation, RealScout alerts, offer strategy, and comps for ZIP 89031. Call (702) 820-5408. Office: 851 W Lone Mountain Rd, Suite 103.',
  keywords:
    'buy Craig Ranch homes, Craig Ranch buyer agent, homes for sale Craig Ranch, North Las Vegas 89031 real estate, Dr. Jan Duffy',
  path: '/buy-craig-ranch-homes',
});

export default function BuyCraigRanchHomesPage() {
  return (
    <HyperlocalLanding
      path='/buy-craig-ranch-homes'
      schemaId='buy-craig-ranch-schema'
      h1='Buy a Home in Craig Ranch, North Las Vegas'
      intro='Dr. Jan Duffy helps buyers compare Craig Ranch listings by price, square footage, HOA, and commute—then write competitive offers with clear timelines. Call (702) 820-5408.'
      directAnswer={{
        question: 'How do I buy a home in Craig Ranch?',
        answer:
          'Get pre-approved, define your Craig Ranch budget and must-haves, tour homes near Craig Ranch Regional Park and ZIP 89031, then write an offer backed by local comps. Dr. Jan Duffy, REALTOR®, manages showings, negotiations, and closing from the North Las Vegas office at 851 W Lone Mountain Rd, Suite 103.',
        bullets: [
          'Target price bands from about $370K to $1.8M depending on size and upgrades',
          'Confirm school assignment (e.g., Eva G. Simmons, Findlay Middle, Mojave High) per address',
          'Average Craig Ranch days on market recently near 46—move fast on well-priced homes',
        ],
      }}
      sections={[
        {
          heading: 'Craig Ranch buyer representation that stays local',
          body: 'Craig Ranch inventory turns on comps, condition, and park proximity. We pull North Las Vegas sales data, watch new MLS listings daily, and prepare you to compete without overpaying. Every tour ends with a clear next-step recommendation.',
          bullets: [
            'RealScout alerts for Craig Ranch and nearby 89031 streets',
            'Offer packages with financing proof and contingency strategy',
            'Inspection and HOA document review before you remove contingencies',
          ],
        },
        {
          heading: 'What buyers compare inside Craig Ranch',
          body: 'Homes commonly range from about 1,519 to 2,638 sq ft. Buyers weigh single-story vs two-story plans, lot orientation, HOA dues, and drive time to Craig Road shopping and the 170-acre regional park.',
        },
        {
          heading: 'Start your Craig Ranch search today',
          body: 'Browse current homes, request a buyer consult, or call (702) 820-5408. Office hours: open daily 8:00 AM–8:00 PM.',
        },
      ]}
      faqs={BUY_CRAIG_RANCH_FAQS}
      primaryCta={{ href: '/homes', label: 'Browse Craig Ranch Homes' }}
      secondaryCta={{ href: '/contact', label: 'Book a Buyer Consult' }}
      howTo={{
        name: 'How to buy a home in Craig Ranch, North Las Vegas',
        description:
          'Step-by-step process to buy a Craig Ranch home in ZIP 89031 with Dr. Jan Duffy.',
        steps: [
          {
            name: 'Get pre-approved',
            text: 'Confirm your budget and financing before touring Craig Ranch listings.',
          },
          {
            name: 'Define must-haves',
            text: 'Prioritize price, square footage, single- vs two-story, and park proximity.',
          },
          {
            name: 'Tour homes in 89031',
            text: 'View active Craig Ranch listings and compare comps with your agent.',
          },
          {
            name: 'Write a competitive offer',
            text: 'Use local sales data, inspection strategy, and clear timelines.',
          },
          {
            name: 'Close with confidence',
            text: 'Complete disclosures, HOA review, and closing from the North Las Vegas office.',
          },
        ],
      }}
    />
  );
}
