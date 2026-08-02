import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { INVESTMENT_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Craig Ranch Investment Properties | North Las Vegas Rental & Resale',
  description:
    'Analyze Craig Ranch and 89031 investment properties with rent comps, HOA rules, and exit strategy. Investor guidance from Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'Craig Ranch investment properties, North Las Vegas rental homes, 89031 investor real estate, Craig Ranch cash flow',
  path: '/craig-ranch-investment-properties',
});

export default function CraigRanchInvestmentPage() {
  return (
    <HyperlocalLanding
      path='/craig-ranch-investment-properties'
      schemaId='investment-craig-ranch-schema'
      h1='Craig Ranch Investment Properties'
      intro='Investors buying in Craig Ranch need more than a list price—they need HOA rental rules, repair scope, and North Las Vegas rent comps. Dr. Jan Duffy builds that packet before you offer.'
      directAnswer={{
        question: 'Should I buy an investment property in Craig Ranch?',
        answer:
          'Craig Ranch and nearby 89031 homes can work for long-term rental or resale when purchase price, HOA rules, and rent support your return targets. Review lease restrictions and maintenance costs before you write an offer. Call (702) 820-5408 for an investor consult.',
        bullets: [
          'Confirm HOA rental caps and lease minimums early',
          'Stress-test vacancy and repair reserves',
          'Compare exit comps in the same Craig Ranch pocket',
        ],
      }}
      sections={[
        {
          heading: 'Underwriting Craig Ranch deals',
          body: 'We translate MLS data into investor language: price per square foot, rehab range, and likely rent. That keeps North Las Vegas acquisitions grounded in numbers, not hope.',
        },
        {
          heading: 'Portfolio and 1031 timing',
          body: 'If you are exchanging or adding a second Craig Ranch asset, we coordinate closing dates and lender packages so your timeline stays intact.',
        },
      ]}
      faqs={INVESTMENT_FAQS}
      primaryCta={{ href: '/homes', label: 'Browse Potential Properties' }}
      secondaryCta={{ href: '/craig-ranch-market-report', label: 'Market Report' }}
    />
  );
}
