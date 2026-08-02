import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { SCHOOL_MOJAVE_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Homes Near Mojave High School | Craig Ranch North Las Vegas Real Estate',
  description:
    'Find homes near Mojave High School in North Las Vegas / Craig Ranch. Address-level school verification and buyer representation. Call Dr. Jan Duffy at (702) 820-5408.',
  keywords:
    'homes near Mojave High School, Mojave High Craig Ranch, North Las Vegas high school homes',
  path: '/homes-near-mojave-high-school',
});

export default function HomesNearMojavePage() {
  return (
    <HyperlocalLanding
      path='/homes-near-mojave-high-school'
      schemaId='mojave-homes-schema'
      h1='Homes Near Mojave High School'
      intro='Buying near Mojave High School? Dr. Jan Duffy confirms high school assignment for Craig Ranch and nearby 89031 addresses, then builds a competitive offer plan.'
      directAnswer={{
        question: 'How do I buy a home near Mojave High School?',
        answer:
          'Set a Craig Ranch / North Las Vegas search with map filters around Mojave High School, verify the assigned high school on each listing, and write offers using nearby comps. Call (702) 820-5408 for showing coordination.',
        bullets: [
          'Ask for commute minutes from the specific street to campus',
          'Review HOA and lot details alongside school logistics',
          'Pair with the Craig Ranch market report for pricing context',
        ],
      }}
      sections={[
        {
          heading: 'High school logistics without the hype',
          body: 'We stick to named campuses, drive times, and property facts—square footage, amenities, and comps—so your purchase decision stays Fair Housing–safe and data-led.',
        },
        {
          heading: 'Next steps',
          body: 'Browse homes, request a valuation if you are selling, or contact the office at 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032.',
        },
      ]}
      faqs={SCHOOL_MOJAVE_FAQS}
      primaryCta={{ href: '/homes', label: 'See Homes for Sale' }}
      secondaryCta={{ href: '/contact', label: 'Contact Dr. Jan Duffy' }}
    />
  );
}
