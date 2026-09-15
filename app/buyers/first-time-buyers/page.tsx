import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Home as HomeIcon,
  DollarSign,
  Key,
  CheckCircle,
  Calendar,
  FileText,
  Users,
  TrendingUp,
  Building,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import BuyerFaqs from "@/components/sections/BuyerFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { nap } from "@/lib/contact";


export const metadata: Metadata = pageMetadata({
  path: "/buyers/first-time-buyers",
  title: "First-Time Home Buyers Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "First-time buyer in Las Vegas? Down payment assistance, builder incentives, and expert guidance from Dr. Jan Duffy at Berkshire Hathaway HomeServices. Call (702) 222-1964.",
  keywords: [
    "first time home buyer Las Vegas",
    "first time buyer Nevada",
    "down payment assistance Las Vegas",
    "FHA loans Las Vegas",
    "VA loans Las Vegas",
    "Berkshire Hathaway HomeServices first time buyer",
  ],
});


export default function FirstTimeBuyersPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Key className="h-4 w-4 mr-2" />
              Down Payment Assistance Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Your First Home in Las Vegas<br />
              <span className="text-blue-600">Starts Here</span>
            </h1>
            <HeadingPhoto path="/buyers/first-time-buyers" />

            <p className="text-xl text-slate-600 mb-8">
              Down payment assistance. Builder incentives. Expert guidance every step of the way.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/buyers/first-time-buyers" />
          <UniqueInterior path="/buyers/first-time-buyers" />

          </div>

          <LeftoverBand path="/buyers/first-time-buyers" />

          <LeftoverBand path="/buyers/first-time-buyers" slot={1} />

          {/* Rent vs Buy */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Rent vs. Buy in Las Vegas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-red-900 mb-4 flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Renting: $1,800/month
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li>• No equity building</li>
                  <li>• Rent increases each year</li>
                  <li>• No tax benefits</li>
                  <li>• Landlord controls your living situation</li>
                  <li>• After 5 years: $108,000 spent, $0 equity</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-green-900 mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2" />
                  Buying: $1,900/month*
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Building $600+/month in equity</li>
                  <li>• Payment stays mostly fixed</li>
                  <li>• Mortgage interest tax deduction</li>
                  <li>• Freedom to customize your home</li>
                  <li>• After 5 years: $36,000+ equity built</li>
                </ul>
                <p className="text-xs text-green-600 mt-3">
                  *Based on $400K home with 3.5% down, 6.5% rate
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <BuyerFaqs path="/buyers/first-time-buyers" />


          <ExpertQuote path="/buyers/first-time-buyers" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stop Renting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's talk about your options. Dr. Jan Duffy will help you understand what you can
              afford and create a plan to make homeownership happen.
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
