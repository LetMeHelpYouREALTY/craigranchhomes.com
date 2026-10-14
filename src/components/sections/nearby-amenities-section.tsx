import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import AmenityMapLazy from '@/components/sections/amenity-map-lazy';
import { SITE_NAP } from '@/lib/site-nap';

type NearbyAmenitiesSectionProps = {
  /** e.g. "Life Near Craig Ranch" */
  title?: string;
  compactMap?: boolean;
  className?: string;
};

export default function NearbyAmenitiesSection({
  title = `What's Nearby in ${SITE_NAP.communityName}`,
  compactMap = true,
  className = '',
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={`py-16 bg-[#F7F9FC] ${className}`}
      aria-labelledby='nearby-amenities-heading'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
            <MapPin className='h-8 w-8 text-[#3A8DDE]' aria-hidden />
          </div>
          <h2
            id='nearby-amenities-heading'
            className='text-3xl font-bold text-[#0A2540] mb-4'
          >
            {title}
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Explore restaurants, groceries, parks, schools, and healthcare around{' '}
            {SITE_NAP.communityName} in {SITE_NAP.city}. Filter the map, then
            dive into our full amenities guide.
          </p>
        </div>

        <AmenityMapLazy compact={compactMap} showStaticList={false} />

        <div className='mt-8 text-center'>
          <Button
            asChild
            className='bg-[#0B7A5A] hover:bg-[#096B4E] text-white'
          >
            <Link href='/amenities#amenity-map'>
              Nearby Amenities Guide
              <ArrowRight className='ml-2 h-4 w-4' aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
