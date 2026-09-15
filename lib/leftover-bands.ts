/**
 * Unique leftover H2 interiors — not swapped Premier / Core Services /
 * Why Active Adults / Local Expert templates.
 * Fair Housing: square footage, amenities, named campuses, commute minutes.
 * Dated 2026-09-15.
 */

export type LeftoverPin = {
  name: string;
  note: string;
};

export type LeftoverCopy = {
  h2: string;
  body: string;
  pins: LeftoverPin[];
};

export const leftoverBands: Record<string, LeftoverCopy[]> = {
  "/55-plus-communities/sun-city-anthem": [
    {
      h2: "Anthem Center 64,000 sq ft, then Liberty, Independence, and Heritage by elevation",
      body: "Sun City Anthem is 30–35 minutes from 9406 W Lake Mead Blvd, Suite 100. Occupancy rules are reviewed at the desk before the Henderson drive. Call (702) 222-1964. Do not mix this with a Summerlin 55+ morning.",
      pins: [
        {
          name: "Anthem Center",
          note: "About 64,000 sq ft: indoor and outdoor pools, fitness, tennis, pickleball, restaurant. First stop on this Henderson clock.",
        },
        {
          name: "Liberty",
          note: "Original phase near Anthem Center. Published January 2026 band starts near $350K. Confirm the week you tour.",
        },
        {
          name: "Independence",
          note: "Mid-elevation streets. Published band often $450K–$700K. McCullough Range views vary by lot — measure from the listing.",
        },
        {
          name: "Heritage",
          note: "Larger lots and custom product. Published band $700K–$1.2M. Call (702) 222-1964. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/55-plus-communities": [
    {
      h2: "Occupancy packets at Suite 100, then one rec campus — not a slogan grid",
      body: "HOPA occupancy is reviewed at 9406 W Lake Mead Blvd before we drive. Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. Call (702) 222-1964. Nevada has no state income tax; HOA dues still apply.",
      pins: [
        {
          name: "HOA-maintained exteriors",
          note: "Packet lists what the HOA paints and what you maintain. We read it at the desk, then walk one rec building.",
        },
        {
          name: "Named rec square footage",
          note: "Anthem Center is about 64,000 sq ft. Sun City Summerlin has four rec campuses. Trilogy is clubhouse-scale. Pick one afternoon.",
        },
        {
          name: "Clubs and rec programming",
          note: "Club lists sit in the packet. We do not sell a calendar caption. Confirm current clubs the week you tour.",
        },
        {
          name: "Guard lists vs open streets",
          note: "Heritage at Stonebridge is a staffed gate. Sun City Summerlin is not one gate. Ask which applies before the showing clock.",
        },
      ],
    },
  ],
  "/buyers/luxury-homes-las-vegas": [
    {
      h2: "Ridges gate, MacDonald Strip view, or Lake Las Vegas shoreline — pick the first clock",
      body: "This URL is buyer luxury search. Gate codes stay off group texts. The /luxury-homes hub is listing-or-search intake. Call (702) 222-1964 from 9406 W Lake Mead Blvd, Suite 100.",
      pins: [
        {
          name: "The Ridges",
          note: "15–20 minutes to the guardhouse. Bear's Best, Falcon Ridge, Azure, Talon Ridge, Silver Ridge, Eagle Hills. Published bands $1.5M–$10M+.",
        },
        {
          name: "MacDonald Highlands / Ascaya",
          note: "Henderson elevated lots and DragonRidge. Strip-view streets are timed on an east afternoon, not stacked with Ridges gates.",
        },
        {
          name: "Southern Highlands",
          note: "25–35 minutes via I-15 south. Robert Trent Jones Jr. card 74.1 / 140. Harry Reid International (LAS) is the airport name.",
        },
        {
          name: "Lake Las Vegas / high-rise",
          note: "Lake Las Vegas is 35–45 minutes. Waldorf Astoria and Veer are lock-and-leave product — HOA and rental caps checked at the desk.",
        },
      ],
    },
  ],
  "/luxury-homes": [
    {
      h2: "Drone, floor plans, and paid placement — initialed before listing day",
      body: "Marketing is a punch list at Suite 100, not a slogan. HOA drone rules and gate vendor lists are confirmed before photographer day. Call (702) 222-1964.",
      pins: [
        {
          name: "Photography scoped in writing",
          note: "Drone, twilight, and floor plans are named on the listing agreement. Social stays off until you initial the set.",
        },
        {
          name: "Off-market window",
          note: "Private showing blocks are booked from 9406 W Lake Mead Blvd. Addresses stay off unsecured threads.",
        },
        {
          name: "Buyer search vs listing hub",
          note: "Buyer-only search lives at /buyers/luxury-homes-las-vegas. This page is listing or search intake for either side.",
        },
        {
          name: "Paid placement punch list",
          note: "BHHS syndication is scoped before go-live. We do not promise a portal we cannot name. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/services": [
    {
      h2: "Buyer, listing, 55+, and relocation desks — pick the file type first",
      body: "Each service meeting starts at 9406 W Lake Mead Blvd, Suite 100 so MLS, showing routes, and BHHS paperwork share one start. Call (702) 222-1964.",
      pins: [
        {
          name: "Buyer representation",
          note: "Open /buyers. Lender letter and two-ZIP tours. RealScout holds live MLS.",
        },
        {
          name: "Listing and CMA",
          note: "Open /sellers or /home-valuation. Comps at the desk, then photos at the house.",
        },
        {
          name: "55+ occupancy",
          note: "Open /55-plus-communities. HOPA rules before any clubhouse. Sun City Summerlin is 10–15 minutes.",
        },
        {
          name: "California inbound",
          note: "Open /buyers/california-relocator. Net proceeds vs ZIP targets, then a three-day itinerary.",
        },
      ],
    },
    {
      h2: "Investor math, new-construction registration, and 55+ packets — not a second slogan grid",
      body: "Specialized files still start at Suite 100. Builder registration happens before any model row. HOA rental caps are checked before you fly in. Call (702) 222-1964.",
      pins: [
        {
          name: "Investment",
          note: "Open /investment-properties. Rent comps and HOA rental rules before the area drive.",
        },
        {
          name: "New construction",
          note: "Open /new-construction. Register Dr. Jan at Suite 100 before Skye Canyon, Inspirada, or Cadence models.",
        },
        {
          name: "Relocation calendar",
          note: "Open /relocation. Summerlin day, Henderson day, 55+ or builder day — not four I-15 crossings.",
        },
        {
          name: "Valuation",
          note: "Open /home-valuation. Bring the APN. We do not price from a Zestimate screenshot.",
        },
      ],
    },
  ],
  "/listings": [
    {
      h2: "Village cards with January 2026 medians — commute minutes from Suite 100",
      body: "This hub is inventory. Neighborhood pages hold named campuses and parks. Filter here, then call (702) 222-1964. We will not tour twelve ZIPs in one afternoon.",
      pins: [
        {
          name: "Summerlin $625K",
          note: "10–15 minutes. 342 listings and 22 DOM on the January 2026 snapshot. Palo Verde High School commute mapped by address.",
        },
        {
          name: "Henderson $485K",
          note: "25–35 minutes via I-215 east. Parks and rec campuses compared by acreage, not a slogan.",
        },
        {
          name: "The Ridges $2.5M",
          note: "15–20 minutes to the guardhouse. Gate list from Suite 100.",
        },
        {
          name: "North Las Vegas $385K",
          note: "Aliante rec first. Legacy High School commute at ccsd.net/zoning. Not a Summerlin swap.",
        },
      ],
    },
  ],
  "/why-berkshire-hathaway": [
    {
      h2: "License S.0197614.LLC at Suite 100 — the parent company is on the letterhead",
      body: "Ask who photographs, who writes remarks, who negotiates. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Closed volume cited on this site: $127M+ since 2008.",
      pins: [
        {
          name: "Brokerage on the contract",
          note: "BHHS Nevada Properties is the named brokerage. Samples are reviewed at this pin before you sign.",
        },
        {
          name: "Referral desk",
          note: "Inbound California and outbound states are briefed from Suite 100. Local showings still start here.",
        },
        {
          name: "Closed-file street comps",
          note: "Ask for recent closes on your street. We will not invent a price. Office/GBP (702) 500-1942.",
        },
        {
          name: "Meet the agent page",
          note: "Open /about for license card photos and office hours. The work is the agent; the parent is Berkshire Hathaway Inc.",
        },
      ],
    },
  ],
  "/new-construction": [
    {
      h2: "Register at Suite 100, then one builder corridor — Toll, Lennar, KB, or Shea",
      body: "Most Las Vegas and Henderson builders require your agent on the first visit. Register Dr. Jan Duffy at 9406 W Lake Mead Blvd before Skye Canyon, Inspirada, or Cadence. Call (702) 222-1964.",
      pins: [
        {
          name: "Toll Brothers",
          note: "Mesa Ridge, Reverence, Inspirada, Lake Las Vegas, The Ridges. Design-studio credits change weekly — confirm the week you register.",
        },
        {
          name: "Lennar",
          note: "Cadence, Inspirada, Valley Vista, Skye Hills. Rate-buydown flyers expire. Do not rely on last month's sheet.",
        },
        {
          name: "KB Home",
          note: "North Las Vegas and southwest Built to Order rows. Registration first, models second.",
        },
        {
          name: "Shea / Pulte / Taylor Morrison",
          note: "Trilogy, Inspirada, Cadence, Mountains Edge. One corridor per afternoon from this pin.",
        },
      ],
    },
  ],
  "/google-business": [
    {
      h2: "Maps, hours, and reviews on this URL must match the Business Profile",
      body: "Name, address, and office line (702) 500-1942 match GBP. Client CTA (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Inconsistent NAP is a Maps ranking leak.",
      pins: [
        {
          name: "Call",
          note: "Use the Call button on this page. Do not swap the office line with the client CTA.",
        },
        {
          name: "Directions",
          note: "The map pin is this Suite 100 address. Visitor parking faces W Lake Mead Blvd.",
        },
        {
          name: "View Google Reviews",
          note: "Review schema and the GBP reviews link stay on this page so Maps and the website agree.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. If GBP hours change, this page updates the same day.",
        },
      ],
    },
  ],
};
