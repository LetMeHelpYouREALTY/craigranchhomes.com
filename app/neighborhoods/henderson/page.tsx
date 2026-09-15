import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Shield, Users, GraduationCap, TreePine } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import FaqAccordion from "@/components/sections/FaqAccordion";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

import { nap } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/henderson",
  title: "Berkshire Hathaway HomeServices Henderson | Nevada Real Estate",
  description:
    "Find Henderson homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Henderson's residential communities with parks and recreation. Median price $485K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Henderson",
    "Henderson homes for sale",
    "Henderson real estate agent",
    "Henderson Nevada",
    "Green Valley Henderson",
  ],
});

const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Henderson, Nevada",
  description: "Nevada's second-largest city known for parks, trails, and residential communities with parks and recreation",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.0395",
    longitude: "-114.9817",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Henderson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, Henderson's median home price is $485,000, up 5.1% from last year. Prices range from $350,000 for condos to over $2 million in luxury communities like MacDonald Highlands.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities and commute times define Henderson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Henderson is Nevada's second-largest city, with 60+ parks, recreation centers, and 15–25 minute commutes to the Las Vegas Strip depending on the village. Green Valley, Inspirada, MacDonald Highlands, and Lake Las Vegas each offer distinct HOA amenities and price points.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods define Henderson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Henderson neighborhoods include Green Valley (mature landscaping), Inspirada (resort-style amenities), MacDonald Highlands (luxury estates), Anthem (recreation campuses), and Lake Las Vegas (waterfront living). Each offers distinct lifestyle options.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Berkshire Hathaway HomeServices for Henderson real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHHS Nevada Properties has served Henderson for decades. Our agents like Dr. Jan Duffy know HOA documents, commute times, and recent comps in Green Valley, Inspirada, and Anthem. The Berkshire Hathaway name provides trust and resources that benefit both buyers and sellers.",
      },
    },
  ],
};

export default function HendersonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodSchema) }}
      />
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
              Berkshire Hathaway HomeServices Henderson
            </h1>
            <HeadingPhoto path="/neighborhoods/henderson" />

            <p className="text-xl text-slate-600">
              Nevada's second-largest city. Find your Henderson home with Dr. Jan Duffy, your trusted{" "}
              <strong>Berkshire Hathaway HomeServices</strong> Henderson specialist.
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
              Henderson Real Estate Market | January 2026
            </h2>
            <HeadingPhoto path="/neighborhoods/henderson" level="h2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$485,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">24 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,280</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.1%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Henderson Is Nevada's Best-Kept Secret
              </h2>
              <p>
                <strong>Henderson</strong> has quietly become one of the most desirable cities in the American
                Southwest. As Nevada's second-largest city with over 320,000 residents, Henderson offers the
                perfect balance of suburban tranquility and urban convenience. <strong>Berkshire Hathaway
                HomeServices</strong> has been helping buyers find Henderson homes for decades,
                and Dr. Jan Duffy brings unmatched expertise to every transaction.
              </p>
              <p>
                What sets Henderson apart is scale and planning: 60+ parks, recreation centers, and
                master-planned villages 15–25 minutes from the Strip. Nevada has no state income tax,
                which is why many California buyers compare Henderson floor plans and HOA amenities
                before they list a West Coast home.
              </p>
              <p>
                The Henderson real estate market offers remarkable diversity. From the established tree-lined
                streets of <strong>Green Valley</strong> to the resort-style amenities of <strong>Inspirada</strong>,
                from the luxury estates of <strong>MacDonald Highlands</strong> to the waterfront properties at
                <strong> Lake Las Vegas</strong>—Henderson has a community for every lifestyle and budget.
                <strong> Berkshire Hathaway HomeServices Nevada Properties</strong> agents know each of these
                communities intimately.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">60+ Parks &amp; Trails</h4>
                  </div>
                  <p className="text-slate-600">
                    Henderson operates more than 60 parks, multiple recreation centers, and miles of
                    trails. Green Valley, Inspirada, and Anthem each add HOA pools, clubhouses, and
                    programmed events on top of city amenities.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Master-Planned Villages</h4>
                  </div>
                  <p className="text-slate-600">
                    From Green Valley&apos;s mature landscaping to Inspirada&apos;s town center and
                    MacDonald Highlands&apos; custom estates, Henderson villages are planned around
                    parks, shopping, and commute times—not generic slogans.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Henderson School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Henderson offers some of Nevada's best public schools through Clark County School District,
                  plus excellent charter and private options:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• John C. Vanderburg</li>
                      <li>• Elise L. Wolff Elementary</li>
                      <li>• C.T. Sewell Elementary</li>
                      <li>• Pinecrest Academy (Charter)</li>
                      <li>• Coral Academy (Charter)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School</li>
                      <li>• Green Valley High School</li>
                      <li>• Foothill High School</li>
                      <li>• Bob Miller Middle School</li>
                      <li>• Del E. Webb Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International School</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Pinecrest Academy</li>
                      <li>• The Adelson School</li>
                      <li>• St. Peter the Apostle</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Henderson</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">15-25 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">22 miles</td><td className="px-4 py-3">28 min</td><td className="px-4 py-3">40-55 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">20-25 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Henderson's central location provides excellent access to the 215 Beltway and I-515/US-95,
                making commutes to all parts of the valley convenient.
              </p>

              {/* Major Employers */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Major Henderson Employers</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Barclays:</strong> Credit card operations center (~3,000 employees)</li>
                  <li><strong>Credit One Bank:</strong> Corporate headquarters</li>
                  <li><strong>City of Henderson:</strong> Municipal services</li>
                  <li><strong>Henderson Hospital:</strong> Healthcare services</li>
                </ul>
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Station Casinos:</strong> Green Valley Ranch, Sunset Station</li>
                  <li><strong>Levi Strauss:</strong> Distribution center</li>
                  <li><strong>Amazon:</strong> Fulfillment center nearby</li>
                  <li><strong>St. Rose Dominican:</strong> Hospital system</li>
                </ul>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>The District at Green Valley Ranch:</strong> Outdoor shopping, restaurants, movie theater.</li>
                    <li><strong>Galleria at Sunset:</strong> Major mall with Macy's, Dillard's, 140+ stores.</li>
                    <li><strong>Green Valley Ranch Resort:</strong> Casino, spa, restaurants, concerts.</li>
                    <li><strong>Henderson Farmers Market:</strong> Weekly local produce and artisan goods.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare Facilities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Henderson Hospital:</strong> Full-service hospital, 24/7 ER, labor & delivery.</li>
                    <li><strong>St. Rose Dominican:</strong> Three locations in Henderson—Siena, San Martin, Rose de Lima.</li>
                    <li><strong>Southwest Medical:</strong> Multiple clinics throughout Henderson.</li>
                    <li><strong>Dignity Health:</strong> Urgent care and primary care facilities.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                With <strong>1,280 active listings</strong> and homes averaging just <strong>24 days on market</strong>,
                Henderson's real estate market moves quickly. The median price of <strong>$485,000</strong> offers
                excellent value compared to similar communities in California, Arizona, or Colorado. First-time
                buyers find attainable options starting in the $350,000s, while luxury buyers can explore
                properties exceeding $2 million in guard-gated communities.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Henderson home search means
                working with agents who understand the subtle differences between Henderson's many communities.
                Dr. Jan Duffy can map commute times to named campuses such as Coronado High School
                and Green Valley High School, review HOA documents, and compare recent sales. That
                local knowledge, backed by the resources and reputation of Berkshire Hathaway, makes all the
                difference.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Henderson spans Green Valley, Inspirada, Anthem, MacDonald Highlands, and Lake Las Vegas.
                As a Berkshire Hathaway HomeServices agent, I match buyers to square footage, HOA fees,
                park acreage, and commute times to the Strip and airport."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Henderson Real Estate
            </h2>
                        <FaqAccordion items={[
              { q: "What is the current median home price in Henderson?", a: "As of January 2026, Henderson's median home price is $485,000, up 5.1% from last year. Prices range from $350,000 for condos to over $2 million in luxury communities like MacDonald Highlands." },
              { q: "What amenities and commute times define Henderson?", a: "Henderson is Nevada's second-largest city, with 60+ parks, recreation centers, and 15–25 minute commutes to the Strip depending on the village. Call Dr. Jan Duffy at (702) 222-1964 for current inventory by community." },
              { q: "What neighborhoods define Henderson?", a: "Henderson neighborhoods include Green Valley (mature landscaping), Inspirada (resort-style amenities), MacDonald Highlands (luxury estates), Anthem (recreation campuses), and Lake Las Vegas (waterfront living). Each offers distinct amenities and commute times." },
              { q: "Why choose Berkshire Hathaway HomeServices for Henderson real estate?", a: "BHHS Nevada Properties has served Henderson for decades. Our agents like Dr. Jan Duffy know HOA documents, commute times, and recent comps in Green Valley, Inspirada, and Anthem. The Berkshire Hathaway name provides trust and resources that benefit both buyers and sellers." },
            ]} />
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Henderson Home Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Henderson expert,
              for personalized guidance and local market insights.
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
