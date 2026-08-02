import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_NAP } from '@/lib/site-nap';

type HyperlocalNapCtaProps = {
  heading?: string;
  supporting?: string;
};

export default function HyperlocalNapCta({
  heading = 'Craig Ranch real estate help from a local REALTOR®',
  supporting = 'Call for buyer representation, listing strategy, or a Craig Ranch home valuation in North Las Vegas.',
}: HyperlocalNapCtaProps) {
  return (
    <section className='py-12 bg-[#0A2540] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold mb-3'>{heading}</h2>
            <p className='text-gray-200 mb-6 max-w-xl'>{supporting}</p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <Button
                asChild
                className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
              >
                <a href={SITE_NAP.phoneHref}>Call {SITE_NAP.phoneDisplay}</a>
              </Button>
              <Button
                asChild
                variant='outline'
                className='border-white text-white hover:bg-white/10'
              >
                <Link href='/contact'>Contact Dr. Jan Duffy</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='border-white text-white hover:bg-white/10'
              >
                <a href={SITE_NAP.mapsHref} target='_blank' rel='noopener noreferrer'>
                  Directions
                </a>
              </Button>
            </div>
          </div>
          <div className='rounded-lg bg-white/10 p-6 space-y-2 text-sm md:text-base'>
            <p className='font-semibold text-lg'>{SITE_NAP.name}</p>
            <p>
              <a className='hover:underline' href={SITE_NAP.phoneHref}>
                {SITE_NAP.phoneDisplay}
              </a>
            </p>
            <p>{SITE_NAP.addressLine}</p>
            <p className='text-gray-200'>{SITE_NAP.hoursLine}</p>
            <p>
              <a
                className='underline hover:text-white'
                href={SITE_NAP.reviewsHref}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Google Reviews
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
