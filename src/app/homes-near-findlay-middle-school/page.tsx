import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { SCHOOL_FINDLAY_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Homes Near Findlay Middle School | Craig Ranch North Las Vegas',
  description:
    'Craig Ranch homes near Clifford O. Pete Findlay Middle School. Map-based buyer search and address verification with Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'homes near Findlay Middle School, Clifford O Pete Findlay Middle, Craig Ranch middle school homes',
  path: '/homes-near-findlay-middle-school',
});

export default function HomesNearFindlayPage() {
  return (
    <HyperlocalLanding
      path='/homes-near-findlay-middle-school'
      schemaId='findlay-homes-schema'
      h1='Homes Near Clifford O. Pete Findlay Middle School'
      intro='Planning a Craig Ranch purchase near Findlay Middle School? Get MLS alerts, commute-minded tour routes, and offer support from Dr. Jan Duffy.'
      directAnswer={{
        question: 'Are there Craig Ranch homes near Findlay Middle School?',
        answer:
          'Yes—many buyers researching Craig Ranch ask about Clifford O. Pete Findlay Middle School. Confirm attendance boundaries for each address, then compare price per square foot and HOA details. Call (702) 820-5408 to start a Findlay-focused search.',
        bullets: [
          'Cluster showings by drive time to campus',
          'Verify boundaries—do not assume by subdivision name alone',
          'Use comps from the same pocket when writing offers',
        ],
      }}
      sections={[
        {
          heading: 'Tour planning that saves time',
          body: 'We group Craig Ranch showings near Findlay Middle School and Craig Ranch Regional Park so you compare floor plans in one afternoon instead of zigzagging North Las Vegas.',
        },
        {
          heading: 'Connect elementary and high school searches',
          body: 'Buyers often also review Eva G. Simmons Elementary and Mojave High School pages when mapping long-term logistics for a specific street.',
        },
      ]}
      faqs={SCHOOL_FINDLAY_FAQS}
      primaryCta={{ href: '/buy-craig-ranch-homes', label: 'Buyer Services' }}
      secondaryCta={{ href: '/homes', label: 'Current Listings' }}
    />
  );
}
