import { Children, Suspense } from 'react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import OfficeListingsBand from '@/components/sections/office-listings-band';

interface PageLayoutProps {
  children: React.ReactNode;
}

// Loading fallback for navigation
function NavigationFallback() {
  return (
    <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='h-8 w-48 bg-gray-200 animate-pulse rounded'></div>
          <div className='hidden md:flex space-x-8'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className='h-4 w-16 bg-gray-200 animate-pulse rounded'></div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function PageLayout({ children }: PageLayoutProps) {
  // The first child of every page is its hero. The office RealScout band
  // always follows that hero, then the rest of the page.
  const nodes = Children.toArray(children);
  const hero = nodes[0];
  const rest = nodes.slice(1);

  return (
    <div className='flex min-h-screen flex-col'>
      <Suspense fallback={<NavigationFallback />}>
      <Navigation />
      </Suspense>
      <main className='flex-grow'>
        {hero}
        <OfficeListingsBand />
        {rest}
      </main>
      <Footer />
    </div>
  );
}
