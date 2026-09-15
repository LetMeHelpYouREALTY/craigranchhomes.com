import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, DollarSign, TrendingUp, Home as HomeIcon, Users } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import NamedCampuses from "@/components/sections/NamedCampuses";
import NeighborhoodCommute from "@/components/sections/NeighborhoodCommute";
import NeighborhoodAmenities from "@/components/sections/NeighborhoodAmenities";
import NeighborhoodLifestyle from "@/components/sections/NeighborhoodLifestyle";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/north-las-vegas",
  title: "Berkshire Hathaway HomeServices North Las Vegas | Affordable Homes",
  description:
    "Find affordable North Las Vegas homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy helps first-time buyers and investors. Median price $385K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices North Las Vegas",
    "North Las Vegas homes for sale",
    "affordable homes Las Vegas",
    "first time home buyer Las Vegas",
    "new construction North Las Vegas",
  ],
});


export default function NorthLasVegasPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices North Las Vegas
            </h1>
            <HeadingPhoto path="/neighborhoods/north-las-vegas" />

            <p className="text-xl text-slate-600">
              Affordable homeownership and investment opportunities. Find your North Las Vegas
              home with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/north-las-vegas" />
          <UniqueInterior path="/neighborhoods/north-las-vegas" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              North Las Vegas Market | January 2026
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$385,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">32 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">892</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+3.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/north-las-vegas" />
              <p>
                <strong>North Las Vegas</strong> has undergone a remarkable transformation over the past
                decade. What was once considered a distant suburb is now a thriving city with new
                master-planned communities, major employers, and infrastructure improvements that make
                it the Las Vegas Valley's best opportunity for affordable homeownership. <strong>Berkshire
                Hathaway HomeServices</strong> is proud to help first-time buyers and investors
                discover North Las Vegas's potential.
              </p>
              <p>
                With a median home price of <strong>$385,000</strong>—roughly $65,000 less than Las Vegas
                and $100,000 less than Henderson—North Las Vegas offers entry to homeownership that's
                increasingly difficult to find elsewhere in Southern Nevada. First-time buyers priced
                out of Summerlin or Henderson find that North Las Vegas delivers modern homes with
                contemporary features at prices they can actually afford. And with Nevada's lack of
                state income tax, more of their income goes toward building equity.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides the same
                expert service in North Las Vegas as we do in the valley's luxury markets. Dr. Jan Duffy
                helps first-time buyers understand the purchase process, navigate financing options, and
                avoid common pitfalls. For new construction—where builders' sales agents represent the
                builder, not you—BHHS provides free buyer representation that can save thousands in
                upgrades and negotiations.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
<div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Most Affordable in the Valley</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas offers the lowest median home prices in the Las Vegas Valley, making
                    homeownership attainable for first-time buyers and investors. Entry-level
                    homes start in the $320,000s, while new construction from quality builders ranges
                    from $380,000 to $550,000—prices that would buy a condo elsewhere.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Rapid Growth & Development</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas is experiencing unprecedented growth with new retail centers, improved
                    roads, and major employers moving to the area. The city's population has grown over
                    30% in the past decade, bringing new amenities, restaurants, and services. This growth
                    trajectory suggests continued appreciation for today's buyers.
                  </p>
                </div>
              </div>

              {/* Major Employers */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Major North Las Vegas Employers</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  North Las Vegas has attracted major employers, creating local jobs and driving housing demand:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 space-y-2">
                    <li><strong>Amazon:</strong> Multiple fulfillment centers employing 5,000+</li>
                    <li><strong>Fanatics:</strong> Sports merchandise distribution (~3,000 jobs)</li>
                    <li><strong>Sephora:</strong> Major distribution center</li>
                    <li><strong>Chewy:</strong> Pet supply distribution center</li>
                  </ul>
                  <ul className="text-slate-600 space-y-2">
                    <li><strong>City of North Las Vegas:</strong> Growing municipal workforce</li>
                    <li><strong>North Las Vegas Airport:</strong> Aviation and logistics</li>
                    <li><strong>Nellis Air Force Base:</strong> Major employer just east</li>
                    <li><strong>Las Vegas Motor Speedway:</strong> Events and hospitality</li>
                  </ul>
                </div>
              </div>

              <NamedCampuses path="/neighborhoods/north-las-vegas" />

              <NeighborhoodCommute path="/neighborhoods/north-las-vegas" />

              <NeighborhoodAmenities path="/neighborhoods/north-las-vegas" />

              {/* New Construction Communities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">New Construction Communities</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Active Builder Communities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Aliante:</strong> Master-planned with golf, casino, town center. Homes $400K-$550K.</li>
                    <li><strong>Tule Springs:</strong> Newer community near I-215. KB Home, Lennar. $380K-$500K.</li>
                    <li><strong>Valley Vista:</strong> Parks and community pools. Century Communities. $350K-$450K.</li>
                    <li><strong>Camino Al Norte:</strong> Growing area near 215. Multiple builders. $380K-$480K.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>North Vista Hospital:</strong> Full-service hospital with ER, surgical center.</li>
                    <li><strong>VA Southern Nevada Healthcare:</strong> Veterans medical facility on Craig Road.</li>
                    <li><strong>Southwest Medical:</strong> Multiple urgent care and primary care locations.</li>
                    <li><strong>Aliante Station Casino:</strong> Entertainment, dining, and gaming nearby.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>892 active listings</strong> with homes averaging
                <strong> 32 days on market</strong>—slightly longer than the valley average, giving
                buyers more time to make informed decisions. Year-over-year appreciation of <strong>3.2%</strong>
                is more modest than luxury markets but represents solid, sustainable growth. Investors
                find particularly strong opportunities here, with rental yields often exceeding 6%.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in North Las Vegas means
                getting honest guidance about which neighborhoods offer the best value, which builders
                have the best reputations, and which areas are poised for the strongest appreciation.
                Dr. Jan Duffy won't push you toward a more expensive area when North Las Vegas fits
                your needs—that integrity is what sets BHHS apart from agencies focused solely on
                commission.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I tell first-time buyers the truth: you don't need to stretch your budget to own a
                great home. North Las Vegas offers brand-new construction with modern features at
                prices that let you build wealth instead of struggling with payments. As a Berkshire
                Hathaway HomeServices agent, my job is to find the right fit—not the highest price."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>
          <NeighborhoodFaqs path="/neighborhoods/north-las-vegas" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Homeownership Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              North Las Vegas and Aliante new-construction villages are 20–25 minutes via US-95/I-15.
              Dr. Jan groups Craig Road employment-corridor stops into one north loop.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
