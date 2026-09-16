import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Phone, Mail, MapPin, Clock, Calendar, Star, MessageSquare } from "lucide-react";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
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

import { ctaPhone, smsPhone, nap, maps, googleReviewsUrl, hoursSummary, businessHours } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact Craig Ranch Homes | Dr. Jan Duffy | (702) 820-5408",
  description:
    "Call or text (702) 820-5408. Craig Ranch Homes, 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Service area: North Las Vegas, NV 89031. Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday closed.",
  keywords: [
    "contact Craig Ranch Homes",
    "Dr. Jan Duffy phone",
    "North Las Vegas realtor contact",
    "Craig Ranch real estate office",
    "851 W Lone Mountain Rd",
  ],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: nap.name,
    telephone: ctaPhone.tel,
    email: nap.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.state,
      postalCode: nap.zip,
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Craig Ranch Homes · North Las Vegas 89031
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Contact Craig Ranch Homes
            </h1>
            <HeadingPhoto path="/contact" />

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Questions about buying or selling in Craig Ranch? Call or text{" "}
              <strong>{ctaPhone.display}</strong>. Office at {nap.fullAddress}. Hours: {hoursSummary}.
            </p>
            <CtaActions variant="onLight" bookLabel="Book a Consultation" />
          <OfficeProximity path="/contact" />
          <UniqueInterior path="/contact" />
          <ExpertQuote path="/contact" />

          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div>
              <LeftoverBand path="/contact" />

              {/* NAP Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call</h3>
                    <a
                      href={ctaPhone.href}
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      {ctaPhone.display}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Google Business phone — Dr. Jan answers this number
                    </p>
                    <a
                      href={smsPhone.href}
                      className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
                      Text {smsPhone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={nap.emailHref}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {nap.email}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Typically respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <address className="not-italic text-slate-700">
                      {nap.name}<br />
                      {nap.street}<br />
                      {nap.city}, {nap.state} {nap.zip}
                    </address>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-700">{hoursSummary}</p>
                    <ul className="text-sm text-slate-600 mt-2 space-y-0.5">
                      {businessHours.map((row) => (
                        <li key={row.day} className="flex justify-between gap-4 max-w-xs">
                          <span>{row.day}</span>
                          <span>{row.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <iframe
                  src={maps.embedSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map to ${nap.name} at ${nap.fullAddress}`}
                  className="w-full"
                />
              </div>
              
              {/* Map Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px]"
                >
                  <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px]"
                >
                  <Star className="h-4 w-4 mr-2" aria-hidden="true" />
                  View Google Reviews
                </a>
              </div>

              {/* Credentials */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>{nap.shortName}, REALTOR®</strong><br />
                  License {nap.license}<br />
                  {nap.brokerage}<br />
                  {nap.fullAddress}
                </p>
              </div>
            </div>

            {/* Schedule Appointment - Calendly Widget */}
            <div>
              <div id="schedule" className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto mb-3" />
                  <h2 className="text-2xl font-bold mb-2">Book Calendly for Suite 103, a phone consult, or a showing</h2>
                  <p className="text-blue-100">
                    Book a time that works for you—phone consultation, property showing, 
                    or in-person meeting at our office.
                  </p>
                </div>
                <CalendlyWidget height="600px" />
              </div>
            </div>
          </div>

          <ProcessSteps path="/contact" />

          {/* Service Areas Section */}
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Service area: North Las Vegas, NV 89031
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Craig Ranch Homes focuses on Craig Ranch, ZIP 89031. Tours start at {nap.fullAddress}.
              Call or text {ctaPhone.display}. Hours: {hoursSummary}.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Craig Ranch",
                "North Las Vegas 89031",
                "Centennial Hills",
                "Aliante",
                "Skye Canyon",
                "Nellis AFB commute",
                "Lone Mountain",
                "North Las Vegas",
              ].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                  <span className="text-slate-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </section>

          <LeftoverBand path="/contact" slot={1} />

          <SupportFaqs path="/contact" />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
