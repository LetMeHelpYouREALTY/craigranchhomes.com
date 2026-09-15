import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Award,
  Users,
  Home,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import {
  ctaPhone,
  officePhone,
  nap,
  maps,
  googleReviewsUrl,
  hoursSummary,
  businessHours,
} from "@/lib/contact";

import {
  businessInfo,
  gbpDescription,
  generateLocalBusinessSchema,
} from "@/lib/gbp-schema";

export const metadata: Metadata = pageMetadata({
  path: "/google-business",
  title: "Dr. Jan Duffy, REALTOR® Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Dr. Jan Duffy is a trusted Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Specializing in Summerlin, Henderson, 55+ communities, California relocation, and luxury homes. Call (702) 222-1964.",
  keywords: [
    "Dr. Jan Duffy realtor",
    "Las Vegas real estate agent",
    "Berkshire Hathaway HomeServices Las Vegas",
    "Summerlin realtor",
    "Henderson real estate agent",
    "55+ communities Las Vegas",
    "California relocation Las Vegas",
  ],
  openGraph: {
    title: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    description:
      "Trusted Las Vegas REALTOR® serving since 2008. Summerlin, Henderson, luxury homes, 55+ communities.",
    url: "https://heyberkshire.com/google-business",
    type: "profile",
  },
});

export default function GoogleBusinessPage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                    <span className="text-yellow-400 font-semibold">
                      Berkshire Hathaway HomeServices
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Jan Duffy</h1>
            <HeadingPhoto path="/google-business" />

                  <p className="text-xl text-blue-200 mb-2">
                    REALTOR® | License {businessInfo.license}
                  </p>
                  <p className="text-slate-300 mb-6">Nevada Properties</p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium">{nap.street}</p>
                        <p>
                          {nap.city}, {nap.state} {nap.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-blue-300">Call / text</p>
                        <a href={ctaPhone.href} className="font-medium hover:text-blue-300">
                          {ctaPhone.display}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-blue-300">
                          Office (matches Google Business)
                        </p>
                        <a href={officePhone.href} className="font-medium hover:text-blue-300">
                          {officePhone.display}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                      <a href={`mailto:${nap.email}`} className="hover:text-blue-300">
                        {nap.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-4" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold mb-2">4.9 / 5.0</p>
                  <p className="text-blue-200 mb-6">200+ Client Reviews</p>
                  <CtaActions variant="onDark" />
                </div>
              </div>
            </div>
          </section>
          <OfficeProximity path="/google-business" />
          <UniqueInterior path="/google-business" />
          <ExpertQuote path="/google-business" />

          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <h2 className="text-xl font-bold text-slate-900">Business Hours</h2>
              </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {businessHours.map((row) => (
                  <div key={row.day}>
                    <span className="font-medium">{row.day}:</span> {row.label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Visit the Office</h2>
<div className="rounded-xl overflow-hidden border border-slate-200 mb-6">
              <iframe
                title="Map to Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd"
                src={maps.embedSrc}
                className="w-full h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Get Directions
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50"
              >
                View Google Reviews
              </a>
              <a
                href={ctaPhone.href}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50"
              >
                Call {ctaPhone.display}
              </a>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">{nap.fullAddress}</p>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Dr. Jan Duffy</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Experience & Background
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whoWeAre}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Services & Value
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whatWeDo}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Areas Served
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whereWeServe}</p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Real Estate Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {businessInfo.services.map((service) => (
                <div
                  key={service.name}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{service.name}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Service Areas</h2>
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Primary Markets</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" /> Las Vegas, NV
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" /> Summerlin, NV
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Secondary Markets</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" /> Henderson, NV
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" /> North Las Vegas, NV
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Full Coverage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" /> Clark County, NV
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" /> All Las Vegas Valley
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">Neighborhood Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Summerlin", slug: "summerlin" },
                    { name: "Henderson", slug: "henderson" },
                    { name: "Green Valley", slug: "green-valley" },
                    { name: "The Ridges", slug: "the-ridges" },
                    { name: "Southern Highlands", slug: "southern-highlands" },
                    { name: "Centennial Hills", slug: "centennial-hills" },
                    { name: "Skye Canyon", slug: "skye-canyon" },
                    { name: "Inspirada", slug: "inspirada" },
                    { name: "Mountains Edge", slug: "mountains-edge" },
                    { name: "North Las Vegas", slug: "north-las-vegas" },
                  ].map((area) => (
                    <Link
                      key={area.slug}
                      href={`/neighborhoods/${area.slug}`}
                      className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-blue-100 transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <SupportFaqs path="/google-business" />

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Your Review Helps Others Find Quality Service
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If Dr. Jan helped you buy or sell a home, please consider sharing your experience.
                Mention your neighborhood, type of transaction, and what made the experience valuable.
              </p>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact Dr. Jan Duffy for a free consultation about buying or selling in Las Vegas.
              </p>
              <CtaActions variant="onDark" />
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
    </>
  );
}
