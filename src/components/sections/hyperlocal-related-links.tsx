import Link from 'next/link';
import {
  HYPERLOCAL_SERVICE_LINKS,
  type HyperlocalLink,
} from '@/lib/site-nap';

type HyperlocalRelatedLinksProps = {
  title?: string;
  subtitle?: string;
  links?: ReadonlyArray<HyperlocalLink>;
  excludeHref?: string;
  limit?: number;
};

export default function HyperlocalRelatedLinks({
  title = 'More Craig Ranch realtor guides',
  subtitle = 'Hyperlocal pages for buyers, sellers, schools, and ZIP 89031.',
  links = HYPERLOCAL_SERVICE_LINKS,
  excludeHref,
  limit = 8,
}: HyperlocalRelatedLinksProps) {
  const items = links
    .filter((link) => link.href !== excludeHref)
    .slice(0, limit);

  return (
    <section className='py-14 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 max-w-3xl'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-3'>{title}</h2>
          <p className='text-lg text-gray-600'>{subtitle}</p>
        </div>
        <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {items.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='block h-full rounded-lg border border-gray-200 p-4 hover:border-[#3A8DDE] transition-colors'
              >
                <span className='font-semibold text-[#0A2540]'>{link.label}</span>
                <span className='mt-1 block text-sm text-gray-600'>
                  {link.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
