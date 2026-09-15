import { ctaPhone, maps, nap, officePhone } from "@/lib/contact";

type PlaceDrive = {
  place: string;
  driveMinutes: string;
  note: string;
};

const byPath: Record<string, PlaceDrive> = {
  "/neighborhoods/summerlin": {
    place: "Summerlin",
    driveMinutes: "10–15 minutes",
    note: "Village tours in The Trails, Pueblo, and Red Rock Country Club can start the same afternoon as an office meeting.",
  },
  "/neighborhoods/the-ridges": {
    place: "The Ridges",
    driveMinutes: "15–20 minutes",
    note: "Guard-gate check-in is coordinated in advance so estate showings stay on schedule.",
  },
  "/neighborhoods/southern-highlands": {
    place: "Southern Highlands",
    driveMinutes: "25–35 minutes via I-15 south",
    note: "Golf-course and ridge-top listings are typically grouped into one south-valley tour block.",
  },
  "/neighborhoods/skye-canyon": {
    place: "Skye Canyon",
    driveMinutes: "20–25 minutes via the 215",
    note: "New-construction model rows and resale streets can be seen in one northwest loop.",
  },
  "/neighborhoods/centennial-hills": {
    place: "Centennial Hills",
    driveMinutes: "15–20 minutes via US-95",
    note: "Mountain-view streets near Floyd Lamb Park are a short hop from the office pin.",
  },
  "/neighborhoods/green-valley": {
    place: "Green Valley",
    driveMinutes: "25–35 minutes via I-215 east",
    note: "The District at Green Valley Ranch is a practical midpoint for Henderson listing tours.",
  },
  "/neighborhoods/inspirada": {
    place: "Inspirada",
    driveMinutes: "30–40 minutes",
    note: "Amenity-center and builder-row tours are scheduled as a south Henderson block.",
  },
  "/neighborhoods/henderson": {
    place: "Henderson",
    driveMinutes: "25–35 minutes",
    note: "Green Valley, Anthem, Inspirada, and Water Street stops are planned from the same office start.",
  },
  "/neighborhoods/mountains-edge": {
    place: "Mountains Edge",
    driveMinutes: "20–30 minutes via the southwest Beltway",
    note: "Exploration Peak trailheads and resale streets fit a single southwest loop.",
  },
  "/neighborhoods/north-las-vegas": {
    place: "North Las Vegas",
    driveMinutes: "20–25 minutes via US-95 / I-15",
    note: "Aliante, Craig Road employment corridors, and new-construction villages are grouped together.",
  },
  "/55-plus-communities/sun-city-summerlin": {
    place: "Sun City Summerlin",
    driveMinutes: "10–15 minutes",
    note: "Three golf campuses and four recreation centers can be previewed without a long freeway run.",
  },
  "/55-plus-communities/sun-city-anthem": {
    place: "Sun City Anthem",
    driveMinutes: "30–35 minutes",
    note: "Anthem Center and upper-elevation streets are scheduled as a Henderson 55+ block.",
  },
  "/55-plus-communities/trilogy-summerlin": {
    place: "Trilogy at Summerlin",
    driveMinutes: "12–18 minutes",
    note: "Clubhouse, spa, and Shea plan rows sit on the same west-valley side as the office.",
  },
  "/55-plus-communities/heritage-stonebridge": {
    place: "Heritage at Stonebridge",
    driveMinutes: "12–18 minutes",
    note: "The 24/7 gate and Downtown Summerlin retail are a short west-valley hop from Lake Mead Blvd.",
  },
  "/55-plus-communities/solera-anthem": {
    place: "Solera at Anthem",
    driveMinutes: "30–35 minutes",
    note: "This smaller 55+ campus is toured with nearby Anthem parks rather than a valley-wide hopscotch.",
  },
  "/55-plus-communities/sun-city-aliante": {
    place: "Sun City Aliante",
    driveMinutes: "20–25 minutes",
    note: "The 18-hole course and rec campus sit next to the Aliante retail strip for a compact north tour.",
  },
  "/55-plus-communities/del-webb-lake-las-vegas": {
    place: "Del Webb at Lake Las Vegas",
    driveMinutes: "35–45 minutes",
    note: "Lake-adjacent plans and Reflection Bay golf are blocked as an east-Henderson half day.",
  },
};

type OfficeProximityProps = {
  path: string;
};

export default function OfficeProximity({ path }: OfficeProximityProps) {
  const row = byPath[path];
  if (!row) return null;

  return (
    <aside className="max-w-4xl mx-auto mb-16 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-3">
        Drive time from {nap.street} to {row.place}
      </h2>
      <p className="text-slate-700 mb-4">
        Showings start from Berkshire Hathaway HomeServices Nevada Properties at {nap.fullAddress}.
        Typical drive to {row.place} is {row.driveMinutes}. {row.note}
      </p>
      <p className="text-sm text-slate-600 mb-4">
        Office (matches Google Business): {officePhone.display}. Call or text {ctaPhone.display}. Hours:
        Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={ctaPhone.href}
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Call {ctaPhone.display}
        </a>
        <a
          href={maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-white"
        >
          Directions to the office
        </a>
        <a
          href={maps.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-white"
        >
          Open in Google Maps
        </a>
      </div>
    </aside>
  );
}
