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

          {/* Financing Options */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              First-Time Buyer Financing Options
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3.5%</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">FHA Loans</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Only 3.5% down with credit scores as low as 580
                </p>
                <div className="text-xs text-slate-500">
                  2026 Limit: $498,257
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">0%</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">VA Loans</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Zero down payment for eligible veterans & military
                </p>
                <div className="text-xs text-slate-500">
                  No PMI required
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3%</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Conventional</h3>
                <p className="text-sm text-slate-600 mb-3">
                  As low as 3% down with good credit (680+)
                </p>
                <div className="text-xs text-slate-500">
                  PMI removable at 20%
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Down Payment Help</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Nevada programs offer up to $15,000 in assistance
                </p>
                <div className="text-xs text-slate-500">
                  Income limits apply
                </div>
              </div>
            </div>
          </section>

          {/* Top Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Best Neighborhoods for First-Time Buyers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">North Las Vegas</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Best Value</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$350K - $450K</div>
                <p className="text-slate-600 text-sm mb-4">
                  Most affordable new construction in the valley. Growing rapidly with new schools,
                  shopping, and infrastructure investments.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    New construction from $350K
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    FHA-friendly pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Strong appreciation
                  </li>
                </ul>
                <Link
                  href="/neighborhoods/north-las-vegas"
                  className="block mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Explore North Las Vegas →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Mountains Edge</h3>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Great Parks</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$380K - $480K</div>
                <p className="text-slate-600 text-sm mb-4">
                  Southwest Las Vegas with the valley's largest park, mountain views, and
                  easy freeway access.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Exploration Peak Park
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mountain views
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Parks and recreation
                  </li>
                </ul>
                <Link
                  href="/neighborhoods/mountains-edge"
                  className="block mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Explore Mountains Edge →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Centennial Hills</h3>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">Named campuses</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$398K Median</div>
                <p className="text-slate-600 text-sm mb-4">
                  Northwest Las Vegas near Centennial Hills Hospital. Arbor View High School commute,
                  parks, and Red Rock Canyon proximity.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Arbor View High School commute
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Near outdoor recreation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Medical facilities nearby
                  </li>
                </ul>
                <Link
                  href="/neighborhoods/centennial-hills"
                  className="block mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Explore Centennial Hills →
                </Link>
              </div>
            </div>
          </section>

          {/* Builder Incentives */}
          <section className="mb-16 bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">New Construction Incentives</h2>
            </div>
            <p className="text-center text-green-100 mb-8 max-w-2xl mx-auto">
              Las Vegas builders are offering incredible incentives that can make new homes more
              affordable than resale properties. These incentives are available NOW:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">6%</div>
                <div className="text-green-100">Closing Cost Credits</div>
                <p className="text-sm text-green-200 mt-2">
                  Thousands toward your closing costs
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">4.99%</div>
                <div className="text-green-100">Rate Buydowns</div>
                <p className="text-sm text-green-200 mt-2">
                  Below-market interest rates
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">$50K</div>
                <div className="text-green-100">Free Upgrades</div>
                <p className="text-sm text-green-200 mt-2">
                  Design center credits included
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/new-construction"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-md font-bold hover:bg-green-50 transition-colors"
              >
                View Builder Incentives →
              </Link>
            </div>
          </section>

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
