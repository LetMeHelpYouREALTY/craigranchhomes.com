import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { LUXURY_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Luxury Homes in Craig Ranch | North Las Vegas High-End Real Estate',
  description:
    'Tour luxury and upgraded Craig Ranch homes in North Las Vegas. Higher price-band pricing, finishes, and private showings with Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'luxury homes Craig Ranch, luxury real estate North Las Vegas, Craig Ranch estates, high end homes 89031',
  path: '/luxury-homes-craig-ranch-north-las-vegas',
});

export default function LuxuryHomesCraigRanchPage() {
  return (
    <HyperlocalLanding
      path='/luxury-homes-craig-ranch-north-las-vegas'
      schemaId='luxury-craig-ranch-schema'
      h1='Luxury Homes in Craig Ranch, North Las Vegas'
      intro='For upgraded finishes, larger Craig Ranch floor plans, and higher price bands, Dr. Jan Duffy pairs private showings with comps that protect your offer—or your list price.'
      directAnswer={{
        question: 'Where do I find luxury homes in Craig Ranch?',
        answer:
          'Luxury Craig Ranch searches focus on upper price bands, larger square footage, and upgraded interiors within the master-planned community and nearby North Las Vegas streets. Dr. Jan Duffy filters MLS inventory and schedules private tours. Call (702) 820-5408.',
        bullets: [
          'Craig Ranch homes overall range roughly $370K–$1.8M; luxury sits in the upper bands',
          'Compare lot size, remodel quality, and park proximity—not just list price',
          'Out-of-area buyers can start with video tours before traveling',
        ],
      }}
      sections={[
        {
          heading: 'Pricing luxury in a hyperlocal market',
          body: 'High-end Craig Ranch homes need absorption data at the right price band. We watch days on market and list-to-sale ratios so sellers launch competitively and buyers avoid overpaying for upgrades that the comps do not support.',
        },
        {
          heading: 'Discreet showings and remote options',
          body: 'Whether you live locally or are relocating to North Las Vegas, we coordinate private access, share feature sheets, and align closing with your calendar.',
        },
      ]}
      faqs={LUXURY_FAQS}
      primaryCta={{ href: '/homes', label: 'View Craig Ranch Listings' }}
      secondaryCta={{ href: '/sell-craig-ranch', label: 'List a Luxury Home' }}
    />
  );
}
