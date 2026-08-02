import Image from 'next/image';
import Link from 'next/link';

type LocalSpotlight = {
  name: string;
  description: string;
  detail: string;
  image: string;
  alt: string;
};

const spotlights: LocalSpotlight[] = [
  {
    name: 'Craig Ranch Aerial View',
    description: 'Master-planned streets and open space from above',
    detail: 'North Las Vegas 89031',
    image: '/images/craig-ranch/aerial-community.jpg',
    alt: 'Aerial drone view of Craig Ranch homes and streets in North Las Vegas',
  },
  {
    name: 'Craig Ranch Regional Park',
    description: '170-acre park with trails, sports fields, and amphitheater',
    detail: '5 miles of interconnecting trails',
    image: '/images/craig-ranch/aerial-park.jpg',
    alt: 'Aerial view of Craig Ranch Regional Park and surrounding homes',
  },
  {
    name: 'Single-Story Homes',
    description: 'Single-level floor plans in Spanish and Mediterranean styles',
    detail: 'About 1,519–2,638 sq ft',
    image: '/images/craig-ranch/single-story-home.jpg',
    alt: 'Single-story Craig Ranch home with desert landscaping in North Las Vegas',
  },
  {
    name: 'Two-Story Homes',
    description: 'Two-story residences with 2-bay garages',
    detail: 'Up to 5 bedrooms',
    image: '/images/craig-ranch/two-story-home.jpg',
    alt: 'Two-story Craig Ranch home on a residential street in North Las Vegas',
  },
  {
    name: 'Gated Living',
    description: 'Gated entries across Craig Ranch subdivisions',
    detail: 'Century Communities collections',
    image: '/images/craig-ranch/gated-home.jpg',
    alt: 'Gated Craig Ranch community entrance and homes in North Las Vegas',
  },
  {
    name: 'Community Guide',
    description: 'Schools, parks, shopping, and local amenities nearby',
    detail: 'Eva G. Simmons · Findlay · Mojave',
    image: '/images/craig-ranch/community-guide.png',
    alt: 'Craig Ranch community guide highlighting schools, parks, and local amenities',
  },
];

function SpotlightCard({ spotlight }: { spotlight: LocalSpotlight }) {
  return (
    <article className='bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='relative h-52 w-full'>
        <Image
          src={spotlight.image}
          alt={spotlight.alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
          loading='lazy'
        />
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-semibold text-[#0A2540] mb-3'>
          {spotlight.name}
        </h3>
        <p className='text-gray-600 mb-4 leading-relaxed'>
          {spotlight.description}
        </p>
        <p className='text-sm font-medium text-[#16B286] mb-6'>
          {spotlight.detail}
        </p>
        <Link
          href='http://drjanduffy.realscout.com/onboarding'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={false}
          className='w-full bg-[#3A8DDE] text-white py-3 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200 block text-center'
        >
          Browse Craig Ranch Homes
        </Link>
      </div>
    </article>
  );
}

export default function NorthLasVegasNeighborhoods() {
  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Craig Ranch Hyperlocal Photos
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Real Craig Ranch homes, streets, and park views from North Las Vegas
            — not stock or plugin placeholders
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {spotlights.map((spotlight) => (
            <SpotlightCard key={spotlight.name} spotlight={spotlight} />
          ))}
        </div>

        <div className='text-center mt-16'>
          <div className='bg-white p-8 shadow-lg max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-[#0A2540] mb-4'>
              Tour Craig Ranch With Local Photos In Hand
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Compare floor plans, gated collections, and park-proximate streets
              with Dr. Jan Duffy. Call (702) 820-5408 to schedule a showing.
            </p>
            <Link
              href='http://drjanduffy.realscout.com/onboarding'
              target='_blank'
              rel='noopener noreferrer'
              prefetch={false}
              className='bg-[#16B286] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#15A276] transition-colors duration-200 inline-block'
            >
              Start Your Home Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
