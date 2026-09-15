import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mountain,
  Trophy,
  Shield,
  Dumbbell,
  Users,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import FiftyFiveAmenities from "@/components/sections/FiftyFiveAmenities";
import { pageMetadata } from "@/lib/seo";

import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateSeniorCommunitySchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities/sun-city-anthem",
  title: "Sun City Anthem Homes for Sale | Berkshire Hathaway HomeServices",
  description:
    "Henderson's premier 55+ community. Sun City Anthem homes from $350K-$1.2M. 2 championship golf courses, stunning mountain views. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Sun City Anthem homes for sale",
    "Sun City Anthem Henderson",
    "55 plus communities Henderson",
    "active adult Henderson",
    "Berkshire Hathaway Sun City Anthem",
  ],
});

// Breadcrumb items
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "55+ Communities", url: "/55-plus-communities" },
  { name: "Sun City Anthem", url: "/55-plus-communities/sun-city-anthem" },
];

// Community amenities for schema
const communityAmenities = [
  { name: "Championship Golf Courses", description: "Anthem Country Club and Revere Golf Club" },
  { name: "Anthem Center Clubhouse", description: "64,000 sq ft facility with pools, fitness, and dining" },
  { name: "Indoor Swimming Pool", description: "Year-round heated indoor pool" },
  { name: "Outdoor Swimming Pool", description: "Resort-style outdoor pool" },
  { name: "Fitness Center", description: "State-of-the-art fitness equipment and classes" },
  { name: "Tennis Courts", description: "Multiple lighted tennis courts" },
  { name: "Pickleball Courts", description: "Dedicated pickleball facilities" },
  { name: "Walking Trails", description: "Miles of walking and hiking trails" },
  { name: "Restaurant", description: "On-site dining at the clubhouse" },
  { name: "Social Clubs", description: "80+ clubs and activity groups" },
];


// Combined page schemas
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateSeniorCommunitySchema({
    name: "Sun City Anthem",
    description:
      "Premier 55+ active adult community in Henderson, Nevada. Built by Del Webb, featuring 7,100+ homes, championship golf, 64,000 sq ft clubhouse, and stunning mountain views.",
    priceRange: "$350,000 - $1,200,000",
    numberOfHomes: 7100,
    yearBuilt: "1998-2008",
    amenities: communityAmenities,
    hoaFees: "$180-$230/month",
    latitude: 35.9631,
    longitude: -115.0892,
    ageRestriction: "55+",
  }),
);

export default function SunCityAnthemPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + ResidentialComplex */}
      <SchemaScript schema={pageSchemas} id="sun-city-anthem-schema" />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Mountain className="h-4 w-4 mr-2" />
              Henderson's Premier 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Anthem
            </h1>
            <HeadingPhoto path="/55-plus-communities/sun-city-anthem" />

            <p className="text-xl text-slate-600">
              7,100+ homes. Mountain views. Championship golf. Anthem Center recreation.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/sun-city-anthem" />
          <UniqueInterior path="/55-plus-communities/sun-city-anthem" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Sun City Anthem at a Glance
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$350K-$1.2M</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$180-$230</div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">7,100+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">55+</div>
                <div className="text-slate-300 text-sm">Age Requirement</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Sun City Anthem
              </h2>
<p>
                <strong>Sun City Anthem</strong> brings the legendary Sun City lifestyle to Henderson,
                Nevada. Built by Del Webb from 1998-2008, this
                7,100+ home community offers stunning mountain views, championship golf, and
                resort-caliber amenities—all with 15–25 minute Strip drives and Henderson recreation campuses.
              </p>
              <p>
                The community's centerpiece is the Anthem Center, a 64,000 sq ft clubhouse featuring
                indoor and outdoor pools, fitness facilities, tennis and pickleball courts, a restaurant,
                and numerous activity rooms. Two championship golf courses—Anthem Country Club and
                the adjacent Revere Golf Club—provide world-class golf experiences.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices</strong> agents know Sun City Anthem intimately.
                Dr. Jan Duffy helps buyers understand the community's various phases, elevation differences,
                and which neighborhoods offer the best mountain or Strip views.
              </p>
            </div>
          </section>

          {/* Why Henderson */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Why Henderson location matters
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Henderson is Nevada's second-largest city, with 60+ parks, recreation centers,
                    and 15–25 minute Strip drives depending on the village. For 55+ buyers that
                    means published commute minutes, HOA-maintained streets, and golf and trail
                    access without Strip-corridor traffic.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">#2</div>
                      <div className="text-sm text-slate-600">Safest Large City</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">A+</div>
                      <div className="text-sm text-slate-600">Livability Score</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">Low</div>
                      <div className="text-sm text-slate-600">Property Crime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FiftyFiveAmenities path="/55-plus-communities/sun-city-anthem" />

          {/* Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Sun City Anthem Neighborhoods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Liberty</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Original phase with mature street trees. Close to Anthem Center. Most
                  affordable options starting around $350K.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Independence</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Mid-range pricing with mountain views. Popular floor plans and good lot sizes.
                  $450K-$700K range.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Heritage</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Premium section with larger custom homes. Best views, largest lots. $700K-$1M+.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Eagle's Landing</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Elevated homes with panoramic Strip and mountain views. Luxury finishes
                  throughout. $800K-$1.2M.
                </p>
              </div>
            </div>
          </section>

          <ExpertQuote path="/55-plus-communities/sun-city-anthem" />
          <FiftyFiveFaqs path="/55-plus-communities/sun-city-anthem" />


          {/* CTA */}
          <section className="text-center bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Anthem Center first — 30–35 minutes east, packet at the desk
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Anthem Center is about 64,000 sq ft. We review occupancy rules at Suite 100, then drive. Call (702) 222-1964.
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
