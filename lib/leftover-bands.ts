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
    {
      h2: "License S.0197614.LLC, Suite 100 hours, and the Maps pin on one URL",
      body: "This About band is for Google Business Profile alignment. Who, what, and where live here so GBP and heyberkshire.com do not drift. Call (702) 222-1964. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Who",
          note: "Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Closed volume cited on this site: $127M+ since 2008.",
        },
        {
          name: "What",
          note: "Buyer, listing, 55+ occupancy, California inbound, and new-construction registration. MLS is RealScout. Scheduling is Calendly.",
        },
        {
          name: "Where",
          note: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Summerlin 10–15 minutes. Henderson 25–35 via I-215 east.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. Match GBP the same day hours change.",
        },
      ],
    },
  ],
  "/sellers": [
    {
      h2: "Photographer, remarks, and comps scoped at Suite 100 before go-live",
      body: "Listing files start at 9406 W Lake Mead Blvd, Suite 100. Photos and MLS remarks wait until the walkthrough. Call (702) 222-1964. We do not promise a portal we cannot name.",
      pins: [
        {
          name: "BHHS syndication punch list",
          note: "MLS plus named BHHS channels are initialed before live. Social stays off until you approve the set.",
        },
        {
          name: "Street comps, not a Zestimate",
          note: "Bring the APN. January 2026 valley median cited on this site is $450K; your street is a different file.",
        },
        {
          name: "Offer terms at the desk",
          note: "Inspection, appraisal, and occupancy dates are drafted before you leave Suite 100.",
        },
        {
          name: "Net sheet",
          note: "HOA, title, and payoff lines are written here. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "CMA at the desk, photos at the house, then MLS — that is the listing clock",
      body: "The selling sequence is dated at Suite 100. We do not skip the walkthrough. Call (702) 222-1964.",
      pins: [
        {
          name: "Valuation",
          note: "Open /home-valuation. Comps at 9406 W Lake Mead Blvd before photographer day.",
        },
        {
          name: "Prep punch list",
          note: "Paint, repairs, and staging are named in writing. We do not sell a caption.",
        },
        {
          name: "Photography and MLS",
          note: "Drone rules and HOA vendor lists confirmed before the shoot. Then MLS go-live.",
        },
        {
          name: "Contract to close",
          note: "Inspections and appraisal language live on the file. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Move-up, downsize, probate, or outbound sale — open the matching seller URL",
      body: "/sellers/move-up, /sellers/downsizing, /sellers/divorce-probate, and /sellers/relocation are separate clocks from Suite 100. Call (702) 222-1964.",
      pins: [
        {
          name: "Move-up",
          note: "Sale and next purchase share one west-valley start. Contingent vs cash is a numbers talk.",
        },
        {
          name: "Downsize",
          note: "List the larger home or tour Sun City Summerlin the same afternoon — 10–15 minutes from this pin.",
        },
        {
          name: "Divorce or probate",
          note: "Court orders and lockbox rules at Suite 100, not the lobby. Private slot required.",
        },
        {
          name: "Outbound relocation",
          note: "Las Vegas closing dates lined up with the next city. BHHS destination agent briefed from this desk.",
        },
      ],
    },
  ],
  "/sellers/downsizing": [
    {
      h2: "List the larger house, then one 55+ rec campus — same afternoon from Suite 100",
      body: "Sun City Summerlin is 10–15 minutes from 9406 W Lake Mead Blvd. Occupancy rules are reviewed before the clubhouse. Call (702) 222-1964. Do not guess at square footage you have not walked.",
      pins: [
        {
          name: "Sun City Summerlin",
          note: "Four rec campuses. Published January 2026 band often $375K–$650K. Confirm the week you tour.",
        },
        {
          name: "Sun City Anthem",
          note: "30–35 minutes. Anthem Center about 64,000 sq ft. Separate Henderson clock.",
        },
        {
          name: "Heritage at Stonebridge",
          note: "Staffed gate. Packet lists HOA-maintained exteriors. Open /55-plus-communities/heritage-stonebridge.",
        },
        {
          name: "Del Webb Lake Las Vegas",
          note: "35–45 minutes. 320-acre lake. Do not stack with a Summerlin 55+ morning.",
        },
      ],
    },
  ],
  "/sellers/move-up": [
    {
      h2: "2015–2021 purchase equity is a CMA at Suite 100, not a slogan",
      body: "If you bought in that window, bring the APN. We will not invent a gain. January 2026 DOM cited on this site is 28 days for priced-right listings. Call (702) 222-1964.",
      pins: [
        {
          name: "Centennial Hills to Summerlin",
          note: "Palo Verde High School commute mapped by next address at ccsd.net/zoning.",
        },
        {
          name: "Inspirada to Southern Highlands",
          note: "Published January 2026 bands ~$525K to $750K+. Robert Trent Jones Jr. card 74.1 / 140.",
        },
        {
          name: "Two stops from this pin",
          note: "Current house and next ZIP share 9406 W Lake Mead Blvd as the start.",
        },
        {
          name: "Contingent vs non-contingent",
          note: "Written at the desk before you list. Call (702) 222-1964.",
        },
      ],
    },
  ],
  "/sellers/relocation": [
    {
      h2: "Las Vegas sale calendar plus a named BHHS agent in the next city",
      body: "Outbound files start at Suite 100. Destination agents are briefed from 9406 W Lake Mead Blvd so two closings do not collide. Call (702) 222-1964.",
      pins: [
        {
          name: "Remote listing",
          note: "Photos, lockbox, and showing logs run from this desk. Addresses stay off group texts.",
        },
        {
          name: "50,000-agent desk, local file",
          note: "BHHS destination intro is a Suite 100 call. Local showings still start here until you leave.",
        },
        {
          name: "Two-contract calendar",
          note: "Bring both drafts. Occupancy dates are written before you fly.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964. Do not swap the lines.",
        },
      ],
    },
  ],
  "/sellers/divorce-probate": [
    {
      h2: "Court orders, lockbox rules, and showing logs at Suite 100 — not the lobby",
      body: "Confidential review is by appointment at 9406 W Lake Mead Blvd, Suite 100. Letters testamentary or court orders come with you. Call (702) 222-1964.",
      pins: [
        {
          name: "Divorce file",
          note: "Neutral process. Both attorneys on the written showing rules. No lobby briefings.",
        },
        {
          name: "Probate / estate",
          note: "Executor documents before the first lockbox. HOA contacts listed on the file.",
        },
        {
          name: "Access",
          note: "Preferred showing window in writing. We do not post occupancy gossip.",
        },
        {
          name: "Offers",
          note: "Documented, dated, and routed to counsel. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/relocation": [
    {
      h2: "No state income tax is a line item — then one Summerlin or Henderson clock",
      body: "Inbound math starts at 9406 W Lake Mead Blvd, Suite 100. Housing prices 40–60% below many California coastal cities is a comparison, not a guarantee. Call (702) 222-1964.",
      pins: [
        {
          name: "Nevada tax line",
          note: "No state income tax. HOA dues and property tax still apply. Run the sheet at the desk.",
        },
        {
          name: "Price comparison",
          note: "January 2026 valley median cited on this site: $450K. Confirm the week you tour.",
        },
        {
          name: "Trailheads and rec acres",
          note: "Golf and hiking are compared by acreage and minutes from Suite 100, not a slogan.",
        },
        {
          name: "Employers",
          note: "Sports, healthcare, and tech briefs are dated. We will not invent a job count.",
        },
      ],
    },
  ],
  "/market-report": [
    {
      h2: "January 2026 medians by ZIP — then a CMA on YOUR APN at Suite 100",
      body: "Valley snapshot: $450K median, 28 DOM, 4,850 active listings, 2.1 months inventory. Area cards are not a substitute for one address. Call (702) 222-1964.",
      pins: [
        {
          name: "Summerlin $625K",
          note: "22 DOM on the January 2026 snapshot. 10–15 minutes from Suite 100.",
        },
        {
          name: "Henderson $485K",
          note: "24 DOM. 25–35 minutes via I-215 east.",
        },
        {
          name: "North Las Vegas $385K",
          note: "32 DOM. Aliante rec first. Not a Summerlin swap.",
        },
        {
          name: "$1M+ $1.2M median",
          note: "45 DOM. Gate lists from 9406 W Lake Mead Blvd. Confirm the week you tour.",
        },
      ],
    },
  ],
  "/investment-properties": [
    {
      h2: "HOA rental caps and rent comps at Suite 100 before any area drive",
      body: "Cap-rate review happens at 9406 W Lake Mead Blvd. Then one ZIP cluster: North Las Vegas, Henderson, or southwest. Call (702) 222-1964. We check rental rules before you fly in.",
      pins: [
        {
          name: "No state income tax",
          note: "Nevada line item. HOA and property tax still apply. Run the sheet at the desk.",
        },
        {
          name: "North Las Vegas ~$385K",
          note: "Published January 2026 average on this page. Confirm rent comps the week you tour.",
        },
        {
          name: "Henderson ~$485K",
          note: "Separate east clock. HOA rental caps kill deals — packet first.",
        },
        {
          name: "1031 calendar",
          note: "Identification windows are dated. Bring the relinquished APN. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/home-valuation": [
    {
      h2: "Zestimate screenshots stay in the parking lot — comps are pulled at Suite 100",
      body: "Bring the APN to 9406 W Lake Mead Blvd. AVMs miss interiors and HOA packets. Call (702) 222-1964. A 10% miss on $450K is $45K — we will not invent your number.",
      pins: [
        {
          name: "MLS comps",
          note: "Recent closes on your street, not a portal average.",
        },
        {
          name: "Interior and HOA",
          note: "Condition, permits, and HOA rules are walked, then written.",
        },
        {
          name: "Buyer demand that week",
          note: "DOM and inventory move. The CMA is dated the day we pull it.",
        },
        {
          name: "No obligation to list",
          note: "Valuation first. Listing paperwork is a separate appointment.",
        },
      ],
    },
  ],
  "/buyers/first-time-buyers": [
    {
      h2: "FHA 3.5% at $498,257, VA 0% down, or a builder credit — pick the file type",
      body: "Lender letter is reviewed at 9406 W Lake Mead Blvd, Suite 100 before the first two-ZIP tour. 2026 FHA limit cited on this page: $498,257. Call (702) 222-1964. Confirm with your lender the week you write.",
      pins: [
        {
          name: "FHA",
          note: "3.5% down. Limit $498,257 on this page for 2026. Credit floors are lender-specific.",
        },
        {
          name: "VA",
          note: "Zero-down files for eligible veterans. Entitlement reviewed before models.",
        },
        {
          name: "Conventional / down-payment programs",
          note: "Nevada and Clark County flyers expire. Do not rely on last month's PDF.",
        },
        {
          name: "Builder registration",
          note: "Open /new-construction. Register Dr. Jan at Suite 100 before any model row.",
        },
      ],
    },
    {
      h2: "NLV from $350K, Centennial, or Green Valley — one ZIP, named campuses, commute minutes",
      body: "First-purchase tours start at Suite 100. Legacy High School, Arbor View, and Coronado High School commutes are mapped at ccsd.net/zoning by address. Call (702) 222-1964.",
      pins: [
        {
          name: "North Las Vegas",
          note: "Published band $350K–$450K on this page. New-construction rows after registration.",
        },
        {
          name: "Centennial Hills",
          note: "Northwest clock from W Lake Mead Blvd. Arbor View High School commute by street.",
        },
        {
          name: "Green Valley",
          note: "Henderson. Coronado High School commute mapped by address. 25–35 minutes.",
        },
        {
          name: "Do not tour twelve ZIPs",
          note: "One ZIP per afternoon. Seller-paid buyer-broker fee is typical here — confirm on the listing.",
        },
      ],
    },
  ],
};
