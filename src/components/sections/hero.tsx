import Link from 'next/link';

export default function Hero() {
  // Pre-compressed hero assets (see public/hero-craig-ranch*.jpg).
  // Static <img> + preload avoids the /_next/image hop on LCP.
  const mobileSrc = '/hero-craig-ranch-mobile.jpg';
  const desktopSrc = '/hero-craig-ranch.jpg';

  return (
    <section className='relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <div className='absolute inset-0 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]' />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mobileSrc}
          srcSet={`${mobileSrc} 1600w, ${desktopSrc} 1920w`}
          sizes='100vw'
          alt='Craig Ranch neighborhood aerial view in North Las Vegas'
          width={1600}
          height={900}
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>

      {/* Background Overlay - Darkens image for text readability */}
      <div className='absolute inset-0 bg-linear-to-r from-[#0A2540]/85 to-[#0A2540]/55 z-1' />

      {/* Hero Content */}
      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
          <span className='block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'>
            Find Your Dream Home in
          </span>
          <span className='block mt-2 text-[#7DFFC8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'>
            Craig Ranch
          </span>
        </h1>

        <p className='text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
          Browse homes in Craig Ranch, North Las Vegas — park, trails, and
          Century Communities floor plans from 1,519–2,638 sq ft
        </p>

        {/* Hero CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='http://drjanduffy.realscout.com/onboarding'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='bg-[#0B7A5A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#096B4E] transition-colors duration-200 shadow-lg'
          >
            View Available Homes
          </Link>
          <Link
            href='http://drjanduffy.realscout.com/onboarding'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='bg-white text-[#0A2540] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-white'
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
