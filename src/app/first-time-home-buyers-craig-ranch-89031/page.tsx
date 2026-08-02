import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { FIRST_TIME_BUYER_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'First-Time Home Buyers in Craig Ranch 89031 | Dr. Jan Duffy REALTOR®',
  description:
    'First-time buyer guidance for Craig Ranch and North Las Vegas ZIP 89031. Pre-approval, offer strategy, inspections, and closing help from Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'first time home buyer Craig Ranch, 89031 first time buyer, North Las Vegas first home, Craig Ranch REALTOR',
  path: '/first-time-home-buyers-craig-ranch-89031',
});

export default function FirstTimeBuyersCraigRanchPage() {
  return (
    <HyperlocalLanding
      path='/first-time-home-buyers-craig-ranch-89031'
      schemaId='first-time-buyer-schema'
      h1='First-Time Home Buyers in Craig Ranch (89031)'
      intro='Buying your first Craig Ranch home? Dr. Jan Duffy explains financing steps, inspections, and offer timing in plain language—so you close in North Las Vegas with fewer surprises.'
      directAnswer={{
        question: 'How can a first-time buyer purchase in Craig Ranch 89031?',
        answer:
          'Secure a mortgage pre-approval, set a monthly payment target that includes taxes, insurance, and any HOA dues, then tour Craig Ranch homes that match your bed/bath and square-footage needs. Dr. Jan Duffy coordinates the offer, inspection, and closing timeline. Call (702) 820-5408.',
        bullets: [
          'Focus search on Craig Ranch + ZIP 89031 for complete inventory',
          'Budget for earnest money, inspection, and closing costs up front',
          'Use comps so your first offer is competitive without guessing',
        ],
      }}
      sections={[
        {
          heading: 'A simple Craig Ranch buying path',
          body: 'First-time buyers succeed when the process is sequenced: lender letter, search criteria, tour plan, offer, inspection, appraisal, and closing. We keep each step tied to Craig Ranch market pace—recently about 46 average days on market.',
        },
        {
          heading: 'Floor plans that often fit first purchases',
          body: 'Many first-time buyers target homes near the lower-to-mid Craig Ranch size range (about 1,519–2,200+ sq ft) while confirming parking, yard size, and HOA rules. We filter MLS results to those constraints before you spend weekends touring.',
        },
        {
          heading: 'Local office support',
          body: 'Meet at 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032, or start remotely. View Google Reviews and get directions from the contact page, then schedule Craig Ranch showings around your work hours.',
        },
      ]}
      faqs={FIRST_TIME_BUYER_FAQS}
      primaryCta={{ href: '/buy-craig-ranch-homes', label: 'Craig Ranch Buyer Guide' }}
      secondaryCta={{ href: '/homes', label: 'See Homes for Sale' }}
    />
  );
}
