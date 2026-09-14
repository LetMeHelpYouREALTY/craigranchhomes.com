import Link from "next/link";
import { Phone, Mail, Calendar } from "lucide-react";
import { ctaPhone, nap } from "@/lib/contact";

type PageCTAProps = {
  headline?: string;
  subheadline?: string;
};

export default function PageCTA({
  headline = "Ready to Buy or Sell in Las Vegas?",
  subheadline = "Call or text Dr. Jan Duffy. She answers her own phone.",
}: PageCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{headline}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={ctaPhone.href}
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
            Call {ctaPhone.display}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
            Send a Message
          </Link>
          <Link
            href="/contact#schedule"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
            Book a Showing
          </Link>
        </div>
        <p className="mt-6 text-blue-200 text-sm">
          {nap.shortName} | License {nap.license} | {nap.brokerage}
        </p>
        <p className="mt-2 text-blue-200 text-sm">{nap.fullAddress}</p>
      </div>
    </section>
  );
}
