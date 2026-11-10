import HyperlocalLanding from '@/components/sections/hyperlocal-landing';
import { NELLIS_FAQS } from '@/lib/hyperlocal-faqs';
import { generateMetadata as genMetadata } from '@/lib/metadata';

export const revalidate = 604800;

export const metadata = genMetadata({
  title:
    'Nellis AFB Relocation to Craig Ranch | Military PCS Home Buying',
  description:
    'PCS to Nellis AFB? Buy or sell near Craig Ranch, North Las Vegas with VA-friendly timelines. Dr. Jan Duffy coordinates showings around your report date. Call (702) 820-5408.',
  keywords:
    'Nellis AFB housing, Craig Ranch military relocation, PCS North Las Vegas, VA loan Craig Ranch realtor',
  path: '/nellis-afb-relocation-craig-ranch',
});

export default function NellisAfbRelocationPage() {
  return (
    <HyperlocalLanding
      path='/nellis-afb-relocation-craig-ranch'
      schemaId='nellis-afb-schema'
      h1='Nellis AFB Relocation: Homes Near Craig Ranch'
      intro='Military buyers and sellers moving near Nellis AFB use Craig Ranch and ZIP 89031 for purchase options with highway access. Dr. Jan Duffy builds a PCS-aware timeline.'
      directAnswer={{
        question: 'Can I buy a Craig Ranch home during a Nellis AFB PCS?',
        answer:
          'Yes. Align pre-approval, tour windows, and closing with your report date and BAH planning. Dr. Jan Duffy works with VA-experienced lenders and structures Craig Ranch offers that stay competitive. Call (702) 820-5408 as soon as orders are in hand.',
        bullets: [
          'Map drive time from specific Craig Ranch streets to your gate',
          'Plan temporary lodging if closing and report dates do not match',
          'Review HOA rules if you may rent the home later',
        ],
      }}
      sections={[
        {
          heading: 'PCS-aware Craig Ranch search',
          body: 'We prioritize listings that fit your bed count, commute, and closing window—not a generic Las Vegas search. When inventory is thin, alerts for Craig Ranch and 89031 keep you ready.',
        },
        {
          heading: 'Selling before you report',
          body: 'If you already own locally, we can list on a timeline that protects your equity while you transition. See the Craig Ranch selling guide for prep and pricing steps.',
        },
      ]}
      faqs={NELLIS_FAQS}
      primaryCta={{ href: '/buy-craig-ranch-homes', label: 'Buyer Representation' }}
      secondaryCta={{ href: '/sell-craig-ranch', label: 'Sell Before PCS' }}
      howTo={{
        name: 'How to buy near Craig Ranch during a Nellis AFB PCS',
        description:
          'PCS-aware steps to purchase in Craig Ranch / ZIP 89031 around your Nellis report date.',
        steps: [
          {
            name: 'Align financing with orders',
            text: 'Get pre-approved (often VA-experienced lenders) as soon as orders are in hand and confirm BAH planning.',
          },
          {
            name: 'Map commute to your gate',
            text: 'Shortlist Craig Ranch streets by drive time to Nellis AFB, bed count, and closing window.',
          },
          {
            name: 'Tour on a PCS calendar',
            text: 'Book showings around temporary lodging and leave days so you can compete without rushing.',
          },
          {
            name: 'Structure a timeline-aware offer',
            text: 'Match contingencies and close date to your report date; plan temporary housing if dates diverge.',
          },
          {
            name: 'Close and settle',
            text: 'Complete inspections, appraisal, and closing with clear next steps—or list your current home if you are selling first.',
          },
        ],
      }}
    />
  );
}
