import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import Breadcrumbs from '@/components/sections/breadcrumbs';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Script from 'next/script';
import {
  generateMetadata as genMetadata,
  generateFAQPageSchema,
  generateSpeakableSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { CRAIG_RANCH_LONGFORM_PARAGRAPHS } from '@/lib/craig-ranch-longform';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

export const revalidate = 2592000; // monthly

export const metadata = genMetadata({
  title: 'Craig Ranch Schools | Schools Near Craig Ranch (North Las Vegas)',
  description:
    'Schools near Craig Ranch, North Las Vegas: named campuses (Eva G. Simmons Elementary, Findlay Middle, Mojave High), how to verify zoning, and how commute times affect your home search. Call (702) 820-5408.',
  keywords:
    'Craig Ranch schools, schools near Craig Ranch, Craig Ranch North Las Vegas schools, Craig Ranch homes school district, Dr. Jan Duffy REALTOR',
  path: '/craig-ranch-schools',
});

export default function CraigRanchSchoolsPage() {
  const nap = {
    name: 'Craig Ranch Homes',
    phoneDisplay: '(702) 820-5408',
    phoneHref: 'tel:7028205408',
    addressLine: '851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032',
    hoursLine: 'Open daily 8:00 AM–8:00 PM',
    mapsHref:
      'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+Suite+103+North+Las+Vegas+NV+89032',
    reviewsHref:
      'https://share.google/b7iar6aMhBb9ayPkF',
  } as const;

  const faqs = [
    {
      question: 'Do schools affect Craig Ranch home values?',
      answer:
        'Buyer demand near named campuses can affect list activity and days on market. In Craig Ranch, compare square footage, amenities, park access, and verified school boundaries together—not school labels alone.',
    },
    {
      question: 'Where can I verify school zoning for Craig Ranch?',
      answer:
        'School boundaries can change. Confirm current zoning with Clark County School District resources and the campus office. We can help shortlist homes near Eva G. Simmons Elementary, Findlay Middle, or Mojave High, but official sources make the final call.',
    },
    {
      question: 'What should buyers prioritize when weighing schools near Craig Ranch?',
      answer:
        'Define commute minutes, program needs, after-school logistics, floor-plan layout, and park access. Then match Craig Ranch listings to those facts and re-check zoning before you write an offer.',
    },
    {
      question: 'Are there private school options near Craig Ranch?',
      answer:
        'Yes—private campuses serve parts of North Las Vegas and the broader Las Vegas Valley. Fit depends on grade level, program, and drive time from the specific Craig Ranch address you are considering.',
    },
    {
      question: 'Can you help me buy a Craig Ranch home near a named campus?',
      answer:
        'Yes. We can filter Craig Ranch inventory by drive time to Eva G. Simmons Elementary, Findlay Middle, or Mojave High, set alerts, and keep verification of current boundaries on every serious contender.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Neighborhood', href: '/neighborhood' },
              { name: 'Schools', href: '/craig-ranch-schools' },
            ]}
            tone='light'
            className='mb-4'
          />
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Schools Guide
          </h1>
          <p id='aeo-direct-answer' className='text-xl text-gray-200 max-w-3xl'>
            Homes in <strong>Craig Ranch</strong> (ZIP 89031) are commonly
            associated with Eva G. Simmons Elementary, Clifford O. Pete Findlay
            Middle School, and Mojave High School—always verify current zoning for
            the exact address. Use commute minutes, square footage, and campus
            programs to shape your search, then call (702) 820-5408 for local comps.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Ask a local REALTOR®</div>
              <a className='mt-2 inline-block text-2xl font-bold text-[#0A2540] hover:underline' href={nap.phoneHref}>
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Get Craig Ranch comps tied to named campuses and drive times.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Quick links</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild variant='outline'>
                  <Link href='/homes'>Craig Ranch Homes for Sale</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/neighborhood'>Craig Ranch Neighborhood Guide</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/contact#contact-form'>Contact Dr. Jan Duffy</Link>
                </Button>
              </div>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Zoning note</div>
              <p className='mt-2 text-sm text-gray-700'>
                Always verify current school zoning and enrollment with Clark County
                School District and the campus office. This guide helps you ask
                better address-level questions while shopping Craig Ranch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context for school searches
          </h2>
          <div className='space-y-4'>
            {CRAIG_RANCH_LONGFORM_PARAGRAPHS.map((p, idx) => (
              <p key={idx} className='text-gray-700 leading-relaxed'>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            How to evaluate schools near Craig Ranch
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Start with measurable priorities
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            When buying in Craig Ranch, define commute minutes, special programs,
            extracurricular schedules, class-size preferences, and after-school
            logistics. Clear criteria make the home search faster and keep decisions
            tied to the address—not marketing labels.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Use multiple data points
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Third-party ratings are one input, not the whole story. Visit campuses,
            talk with administrators, and confirm current program offerings for Eva
            G. Simmons Elementary, Findlay Middle, or Mojave High before you rely on
            any single score.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Balance campuses with property facts
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Craig Ranch buyers also weigh park acreage, trail access, square footage,
            and lot orientation. Match those property facts to verified school
            boundaries so the total package fits your schedule and budget.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            How schools influence a Craig Ranch home search
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Search boundaries and tradeoffs
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            If school preference is a “must,” it narrows inventory. In Craig Ranch,
            that can mean waiting longer, adjusting budget, or being flexible on
            upgrades. We’ll map out the tradeoffs so you can decide which ones are
            worth it.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Timing and competition
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Inventory and showing activity can tighten around school-calendar
            milestones. If you are buying a Craig Ranch home near those dates, plan
            ahead: showing windows, offer readiness, and a short list of must-have
            property facts.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Resale consideration
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Address-level zoning and commute minutes stay relevant at resale. We
            help you document those facts so your Craig Ranch purchase stays
            flexible for the next buyer’s verification process.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Map and Craig Ranch school commute planning
          </h2>
          <div className='grid lg:grid-cols-2 gap-8 items-start'>
            <div className='space-y-3'>
              <p className='text-gray-700 leading-relaxed'>
                Commute patterns matter. When shopping Craig Ranch, we help you
                consider drive times to schools, work, and daily errands. Use the
                map below as a starting point for planning.
              </p>
              <div className='rounded-lg border bg-white p-6'>
                <div className='text-lg font-semibold text-[#0A2540]'>{nap.name}</div>
                <div className='text-gray-700'>{nap.addressLine}</div>
                <a className='mt-2 inline-block font-semibold text-[#3A8DDE] hover:underline' href={nap.phoneHref}>
                  {nap.phoneDisplay}
                </a>
                <div className='mt-2 text-sm text-gray-600'>{nap.hoursLine}</div>
                <div className='mt-4 flex flex-col sm:flex-row gap-3'>
                  <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                    <a href={nap.phoneHref}>Call</a>
                  </Button>
                  <Button asChild variant='outline'>
                    <Link href='/directions'>
                      Directions
                    </Link>
                  </Button>
                  <Button asChild variant='outline'>
                    <Link href={nap.reviewsHref} target='_blank' rel='noopener noreferrer' prefetch={false}>
                      Reviews
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className='relative'>
              <Suspense fallback={<MapSkeleton />}>
                <GoogleMap
                  address='Craig Ranch, North Las Vegas, NV 89031'
                  latitude={36.2831}
                  longitude={-115.1331}
                  zoom={13}
                  height='460px'
                  title='Craig Ranch Location (for school commute planning)'
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section id='craig-ranch-faqs' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch school FAQs
          </h2>
          <div className='space-y-6'>
            {faqs.map((faq) => (
              <div key={faq.question} className='rounded-lg border bg-white p-6'>
                <h3 className='text-lg font-semibold text-[#0A2540] mb-2'>
                  {faq.question}
                </h3>
                <p className='text-gray-700 leading-relaxed'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Want a Craig Ranch home search built for your family?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} to align your Craig Ranch search with school and
            lifestyle priorities.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href={nap.phoneHref}>Call Now</a>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/homes'>View Craig Ranch Homes</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/contact#contact-form'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='craig-ranch-schools-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Craig Ranch Schools | Schools Near Craig Ranch',
              description:
                'Named campuses near Craig Ranch (ZIP 89031), zoning verification steps, and how commute times shape your home search.',
              url: `${baseUrl}/craig-ranch-schools`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Neighborhood', url: `${baseUrl}/neighborhood` },
                {
                  name: 'Craig Ranch Schools',
                  url: `${baseUrl}/craig-ranch-schools`,
                },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Neighborhood', url: `${baseUrl}/neighborhood` },
              {
                name: 'Craig Ranch Schools',
                url: `${baseUrl}/craig-ranch-schools`,
              },
            ]),
            generateSpeakableSchema({
              url: `${baseUrl}/craig-ranch-schools`,
              name: 'Craig Ranch Schools Guide',
            }),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

