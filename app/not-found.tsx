import type { Metadata } from "next";
import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

// Ensures the 404 page itself is never indexed as if it were real content
// (a "soft 404" that gets indexed is a common, easy-to-miss SEO bug).
export const metadata: Metadata = {
  title: "Page Not Found | Dr. Jan Duffy, REALTOR®",
  description:
    "The page you're looking for can't be found. Search Las Vegas homes for sale or contact Dr. Jan Duffy at (702) 500-1942.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-blue-600 font-bold text-lg mb-2">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We Couldn't Find That Page
          </h1>
          <p className="text-lg text-slate-600 mb-10">
            The page you're looking for may have moved or no longer exists. Let's get you back on
            track to finding your next Las Vegas home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Homepage
            </Link>
            <Link
              href="/listings"
              className="inline-flex items-center justify-center bg-slate-100 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-slate-200 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Listings
            </Link>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center justify-center bg-white border border-slate-300 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-slate-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              (702) 500-1942
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
