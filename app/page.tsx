import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import PageCTA from "@/components/sections/PageCTA";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { ctaPhone, nap } from "@/lib/contact";
import { marketStats as stats } from "@/lib/site-config";
import { photos } from "@/lib/media";
import SiteImage from "@/components/shared/SiteImage";

export const metadata = pageMetadata({
  path: "/",
  title: "Craig Ranch Homes for Sale | Dr. Jan Duffy | North Las Vegas",
  description:
    "Buy or sell Craig Ranch homes in North Las Vegas ZIP 89031 with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. 170-acre park, gated streets, live MLS search. Call (702) 222-1964.",
  keywords: [
    "Craig Ranch homes for sale",
    "Craig Ranch North Las Vegas",
    "Craig Ranch realtor",
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices Nevada",
  ],
});

export default async function Home() {
  const config = await getPageDomainConfig();

  return (
    <main id="main-content">
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <SiteImage
          src={photos.homeHero.src}
          alt={photos.homeHero.alt}
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          {config.ctaBadge && (
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              {config.ctaBadge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {config.heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
            {config.heroSubheadline}
          </p>

          <div className="mb-8 flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tabular-nums">500+</span>
              <span>Transactions Closed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Since 2008</span>
              <span>Las Vegas Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tabular-nums">4.9★</span>
              <span>Client Rating</span>
            </div>
          </div>
          <div className="mt-8">
            <CtaActions variant="onDark" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <OfficeProximity path="/" />
          <UniqueInterior path="/" />
          <ExpertQuote path="/" />
      </div>

      <section className="py-16 md:py-20 bg-white" data-home-compare="/">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            What we compare first: Jasmine Ranch, Seabreeze, and the 170-acre park
          </h2>
          <HeadingPhoto path="/" level="h2" photo={photos.aliante} priority />
          <p className="text-lg text-slate-600 mb-8 text-center">
            Same west-valley start at 9406 W Lake Mead Blvd, Suite 100. Craig Ranch is 20–25 minutes
            via US-95 / I-15. We pick two interiors plus the park so you are not averaging ZIP 89031.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">Jasmine Ranch condos</h3>
              <p className="text-slate-600 text-sm">
                Two-bedroom condos with pool and fitness. Published entry band from $415,000 on this
                site.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">Seabreeze larger lots</h3>
              <p className="text-slate-600 text-sm">
                Lots often cited up to about half an acre. Published larger-lot band from $738,700+.
                Not the same clock as a condo row.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">628 W. Craig Road park</h3>
              <p className="text-slate-600 text-sm">
                About 170 acres: fields, 65,000 sq ft skate park, dog parks, courts. Walk a ramada
                before the gate.
              </p>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link
              href="/neighborhoods/craig-ranch"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Open the Craig Ranch community guide
            </Link>
          </p>
          <p className="text-sm text-slate-600 mt-8 mb-6 text-center">
            {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
          </p>
          <CtaActions variant="onLight" />
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              January 2026 Craig Ranch bands — then we apply them to the listing street
            </h2>
            <HeadingPhoto path="/" level="h2" photo={photos.sellers} className="max-w-4xl mx-auto" />
            <p className="text-slate-400">Published ranges — updated {stats.lastUpdated}. Confirm live MLS.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                value: "$415K+",
                label: "Entry band",
                sub: "Condos / smaller plans",
              },
              { value: "$500–$650K", label: "Mid-range band", sub: "" },
              {
                value: "$738K+",
                label: "Larger-lot band",
                sub: "",
              },
              {
                value: "20–25 min",
                label: "From Suite 100",
                sub: "US-95 / I-15",
              },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-1 tabular-nums">{value}</div>
                <div className="text-slate-300 text-sm">{label}</div>
                {sub && <div className="text-green-400 text-xs mt-1 tabular-nums">{sub}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/neighborhoods/craig-ranch"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Craig Ranch streets, park, and campuses
            </Link>
          </div>
        </div>
      </section>

      <RealScoutListings />
      <WhyChooseUs />
      <ReviewsSection />
      <SupportFaqs path="/" />
      <PageCTA headline={config.ctaHeadline} subheadline={config.ctaSubheadline} />
      <p className="sr-only">
        {nap.name}. {nap.fullAddress}. Call {ctaPhone.display}.
      </p>
    </main>
  );
}
