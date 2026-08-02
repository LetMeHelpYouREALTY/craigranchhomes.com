import type { FaqItem } from '@/lib/hyperlocal-faqs';

type AeoFaqSectionProps = {
  title?: string;
  subtitle?: string;
  faqs: ReadonlyArray<FaqItem>;
  id?: string;
};

/**
 * Server-rendered FAQ for AEO. Uses native details/summary so answers
 * are in the HTML for crawlers and answer engines without client JS.
 */
export default function AeoFaqSection({
  title = 'Craig Ranch real estate FAQs',
  subtitle = 'Direct answers for buyers and sellers researching Craig Ranch, North Las Vegas.',
  faqs,
  id = 'craig-ranch-faqs',
}: AeoFaqSectionProps) {
  return (
    <section id={id} className='py-14 bg-[#F7F9FC]'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-3'>{title}</h2>
          <p className='text-lg text-gray-600'>{subtitle}</p>
        </div>
        <div className='space-y-3'>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className='group rounded-lg border border-gray-200 bg-white px-5 py-2'
            >
              <summary className='cursor-pointer list-none py-3 font-semibold text-[#0A2540] marker:content-none flex items-center justify-between gap-4'>
                <span>{faq.question}</span>
                <span className='text-[#3A8DDE] text-xl leading-none group-open:rotate-45 transition-transform'>
                  +
                </span>
              </summary>
              <p className='pb-4 text-gray-600 leading-relaxed'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
