import Link from 'next/link';

const SERVICES = [
  {
    title: 'Buyer representation',
    body: 'Craig Ranch offer strategy, inspection negotiation, and RealScout alerts for ZIP 89031.',
    href: '/buy-craig-ranch-homes',
  },
  {
    title: 'Listing & selling',
    body: 'Pricing, prep, and marketing built for Craig Ranch comps and buyer demand.',
    href: '/sell-craig-ranch',
  },
  {
    title: 'Home valuation',
    body: 'Address-level range using local sales, days on market, and active competition.',
    href: '/home-valuation-craig-ranch',
  },
  {
    title: 'Relocation & PCS',
    body: 'Remote tours for out-of-area and Nellis AFB moves into North Las Vegas.',
    href: '/relocate-to-craig-ranch-north-las-vegas',
  },
] as const;

type RealtorServicesGridProps = {
  title?: string;
  subtitle?: string;
};

export default function RealtorServicesGrid({
  title = 'Craig Ranch REALTOR® services',
  subtitle = 'Hyperlocal help for buyers and sellers in Craig Ranch, North Las Vegas.',
}: RealtorServicesGridProps) {
  return (
    <section className='py-14 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 max-w-3xl'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-3'>{title}</h2>
          <p className='text-lg text-gray-600'>{subtitle}</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className='group block border border-gray-200 p-6 rounded-lg hover:border-[#3A8DDE] transition-colors'
            >
              <h3 className='text-lg font-semibold text-[#0A2540] mb-2 group-hover:text-[#3A8DDE]'>
                {service.title}
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{service.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
