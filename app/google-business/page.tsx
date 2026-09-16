import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { leftoverPhotoForPath } from "@/lib/media";
import {
  ctaPhone,
  smsPhone,
  nap,
  maps,
  googleReviewsUrl,
  businessHours,
} from "@/lib/contact";

import {
  businessInfo,
  generateLocalBusinessSchema,
} from "@/lib/gbp-schema";

export const metadata: Metadata = pageMetadata({
  path: "/google-business",
  title: "Craig Ranch Homes | Google Business Profile | Dr. Jan Duffy, REALTOR®",
  description:
    "Craig Ranch Homes, 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Call or text (702) 820-5408. Service area North Las Vegas, NV 89031. Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday closed.",
  keywords: [
    "Craig Ranch Homes",
    "Google Business Profile North Las Vegas",
    "Dr. Jan Duffy realtor",
    "851 W Lone Mountain Rd",
    "Craig Ranch ZIP 89031",
  ],
  openGraph: {
    title: "Craig Ranch Homes — Dr. Jan Duffy, REALTOR®",
    description:
      "Hyperlocal Craig Ranch real estate. Opening date September 2007. Call or text (702) 820-5408.",
    url: "https://www.craigranchhomes.com/google-business",
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
                      Craig Ranch Homes
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Craig Ranch Homes</h1>
            <HeadingPhoto path="/google-business" />

                  <p className="text-xl text-blue-200 mb-2">
                    Dr. Jan Duffy, REALTOR® | License {businessInfo.license}
                  </p>
                  <p className="text-slate-300 mb-6">{nap.brokerage}</p>

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
                      <MessageSquare className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-blue-300">Text (GBP primary)</p>
                        <a href={smsPhone.href} className="font-medium hover:text-blue-300">
                          {smsPhone.display}
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

          <section
            className="max-w-5xl mx-auto mb-16"
            data-leftover-band="/google-business#2"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Mon–Fri 9am–6pm, Sat 10am–4pm at Suite 103 — Sunday closed
            </h2>
            <HeadingPhoto
              path="/google-business"
              level="h2"
              photo={leftoverPhotoForPath("/google-business", 2)}
              priority
            />
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">
              Hours on this URL must match Google Business. Walk-ins welcome Monday–Saturday during
              posted hours. Call or text {ctaPhone.display}. {nap.fullAddress}. Sunday closed.
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-900">Posted hours grid</p>
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

          <section
            className="max-w-5xl mx-auto mb-16"
            data-leftover-band="/google-business#3"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Maps pin at 851 W Lone Mountain Rd — Directions and Google Reviews on this URL
            </h2>
            <HeadingPhoto
              path="/google-business"
              level="h2"
              photo={leftoverPhotoForPath("/google-business", 3)}
              priority
            />
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">
              The embed, Get Directions, and View Google Reviews buttons are the GBP actions. Call
              or text (702) 820-5408. License S.0197614.LLC. Berkshire Hathaway HomeServices Nevada
              Properties.
            </p>
<div className="rounded-xl overflow-hidden border border-slate-200 mb-6">
              <iframe
                title="Map to Berkshire Hathaway HomeServices Nevada Properties, 851 W Lone Mountain Rd"
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

          <LeftoverBand path="/google-business" slot={1} />

          <LeftoverBand path="/google-business" />

          <SupportFaqs path="/google-business" />

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Write the GBP review on this URL — Maps ranking uses the Suite 103 pin
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
              <h2 className="text-3xl font-bold mb-4">The Maps pin is 851 W Lone Mountain Rd, Suite 103 — start there</h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact Craig Ranch Homes for a consultation about buying or selling in ZIP 89031.
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
