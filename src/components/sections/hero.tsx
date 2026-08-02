import Link from 'next/link';
import { SITE_NAP } from '@/lib/site-nap';

const AGENT_HEADSHOT = '/images/dr-jan-duffy-headshot.jpg';

const HERO_WEBP_SRCSET =
  '/hero-craig-ranch-480.webp 480w, /hero-craig-ranch-828.webp 828w, /hero-craig-ranch-mobile.webp 1200w, /hero-craig-ranch.webp 1920w';
const HERO_JPG_SRCSET =
  '/hero-craig-ranch-480.jpg 480w, /hero-craig-ranch-828.jpg 828w, /hero-craig-ranch-mobile.jpg 1200w, /hero-craig-ranch.jpg 1920w';

export default function Hero() {
  return (
    <section className='relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 w-full h-full bg-[#0A2540]'>
        <picture>
          <source
            type='image/webp'
            srcSet={HERO_WEBP_SRCSET}
            sizes='100vw'
          />
          <img
            src='/hero-craig-ranch-828.jpg'
            srcSet={HERO_JPG_SRCSET}
            sizes='100vw'
            alt='Craig Ranch neighborhood aerial view in North Las Vegas'
            width={828}
            height={466}
            fetchPriority='high'
            decoding='async'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </picture>
      </div>

      <div className='absolute inset-0 bg-[#0A2540]/70 z-1' />

      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
        <div className='mb-6 flex flex-col items-center animate-fade-in'>
          <img
            src={AGENT_HEADSHOT}
            alt={`${SITE_NAP.agentName}, REALTOR® for Craig Ranch homes in North Las Vegas`}
            width={112}
            height={112}
            loading='lazy'
            decoding='async'
            className='h-24 w-24 md:h-28 md:w-28 rounded-full object-cover object-[center_20%] ring-2 ring-white/85 shadow-[0_8px_24px_rgba(0,0,0,0.35)]'
          />
          <p className='mt-3 text-lg md:text-xl font-semibold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]'>
            {SITE_NAP.agentName}
          </p>
          <p className='text-sm md:text-base text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'>
            REALTOR® · License #{SITE_NAP.license}
          </p>
        </div>

        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight text-white'>
          <span className='block drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'>
            Find Your Dream Home in
          </span>
          <span className='block mt-2 text-[#7DFFC8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'>
            Craig Ranch
          </span>
        </h1>

        <p className='text-xl md:text-2xl mb-4 text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
          Browse homes in Craig Ranch, North Las Vegas — park, trails, and
          Century Communities floor plans from 1,519–2,638 sq ft
        </p>

        <p className='text-sm md:text-base text-white/90 mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'>
          <a href={SITE_NAP.phoneHref} className='underline underline-offset-2'>
            {SITE_NAP.phoneDisplay}
          </a>
          {' · '}
          {SITE_NAP.addressLine}
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/homes'
            className='bg-[#0B7A5A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#096B4E] transition-colors duration-200 shadow-lg'
          >
            View Available Homes
          </Link>
          <Link
            href='/contact'
            className='bg-white text-[#0A2540] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-white'
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
