import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

// Required by @cloudflare/next-on-pages: every non-static route (including the
// built-in not-found page) must declare an Edge-compatible runtime.
export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-lg font-semibold text-blue-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-md text-slate-600">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track to finding your Las Vegas or
          Henderson home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            <Search className="h-4 w-4" />
            Search Listings
          </Link>
          <a
            href="tel:+17022221964"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            <Phone className="h-4 w-4" />
            (702) 222-1964
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
