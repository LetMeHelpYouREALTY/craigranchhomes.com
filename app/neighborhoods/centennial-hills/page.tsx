import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, Users, ShoppingBag, Home as HomeIcon } from "lucide-react";
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
  path: "/neighborhoods/centennial-hills",
  title: "Berkshire Hathaway HomeServices Centennial Hills | Las Vegas Homes",
  description:
    "Find Centennial Hills homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy covers this northwest Las Vegas area near Arbor View High School and Centennial Hills Park. Median price $495K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Centennial Hills",
    "Centennial Hills homes for sale",
    "Centennial Hills Las Vegas",
    "northwest Las Vegas real estate",
    "homes for sale Las Vegas",
  ],
});


export default function CentennialHillsPage() {
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
              Berkshire Hathaway HomeServices Centennial Hills
            </h1>
            <HeadingPhoto path="/neighborhoods/centennial-hills" />

            <p className="text-xl text-slate-600">
              Northwest Las Vegas living with parks and mountain access. Find your Centennial Hills home with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/centennial-hills" />
          <UniqueInterior path="/neighborhoods/centennial-hills" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Centennial Hills Market | January 2026
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$495,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">25 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">203</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/centennial-hills" />
              <p>
                <strong>Centennial Hills</strong> represents mature northwest Las Vegas
                living. While newer communities like Skye Canyon attract attention, Centennial Hills
                offers something they can't: mature street trees, named campuses such as Arbor View High School, and
                landscaping that has had nearly two decades to grow.
                <strong> Berkshire Hathaway HomeServices</strong> helps buyers discover why
                Centennial Hills remains a frequently compared northwest Las Vegas address.
              </p>
              <p>
                The community's appeal starts with location. Positioned at the base of the mountains
                with easy access to US-95, Centennial Hills provides quick commutes throughout the
                valley while maintaining a distinctly suburban atmosphere. The mountains are visible
                from most streets, creating the feeling of living closer to nature than Centennial
                Hills' urban conveniences would suggest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented
                Centennial Hills buyers and sellers since the community's earliest phases. Dr. Jan Duffy knows
                which streets offer the strongest mountain views, commute times to the Strip and
                Downtown Summerlin, and which HOAs publish current reserve studies. This local
                knowledge, combined with the BHHS commitment to client service, ensures Centennial
                Hills buyers and sellers receive exceptional representation.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
<div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Parks and Daily Conveniences</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Hills includes Centennial Hills Park, year-round community events, and
                    HOA-maintained common areas. The mix of 1,800–3,500 sq ft floor plans and mountain
                    views supports long-term occupancy and consistent resale demand.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Centennial Center Convenience</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Center provides residents with comprehensive shopping, dining, and
                    entertainment options without leaving the neighborhood. Major retailers like Target,
                    Costco, and Home Depot anchor the center, while diverse restaurants and services
                    meet daily needs. Downtown Summerlin is also just minutes away.
                  </p>
                </div>
              </div>

              <NamedCampuses path="/neighborhoods/centennial-hills" />

              <NeighborhoodCommute path="/neighborhoods/centennial-hills" />
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Centennial Hills' proximity to US-95 provides excellent north-south access throughout the valley.
              </p>

              <NeighborhoodAmenities path="/neighborhoods/centennial-hills" />

              {/* Parks & Recreation */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Parks & Recreation</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills offers extensive parks and recreation facilities:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Park:</strong> 120 acres with sports fields, playground, skate park, dog park</li>
                    <li><strong>Centennial Hills YMCA:</strong> Full fitness facility, pools, youth programs</li>
                    <li><strong>Centennial Hills Library:</strong> Modern library with programs and events</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Angel Park Golf Club:</strong> Two public courses, 36 holes of golf</li>
                    <li><strong>Floyd Lamb Park:</strong> 15 minutes—680 acres, lakes, wildlife viewing</li>
                    <li><strong>Mountain Trails:</strong> Easy access to BLM land for hiking and biking</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>203 active listings</strong> with homes averaging
                <strong> 25 days on market</strong>. The median price of <strong>$495,000</strong>
                represents solid 4.8% year-over-year appreciation while remaining more accessible
                than Summerlin's higher-priced neighborhoods. Properties range from $380,000 for
                smaller homes to over $900,000 for larger properties with premium lots and views.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Centennial Hills means
                partnering with agents who understand the community's evolution and can identify
                properties that represent genuine value. Dr. Jan Duffy helps buyers look beyond
                surface features to evaluate factors that matter long-term: construction quality,
                lot positioning, HOA documents, and named school campuses. That expertise translates into
                better purchase decisions and stronger long-term investments.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Centennial Hills offers something newer communities are still building: mature
                landscaping and published commute times. Arbor View High School is the named campus
                many buyers compare, and Centennial Hills Park is the recreation hub. As a Berkshire Hathaway HomeServices agent, I help buyers
                see beyond shiny new construction to HOA dues, lot size, and recent comps."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>
          <NeighborhoodFaqs path="/neighborhoods/centennial-hills" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Centennial Hills Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Centennial Hills mountain-view streets sit 15–20 minutes up US-95 from the office.
              Ask Dr. Jan to pair a Floyd Lamb Park loop with live MLS.
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
