import { Suspense } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import { Button } from '@/components/ui/button';
import AeoAnswerBlock from '@/components/sections/aeo-answer-block';
import AeoFaqSection from '@/components/sections/aeo-faq-section';
import HyperlocalNapCta from '@/components/sections/hyperlocal-nap-cta';
import HyperlocalRelatedLinks from '@/components/sections/hyperlocal-related-links';
import RealtorServicesGrid from '@/components/sections/realtor-services-grid';
import type { FaqItem } from '@/lib/hyperlocal-faqs';
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateHowToSchema,
  generateSpeakableSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { SITE_NAP, SITE_URL } from '@/lib/site-nap';

export type HyperlocalSection = {
  heading: string;
  body: string;
  bullets?: ReadonlyArray<string>;
};

export type HowToStep = {
  name: string;
  text: string;
};

export type HyperlocalLandingProps = {
  path: string;
  h1: string;
  intro: string;
  directAnswer: {
    question: string;
    answer: string;
    bullets?: ReadonlyArray<string>;
  };
  sections: ReadonlyArray<HyperlocalSection>;
  faqs: ReadonlyArray<FaqItem>;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  schemaId: string;
  howTo?: {
    name: string;
    description: string;
    steps: ReadonlyArray<HowToStep>;
  };
};

export default function HyperlocalLanding({
  path,
  h1,
  intro,
  directAnswer,
  sections,
  faqs,
  primaryCta = { href: '/homes', label: 'Browse Craig Ranch Homes' },
  secondaryCta = {
    href: '/home-valuation-craig-ranch',
    label: 'Get a Home Valuation',
  },
  schemaId,
  howTo,
}: HyperlocalLandingProps) {
  const pageUrl = `${SITE_URL}${path}`;

  const schemaGraph = [
    generateWebPageSchema({
      name: h1,
      description: intro,
      url: pageUrl,
      breadcrumb: [
        { name: 'Home', url: SITE_URL },
        { name: h1, url: pageUrl },
      ],
    }),
    generateBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: h1, url: pageUrl },
    ]),
    generateFAQPageSchema(faqs),
    generateSpeakableSchema({ url: pageUrl, name: h1 }),
    ...(howTo
      ? [
          generateHowToSchema({
            name: howTo.name,
            description: howTo.description,
            steps: howTo.steps,
          }),
        ]
      : []),
  ];

  return (
    <PageLayout>
      <div>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-sm uppercase tracking-wide text-blue-100 mb-3'>
            {SITE_NAP.communityName} · North Las Vegas · {SITE_NAP.communityZip}
          </p>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 max-w-4xl'>{h1}</h1>
          <p className='text-xl text-gray-200 max-w-3xl'>{intro}</p>
          <div className='mt-8 flex flex-col sm:flex-row gap-3'>
            <Button asChild className='bg-white text-[#0A2540] hover:bg-gray-100'>
              <a href={SITE_NAP.phoneHref}>Call {SITE_NAP.phoneDisplay}</a>
            </Button>
            <Button
              asChild
              variant='outline'
              className='border-white text-white hover:bg-white/10'
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              className='border-white text-white hover:bg-white/10'
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
          <p className='mt-6 text-sm text-blue-100'>
            {SITE_NAP.addressLine} · License #{SITE_NAP.license}
          </p>
        </div>
      </div>

      <AeoAnswerBlock
        question={directAnswer.question}
        answer={directAnswer.answer}
        bullets={directAnswer.bullets}
      />
      </div>

      {sections.map((section) => (
        <section
          key={section.heading}
          className='py-12 bg-white border-t border-gray-100'
        >
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              {section.heading}
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-4'>
              {section.body}
            </p>
            {section.bullets && section.bullets.length > 0 ? (
              <ul className='space-y-2 text-gray-700 list-disc pl-5'>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <RealtorServicesGrid />
      <AeoFaqSection title={`${SITE_NAP.communityName} FAQs`} faqs={faqs} />
      <HyperlocalNapCta />
      <HyperlocalRelatedLinks excludeHref={path} />

      <section className='py-12 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
            Visit our North Las Vegas office
          </h2>
          <p className='text-gray-600 mb-6'>
            {SITE_NAP.addressLine} · {SITE_NAP.hoursLine}
          </p>
          <Suspense fallback={<MapSkeleton />}>
            <GoogleMap />
          </Suspense>
        </div>
      </section>

      <Script
        id={schemaId}
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph),
        }}
      />
    </PageLayout>
  );
}
