import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Waves, TreePine, GraduationCap, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import NamedCampuses from "@/components/sections/NamedCampuses";
import NeighborhoodCommute from "@/components/sections/NeighborhoodCommute";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/inspirada",
  title: "Berkshire Hathaway HomeServices Inspirada | Henderson Resort Living",
  description:
    "Find Inspirada homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Henderson's resort-style community. Median price $525K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Inspirada",
    "Inspirada homes for sale",
    "Inspirada Henderson",
    "Henderson master planned",
    "resort style community",
  ],
});


export default function InspiradaPage() {
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
              Berkshire Hathaway HomeServices Inspirada
            </h1>
            <HeadingPhoto path="/neighborhoods/inspirada" />

            <p className="text-xl text-slate-600">
              Resort-style living in Henderson. Discover Inspirada with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/inspirada" />
          <UniqueInterior path="/neighborhoods/inspirada" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Inspirada Real Estate Market | January 2026
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$525,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">23 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.0%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Inspirada: Henderson's Award-Winning Resort-Style Community
              </h2>
              <p>
                <strong>Inspirada</strong> redefines what a master-planned community can be. This
                2,000-acre development in Henderson consistently ranks among the nation's top-selling
                communities, and for good reason: Inspirada delivers resort-style amenities that make
                every day feel like a vacation. <strong>Berkshire Hathaway HomeServices</strong>
                is proud to represent buyers and sellers in this exceptional community.
              </p>
              <p>
                The community's amenity package rivals many resorts. Multiple pools feature water
                slides, splash pads, and cabanas. Miles of walking and biking trails wind through
                the community, connecting to neighborhood parks and gathering spaces. Sports courts,
                fitness facilities, and community events create an active, engaged lifestyle that
                brings neighbors together. These amenities aren't afterthoughts—they're central
                to Inspirada's identity.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides free
                buyer representation on Inspirada new construction purchases. With multiple builders
                offering homes in the community, navigating options can be overwhelming. Dr. Jan Duffy
                helps buyers compare builders, negotiate upgrades, and avoid common new construction
                pitfalls. For resales, BHHS agents identify properties where previous owners made
                smart upgrade decisions, delivering better value than comparable new construction.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
<div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Waves className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Resort-Style Pools & Amenities</h4>
                  </div>
                  <p className="text-slate-600">
                    Inspirada's pools aren't typical community pools—they're resort experiences.
                    Water slides, splash pads for kids, lap lanes for exercise, and shaded cabanas
                    for relaxation create a vacation atmosphere steps from your front door. The
                    HOA maintains these facilities to exceptional standards year-round.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Trails, Parks & Active Living</h4>
                  </div>
                  <p className="text-slate-600">
                    Miles of walking and biking trails connect Inspirada's neighborhoods, parks,
                    and amenity centers. Whether you're training for a marathon or taking an evening
                    stroll, the trail system encourages an active lifestyle. Community events—from
                    outdoor movies to fitness classes—bring neighbors together throughout the year.
                  </p>
                </div>
              </div>

              <NamedCampuses path="/neighborhoods/inspirada" />

              <NeighborhoodCommute path="/neighborhoods/inspirada" />

              {/* Amenities Detail */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Inspirada Amenity Centers</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Resort Pool Complex</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Resort-style pool with cabanas</li>
                    <li>• Water slides and splash features</li>
                    <li>• Zero-entry pool</li>
                    <li>• Lap lanes for fitness swimming</li>
                    <li>• Poolside WiFi and refreshments</li>
                    <li>• Extended summer hours</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Active Living Amenities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• 10+ miles of walking/biking trails</li>
                    <li>• Multiple neighborhood parks</li>
                    <li>• Tennis and pickleball courts</li>
                    <li>• Basketball courts</li>
                    <li>• Dog parks</li>
                    <li>• Community fitness classes</li>
                  </ul>
                </div>
              </div>

              {/* Builders */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Builders in Inspirada</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Toll Brothers:</strong> Premium homes $600K-$750K. Known for quality and upgrades.</li>
                    <li><strong>Beazer Homes:</strong> Mid-range to premium $500K-$650K. Energy-efficient designs.</li>
                    <li><strong>Lennar:</strong> Entry to mid-range $450K-$580K. "Everything's Included" packages.</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Woodside Homes:</strong> Mid-range $480K-$620K. Strong value proposition.</li>
                    <li><strong>Richmond American:</strong> Entry to mid-range $450K-$550K. Personalization options.</li>
                    <li><strong>Century Communities:</strong> Affordable entry $420K-$500K. Modern designs.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current Inspirada market shows <strong>98 active listings</strong> with homes
                averaging <strong>23 days on market</strong>—reflecting strong demand for this
                sought-after community. The median price of <strong>$525,000</strong> represents
                solid 5.0% year-over-year appreciation. New construction from builders like Toll
                Brothers, Lennar, and Beazer ranges from $450,000 to $750,000, while resales with
                resale yards with mature trees and upgraded features offer compelling alternatives.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Inspirada purchase
                means working with agents who understand the community's various neighborhoods, which
                builders offer the best quality, and which lots provide the best value. Dr. Jan Duffy
                has helped dozens of buyers find their Inspirada homes, and that experience
                translates into better outcomes for buyers navigating this popular community.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Inspirada buyers pick it for the amenity campus, 10+ miles of trails, and builder
                rows from Toll Brothers to Lennar. As a Berkshire Hathaway HomeServices agent, I
                match square footage and HOA amenities to how you actually use the park, pool, and
                trail system—whether that is next to the main pool complex or on a cul-de-sac
                backing to open space."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>
          <NeighborhoodFaqs path="/neighborhoods/inspirada" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Inspirada Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Inspirada amenity centers and builder rows are a 30–40 minute south Henderson block.
              Dr. Jan sequences Toll Brothers, Lennar, and resale in one trip.
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
