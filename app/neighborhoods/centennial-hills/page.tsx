import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, Users, ShoppingBag, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import FaqAccordion from "@/components/sections/FaqAccordion";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

import { nap } from "@/lib/contact";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, Centennial Hills' median home price is $495,000, up 4.8% year-over-year. Prices range from $380,000 for smaller homes to over $900,000 for larger properties with mountain views.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities and commute times define Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Hills includes Centennial Hills Park, shopping at Centennial Center, and named campuses such as Arbor View High School. Typical Strip commute is 20–25 minutes via US-95.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Centennial Hills from the Las Vegas Strip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Hills is approximately 20-25 minutes from the Strip via US-95. The community offers easy freeway access, mountain views on many streets, and retail at Centennial Center away from the tourist corridor.",
      },
    },
    {
      "@type": "Question",
      name: "What shopping and amenities are near Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Center provides extensive shopping, dining, and entertainment including Target, Costco, and numerous restaurants. Downtown Summerlin is also easily accessible for additional retail and entertainment options.",
      },
    },
  ],
};

export default function CentennialHillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Centennial Hills Market | January 2026
            </h2>
            <HeadingPhoto path="/neighborhoods/centennial-hills" level="h2" />

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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Centennial Hills: Northwest Las Vegas Mountain-View Living
              </h2>
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
              <HeadingPhoto path="/neighborhoods/centennial-hills" level="h3" />
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

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Named campuses near Centennial Hills</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Named campuses buyers compare for commute time (confirm zoning by address):
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Ober Elementary</li>
                      <li>• Cashman Elementary</li>
                      <li>• Scherkenbach Elementary</li>
                      <li>• Hummel Elementary</li>
                      <li>• McMillan Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Centennial High School</li>
                      <li>• Shadow Ridge High School</li>
                      <li>• Arbor View High School</li>
                      <li>• Becker Middle School</li>
                      <li>• Escobedo Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter/Private</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Faith Lutheran (nearby)</li>
                      <li>• The Meadows School (nearby)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Centennial Hills</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rush Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">25 miles</td><td className="px-4 py-3">30 min</td><td className="px-4 py-3">45-60 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Centennial Hills' proximity to US-95 provides excellent north-south access throughout the valley.
              </p>

              {/* Shopping & Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Centennial Center</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Major Retail:</strong> Target, Costco, Home Depot, Best Buy, Kohl's</li>
                    <li><strong>Grocery:</strong> Smith's, Trader Joe's, Whole Foods nearby</li>
                    <li><strong>Dining:</strong> 50+ restaurants including Red Robin, BJ's, Cheesecake Factory</li>
                    <li><strong>Entertainment:</strong> Century 18 Theatres, bowling, fitness centers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Hospital:</strong> Full-service hospital, 24/7 ER, maternity center</li>
                    <li><strong>Southwest Medical:</strong> Multiple primary care and urgent care locations</li>
                    <li><strong>Dignity Health:</strong> Clinics and specialty services</li>
                    <li><strong>VA Medical Center:</strong> 10 minutes for veteran services</li>
                  </ul>
                </div>
              </div>

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

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Centennial Hills
            </h2>
                        <FaqAccordion items={[
              { q: "What is the current median home price in Centennial Hills?", a: "As of January 2026, Centennial Hills' median home price is $495,000, up 4.8% year-over-year. Prices range from $380,000 for smaller homes to over $900,000 for larger properties with mountain views." },
              { q: "What amenities and commute times define Centennial Hills?", a: "Centennial Hills includes Centennial Hills Park, shopping at Centennial Center, and named campuses such as Arbor View High School. Typical Strip commute is 20–25 minutes via US-95." },
              { q: "How far is Centennial Hills from the Las Vegas Strip?", a: "Centennial Hills is approximately 20-25 minutes from the Strip via US-95. The community offers easy freeway access, mountain views on many streets, and retail at Centennial Center away from the tourist corridor." },
              { q: "What shopping and amenities are near Centennial Hills?", a: "Centennial Center provides extensive shopping, dining, and entertainment including Target, Costco, and numerous restaurants. Downtown Summerlin is also easily accessible for additional retail and entertainment options." },
            ]} />
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Centennial Hills Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Centennial Hills expert,
              for guidance in this northwest Las Vegas community.
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
