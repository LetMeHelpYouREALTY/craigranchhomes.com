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
          'Share your budget and arrival date, tour Craig Ranch homes via video or a focused in-person trip, then write an offer with electronic disclosures. Dr. Jan Duffy coordinates inspections and closing from 851 W Lone Mountain Rd, Suite 103, North Las Vegas. Call (702) 820-5408.',
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
      howTo={{
        name: 'How to relocate and buy in Craig Ranch',
        description:
          'A remote-friendly process for out-of-state buyers purchasing in Craig Ranch, North Las Vegas ZIP 89031.',
        steps: [
          {
            name: 'Share budget and arrival date',
            text: 'Send your pre-approval range, must-haves, and target move-in week so the search matches your timeline.',
          },
          {
            name: 'Tour remotely or in a focused trip',
            text: 'Use video walkthroughs first, then schedule a condensed in-person tour of Craig Ranch shortlist homes.',
          },
          {
            name: 'Verify zoning and HOA per address',
            text: 'Confirm school assignment, HOA dues, and disclosures for each MLS number before you write.',
          },
          {
            name: 'Write and negotiate the offer',
            text: 'Use Craig Ranch comps, contingency strategy, and electronic signatures so distance does not slow you down.',
          },
          {
            name: 'Close and plan move-in',
            text: 'Coordinate inspection, appraisal, and closing from the North Las Vegas office—or remotely—around your travel dates.',
          },
        ],
      }}
    />
  );
}
