'use client';

import dynamic from 'next/dynamic';
import MapSkeleton from '@/components/skeletons/map-skeleton';

const AmenityMap = dynamic(() => import('@/components/sections/amenity-map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

type AmenityMapLazyProps = {
  compact?: boolean;
  showStaticList?: boolean;
  className?: string;
};

export default function AmenityMapLazy(props: AmenityMapLazyProps) {
  return <AmenityMap {...props} />;
}
