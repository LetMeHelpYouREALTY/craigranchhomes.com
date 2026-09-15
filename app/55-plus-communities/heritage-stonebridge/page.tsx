import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Shield,
  Home as HomeIcon,
  Dumbbell,
  Users,
  CheckCircle,
  ShoppingBag,
  Mountain,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities/heritage-stonebridge",
  title: "Heritage at Stonebridge Homes for Sale | Guard-Gated 55+ Summerlin | Dr. Jan Duffy",
  description:
    "Heritage at Stonebridge - boutique guard-gated 55+ community in Summerlin. Homes from $400K-$750K. Near Downtown Summerlin, Red Rock Canyon. Dr. Jan Duffy, BHHS. Call (702) 222-1964.",
  keywords: [
    "Heritage at Stonebridge homes for sale",
    "Heritage Stonebridge Summerlin",
    "guard-gated 55+ community Las Vegas",
    "Summerlin 55+ communities",
    "boutique 55+ community Las Vegas",
    "Berkshire Hathaway Heritage Stonebridge",
  ],
  openGraph: {
    title: "Heritage at Stonebridge - Guard-Gated 55+ Living in Summerlin",
    description:
      "Boutique community with premium Summerlin location. Guard-gated security, near Downtown Summerlin. From $400K. Dr. Jan Duffy, BHHS.",
    type: "website",
  },
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Heritage at Stonebridge",
  description:
    "Guard-gated 55+ community in Summerlin with 1,100+ homes and premium location",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1912,
    longitude: -115.3124,
  },
};

export default function HeritageAtStonebridgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Guard-Gated Summerlin 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Heritage at Stonebridge
            </h1>
            <HeadingPhoto path="/55-plus-communities/heritage-stonebridge" />

            <p className="text-xl text-slate-600">
              Boutique 55+ living with guard-gated privacy in the heart of
              Summerlin.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/heritage-stonebridge" />
          <UniqueInterior path="/55-plus-communities/heritage-stonebridge" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Heritage at Stonebridge at a Glance
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  $400K-$750K
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  $175-$220
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,100+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  Guard-Gated
                </div>
                <div className="text-slate-300 text-sm">24/7 Security</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Heritage at Stonebridge
              </h2>
<p>
                <strong>Heritage at Stonebridge</strong> offers what larger 55+
                communities can't—a boutique, guard-gated experience in one of
                Las Vegas's most desirable locations. With just over 1,100 homes,
                this 1,100-home campus provides a staffed gate and
                a private enclave while still offering resort-style amenities.
              </p>
              <p>
                The community's prime Summerlin location puts residents minutes
                from Downtown Summerlin's world-class shopping, dining, and
                entertainment, while Red Rock Canyon's hiking trails are a short
                drive away. The TPC Las Vegas and several other championship golf
                courses are nearby for residents who prefer to pay-as-you-play
                rather than committing to a community course.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                helps buyers who value privacy and location over massive amenity
                complexes. Dr. Jan Duffy understands why Heritage at Stonebridge
                appeals to buyers seeking a more exclusive, intimate 55+
                experience.
              </p>
            </div>
          </section>

          {/* Guard-Gated Security */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-purple-50 border-l-4 border-purple-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Guard-Gated Security & Privacy
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Unlike many 55+ communities with simple gate codes, Heritage
                    at Stonebridge features 24/7 guard-gated security. Every
                    visitor is screened, providing genuine privacy and peace of
                    mind.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-slate-600">
                        Manned Guard Gate
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-purple-600">
                        Visitor
                      </div>
                      <div className="text-sm text-slate-600">
                        Verification Required
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-purple-600">
                        Patrol
                      </div>
                      <div className="text-sm text-slate-600">
                        Regular Security Rounds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Community Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Clubhouse</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Community gathering space</li>
                  <li>• Meeting rooms</li>
                  <li>• Social event venue</li>
                  <li>• Kitchen facilities</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Pool, Spa & Fitness</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Resort-style pool</li>
                  <li>• Relaxing spa</li>
                  <li>• Fitness center</li>
                  <li>• Outdoor spaces</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Social Activities</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Organized clubs</li>
                  <li>• Community events</li>
                  <li>• Holiday parties</li>
                  <li>• Interest groups</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Location Benefits */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Premium Summerlin Location
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <ShoppingBag className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Downtown Summerlin
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Minutes from 125+ stores, restaurants, and entertainment.
                      Major retailers, fine dining, and a vibrant social scene.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Mountain className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Red Rock Canyon
                    </h3>
                    <p className="text-slate-600 text-sm">
                      World-class hiking and scenic drives just 15 minutes away.
                      Stunning desert landscapes and outdoor recreation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      TPC Las Vegas & Golf
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Multiple championship courses nearby. Pay-as-you-play
                      flexibility without mandatory golf memberships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Central to Everything
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Easy access to the Strip, airport, hospitals, and all major
                      Las Vegas attractions and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Heritage */}
          <FiftyFiveFaqs path="/55-plus-communities/heritage-stonebridge" />


          {/* CTA */}
          <section className="text-center bg-purple-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Guard-Gated 55+ Living
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Discover why Heritage at Stonebridge offers the privacy and location
              discerning buyers seek. Tour with Dr. Jan Duffy.
            </p>
            <CtaActions variant="onDark" />
            <p className="text-purple-200">
              The Heritage gate is 12–18 minutes from 9406 W Lake Mead Blvd, next to Downtown Summerlin.
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
