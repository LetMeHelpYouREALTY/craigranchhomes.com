import RealScoutListings from "@/components/realscout/RealScoutListings";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";


export const metadata: Metadata = pageMetadata({
  path: "/why-berkshire-hathaway",
  title: "Why Choose Berkshire Hathaway HomeServices | Las Vegas Real Estate",
  description:
    "See what Berkshire Hathaway HomeServices Nevada Properties puts on a listing file. Marketing samples at Suite 100. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices",
    "why choose BHHS",
    "Warren Buffett real estate",
    "trusted real estate brand",
    "BHHS Nevada Properties",
  ],
});

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berkshire Hathaway HomeServices",
  url: "https://www.bhhs.com",
  logo: "https://heyberkshire.com/favicon-32x32.png",
  description:
    "Berkshire Hathaway HomeServices is a real estate brokerage network, part of Berkshire Hathaway Inc., one of the world's most respected and trusted companies.",
  parentOrganization: {
    "@type": "Corporation",
    name: "Berkshire Hathaway Inc.",
    founder: "Warren Buffett",
  },
};

export default function WhyBerkshireHathawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              The Most Trusted Name in Real Estate
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Choose Berkshire Hathaway HomeServices?
            </h1>
            <HeadingPhoto path="/why-berkshire-hathaway" />

            <p className="text-xl text-slate-600 leading-relaxed">
              When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you're
              backed by a name synonymous with trust, ethical standards, and financial strength—the
              same principles that built Warren Buffett's empire.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/why-berkshire-hathaway" />
          <UniqueInterior path="/why-berkshire-hathaway" />
          <ExpertQuote path="/why-berkshire-hathaway" />

            </div>
          </div>

          {/* Warren Buffett Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Backed by Warren Buffett's Legacy
                </h2>
<p className="text-slate-300 mb-6">
                  <strong>Berkshire Hathaway HomeServices</strong> is the only real estate brand
                  backed by Berkshire Hathaway Inc., Warren Buffett's legendary holding company.
                  This means unmatched financial stability and a commitment to ethical business
                  practices that spans decades.
                </p>
                <p className="text-slate-300">
                  When you see the Berkshire Hathaway name, you know you're working with
                  professionals who uphold the highest standards in the industry.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <p className="text-2xl font-bold mb-2">Fortune #1</p>
                <p className="text-slate-400">
                  Berkshire Hathaway Inc. consistently ranks among the top companies in the world
                </p>
              </div>
            </div>
          </section>

          <ProcessSteps path="/why-berkshire-hathaway" />

          {/* Stats Section */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              50,000 agents, $138B 2024 volume — then ask what Suite 100 puts on YOUR file
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <div className="text-blue-200">Agents Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1,500+</div>
                <div className="text-blue-200">Offices Globally</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">$138B+</div>
                <div className="text-blue-200">Sales Volume (2024)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">#1</div>
                <div className="text-blue-200">Parent: Berkshire Hathaway Inc.</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/why-berkshire-hathaway" />

          <SupportFaqs path="/why-berkshire-hathaway" />

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ask who photographs, who writes remarks, who negotiates — then sign
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Call (702) 222-1964. License S.0197614.LLC. Suite 100 on W Lake Mead Blvd.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
