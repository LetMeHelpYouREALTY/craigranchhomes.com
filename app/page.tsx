import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import PageCTA from "@/components/sections/PageCTA";
import Link from "next/link";
import Image from "next/image";
import { Phone, Home as HomeIcon, TrendingUp, Shield, Users } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { ctaPhone, nap } from "@/lib/contact";
import { marketStats as stats } from "@/lib/site-config";

export default async function Home() {
  const config = await getPageDomainConfig();

  return (
    <main id="main-content">
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="/Image/hero_bg_1.jpg"
          alt="Las Vegas homes with mountain views"
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
            <a
              href={ctaPhone.href}
              className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-md font-bold hover:bg-blue-50"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              Call {ctaPhone.display}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Dr. Jan Duffy?
            </h2>
            <p className="text-lg text-slate-600">
              Berkshire Hathaway HomeServices Nevada Properties — trusted Las Vegas representation
              with a direct line to your agent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Trusted Brand",
                desc: "Backed by Berkshire Hathaway — unmatched integrity",
              },
              {
                icon: Users,
                title: "50K+ Network",
                desc: "Global referral network for moves to or from any market",
              },
              {
                icon: TrendingUp,
                title: "$127M+ Sold",
                desc: "Proven results across Las Vegas neighborhoods since 2008",
              },
              {
                icon: HomeIcon,
                title: "Full Service",
                desc: "Buying, selling, 55+, luxury, investment — one expert",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">{config.neighborhood} Real Estate Market</h2>
            <p className="text-slate-400">Current data — updated {stats.lastUpdated}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                value: stats.lasVegas.medianPriceFormatted,
                label: "Median Price",
                sub: stats.lasVegas.yearOverYearChange + " YoY",
              },
              { value: String(stats.lasVegas.daysOnMarket), label: "Avg Days on Market", sub: "" },
              {
                value: stats.lasVegas.activeListings.toLocaleString("en-US"),
                label: "Active Listings",
                sub: "",
              },
              {
                value: String(stats.lasVegas.inventoryMonths),
                label: "Months Inventory",
                sub: "",
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
              href="/market-report"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Full Las Vegas Market Report
            </Link>
          </div>
        </div>
      </section>

      <RealScoutListings />
      <WhyChooseUs />
      <ReviewsSection />
      <FAQSection />
      <PageCTA headline={config.ctaHeadline} subheadline={config.ctaSubheadline} />
      <p className="sr-only">
        {nap.name}. {nap.fullAddress}. Call {ctaPhone.display}.
      </p>
    </main>
  );
}
