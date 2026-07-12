"use client";

import { useEffect } from "react";
import { Phone, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Something Went Wrong</h1>
        <p className="text-slate-600 mb-8">
          We hit an unexpected error loading this page. Please try again, or call Dr. Jan Duffy
          directly for immediate assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Try Again
          </button>
          <a
            href="tel:+17025001942"
            className="inline-flex items-center justify-center bg-slate-100 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-slate-200 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            (702) 500-1942
          </a>
        </div>
      </div>
    </div>
  );
}
