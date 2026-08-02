import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { SCHOOL_SIMMONS_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Homes Near Eva G. Simmons Elementary | Craig Ranch Real Estate',
  description:
    'Buy or sell homes near Eva G. Simmons Elementary in Craig Ranch / North Las Vegas. Verify attendance by address with Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'homes near Eva G. Simmons Elementary, Craig Ranch elementary school homes, North Las Vegas real estate near Simmons',
  path: '/homes-near-eva-g-simmons-elementary',
});

export default function HomesNearSimmonsPage() {
  return (
    <HyperlocalLanding
      path='/homes-near-eva-g-simmons-elementary'
      schemaId='simmons-homes-schema'
      h1='Homes Near Eva G. Simmons Elementary'
      intro='Searching Craig Ranch homes near Eva G. Simmons Elementary? Dr. Jan Duffy verifies school assignment per MLS address and builds a tour plan around your commute.'
      directAnswer={{
        question: 'How do I find homes near Eva G. Simmons Elementary?',
        answer:
          'Filter Craig Ranch and North Las Vegas listings by map proximity and confirm the assigned elementary school on each property. Boundaries can differ by street, so verification matters before you offer. Call (702) 820-5408 for a Simmons-focused search.',
        bullets: [
          'Always confirm school assignment on the specific address',
          'Compare square footage, HOA, and price—not school slogans',
          'Pair school logistics with park and shopping drive times',
        ],
      }}
      sections={[
        {
          heading: 'Buyer checklist near Simmons',
          body: 'We prepare a short list with bed/bath counts, estimated payment ranges, and notes on lot/parking so you can decide quickly when a matching Craig Ranch home lists.',
        },
        {
          heading: 'Related school pages',
          body: 'Also see homes near Clifford O. Pete Findlay Middle School and Mojave High School, plus the full Craig Ranch schools overview for named campuses serving the community.',
        },
      ]}
      faqs={SCHOOL_SIMMONS_FAQS}
      primaryCta={{ href: '/homes', label: 'Browse Homes for Sale' }}
      secondaryCta={{ href: '/craig-ranch-schools', label: 'Schools Overview' }}
    />
  );
}
