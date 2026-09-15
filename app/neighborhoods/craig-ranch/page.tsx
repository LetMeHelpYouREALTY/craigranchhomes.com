import RealScoutListings from "@/components/realscout/RealScoutListings";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import NamedCampuses from "@/components/sections/NamedCampuses";
import NeighborhoodCommute from "@/components/sections/NeighborhoodCommute";
import NeighborhoodAmenities from "@/components/sections/NeighborhoodAmenities";
import NeighborhoodParks from "@/components/sections/NeighborhoodParks";
import CommunityHighlights from "@/components/sections/CommunityHighlights";
import VillageDetails from "@/components/sections/VillageDetails";
import NeighborhoodLifestyle from "@/components/sections/NeighborhoodLifestyle";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";
import { ctaPhone, nap } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/craig-ranch",
  title: "Craig Ranch Homes for Sale | North Las Vegas | Dr. Jan Duffy",
  description:
    "Buy or sell Craig Ranch homes in North Las Vegas ZIP 89031 with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. 170-acre park at 628 W. Craig Road. Gate list from Suite 100. Call (702) 222-1964.",
  keywords: [
    "Craig Ranch homes for sale",
    "Craig Ranch North Las Vegas",
    "Craig Ranch realtor",
    "Dr. Jan Duffy Craig Ranch",
    "ZIP 89031 homes",
    "Craig Ranch Regional Park",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Neighborhoods", url: "/neighborhoods" },
  { name: "Craig Ranch", url: "/neighborhoods/craig-ranch" },
];

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateNeighborhoodSchema({
    name: "Craig Ranch",
    slug: "craig-ranch",
    description:
      "Gated Century Communities plat in North Las Vegas ZIP 89031 at Lone Mountain and Camino Al Norte, next to 170-acre Craig Ranch Regional Park at 628 W. Craig Road. Dr. Jan Duffy sequences the gate list from 9406 W Lake Mead Blvd, Suite 100.",
    latitude: 36.2404,
    longitude: -115.1465,
    containedIn: "North Las Vegas",
  })
);

const services = [
  {
    title: "Buyer representation inside the gate",
    body: "Register Dr. Jan at Suite 100 before the first Sound Lane appointment so the gate list and the offer file use the same agent. RealScout alerts stay in RealScout; we sequence 89031 streets from the desk.",
  },
  {
    title: "Listing a Craig Ranch resale",
    body: "Comps stay on this plat: condo row vs half-acre Seabreeze lots are not one price. Photography is timed to the park and the interior street, not a valley stock shot.",
  },
  {
    title: "Address-level valuation",
    body: "Bring the APN. We use recent 89031 sales, days on market, and the listing next door — not a ZIP average. Call (702) 222-1964.",
  },
  {
    title: "Nellis and VA commute mapping",
    body: "PCS and Craig Road medical shifts are timed from the listing curb to the facility address. We do not copy a downtown magnet onto this north clock.",
  },
];

export default function CraigRanchPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="craig-ranch-schema" />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Craig Ranch Homes in North Las Vegas
            </h1>
            <HeadingPhoto path="/neighborhoods/craig-ranch" />

            <p className="text-xl text-slate-600">
              Gated 89031 streets next to a 170-acre city park. Dr. Jan Duffy runs hyperlocal Craig
              Ranch tours from {nap.street} — gate list first, then 1494 Sound Lane.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/craig-ranch" />
          <UniqueInterior path="/neighborhoods/craig-ranch" />

          <section
            className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
            data-market-snapshot="/neighborhoods/craig-ranch"
          >
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              ZIP 89031 gated plat — January 2026 Craig Ranch published bands from $415K
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$415,000+</div>
                <div className="text-slate-300 text-sm">Published entry band</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$500–$650K</div>
                <div className="text-slate-300 text-sm">Mid-range resale band</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$738,700+</div>
                <div className="text-slate-300 text-sm">Larger-lot published band</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">20–25 min</div>
                <div className="text-slate-300 text-sm">Suite 100 via US-95 / I-15</div>
              </div>
            </div>
            <p className="text-center text-slate-300 text-sm mt-8">
              Bands on this page are published ranges, not a live MLS quote. Confirm list price
              the week you tour. North Las Vegas city median on this site is $385,000 — Craig Ranch
              gated product typically lists above that city figure.
            </p>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/craig-ranch" />
              <p>
                <strong>Craig Ranch</strong> is a gated Century Communities plat at Lone Mountain and
                Camino Al Norte in North Las Vegas ZIP 89031. The model pin historically used{" "}
                <strong>1494 Sound Lane</strong>. The city park at <strong>628 W. Craig Road</strong>{" "}
                is about 170 acres — baseball fields, a 65,000-square-foot skate park, three dog
                parks, tennis, volleyball, basketball, community gardens, and six multiuse fields.
                Dr. Jan Duffy compares park-front streets to interior lots by square footage and
                HOA packet, not a slogan.
              </p>
              <p>
                Interiors on this plat are not interchangeable. <strong>Jasmine Ranch</strong> is
                primarily two-bedroom condos with a pool and fitness building.{" "}
                <strong>Centennial Crossing</strong> is larger condos and townhomes, some with up
                to four bedrooms. <strong>Seabreeze</strong> is the larger-lot row — published lots
                up to about half an acre, some with guesthouses and extra garage bays. Century
                collections on the same gate list include Mohave, Essence, Serenity, Olympic, and
                Monarch. Plan widths on older builder sheets ran about 1,519–2,947 sq ft; we
                confirm the listing sheet before we leave Suite 100.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> starts the north
                loop at 9406 W Lake Mead Blvd, Suite 100, then drives 20–25 minutes via US-95 /
                I-15. Aliante golf lots are a different showing clock — see{" "}
                <Link href="/neighborhoods/north-las-vegas">North Las Vegas</Link> when the brief
                is citywide. For this page we stay on 89031. Call {ctaPhone.display}.
              </p>

              <CommunityHighlights path="/neighborhoods/craig-ranch" />

              <VillageDetails path="/neighborhoods/craig-ranch" />

              <NamedCampuses path="/neighborhoods/craig-ranch" />

              <NeighborhoodCommute path="/neighborhoods/craig-ranch" />

              <NeighborhoodAmenities path="/neighborhoods/craig-ranch" />

              <NeighborhoodParks path="/neighborhoods/craig-ranch" />

              <VillageDetails path="/neighborhoods/craig-ranch" slot={1} />
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Hyperlocal Craig Ranch services from Suite 100
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Matching and activity tracking stay in RealScout. Follow Up Boss already syncs those
              leads. What we add is the 89031 clock: gate list, park acreage, named campuses, and
              the offer file.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.body}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-8 mb-6 text-center">
              {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
            </p>
            <CtaActions variant="onLight" />
          </section>

          <ExpertQuote path="/neighborhoods/craig-ranch" />
          <NeighborhoodFaqs path="/neighborhoods/craig-ranch" />

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lock the Sound Lane gate list, then walk 628 W. Craig Road
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Craig Ranch is 20–25 minutes from Suite 100 via US-95 / I-15. Dr. Jan groups the
              regional park and the gated streets into one north loop — not an Aliante golf add-on
              unless you ask for that clock.
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
