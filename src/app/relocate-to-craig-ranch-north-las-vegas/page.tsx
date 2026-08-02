import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { RELOCATE_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Relocate to Craig Ranch | North Las Vegas Moving & Home Buying Guide',
  description:
    'Relocating to Craig Ranch, North Las Vegas? Remote tours, school-name verification, and buyer representation with Dr. Jan Duffy. Call (702) 820-5408.',
  keywords:
    'relocate to Craig Ranch, moving to North Las Vegas, Craig Ranch relocation realtor, remote home buying Las Vegas',
  path: '/relocate-to-craig-ranch-north-las-vegas',
});

export default function RelocateCraigRanchPage() {
  return (
    <HyperlocalLanding
      path='/relocate-to-craig-ranch-north-las-vegas'
      schemaId='relocate-craig-ranch-schema'
      h1='Relocate to Craig Ranch, North Las Vegas'
      intro='Moving from out of state? Dr. Jan Duffy runs video tours, verifies school assignments by address, and structures Craig Ranch offers that work with remote closings.'
      directAnswer={{
        question: 'How do I relocate and buy a home in Craig Ranch?',
        answer:
          'Share your budget and arrival date, tour Craig Ranch homes via video or a focused in-person trip, then write an offer with electronic disclosures. Dr. Jan Duffy coordinates inspections and closing from 851 W Lone Mountain Rd, North Las Vegas. Call (702) 820-5408.',
        bullets: [
          'Plan commute windows to work sites and Harry Reid International Airport',
          'Confirm HOA and school assignment for each MLS number',
          'Use temporary housing strategy if your close date and move-in date differ',
        ],
      }}
      sections={[
        {
          heading: 'What relocating buyers like about Craig Ranch',
          body: 'The community offers master-planned streets, access to the 170-acre Craig Ranch Regional Park, and about 5 miles of trails. Homes commonly span roughly 1,519–2,638 sq ft—useful when you are matching furniture and room needs before you arrive.',
        },
        {
          heading: 'Remote-friendly process',
          body: 'We keep document packets organized, schedule inspectors you can trust, and sync with your lender so distance does not slow a competitive Craig Ranch offer.',
        },
      ]}
      faqs={RELOCATE_FAQS}
      primaryCta={{ href: '/buy-craig-ranch-homes', label: 'Start a Buyer Search' }}
      secondaryCta={{
        href: '/nellis-afb-relocation-craig-ranch',
        label: 'Nellis AFB Relocation',
      }}
    />
  );
}
