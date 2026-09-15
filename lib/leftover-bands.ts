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
  "/contact": [
    {
      h2: "Walk-in hours and (702) 222-1964 at Suite 100 — the Maps pin is this desk",
      body: "Berkshire Hathaway HomeServices Nevada Properties. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Client CTA (702) 222-1964. Office/GBP (702) 500-1942. Closed volume cited on this site: $127M+ since 2008. Map, Directions, and Google Reviews stay on this URL.",
      pins: [
        {
          name: "Call or text (702) 222-1964",
          note: "Dr. Jan answers this line. Do not swap it with the office number on Google.",
        },
        {
          name: "homes@heyberkshire.com",
          note: "Documents only. Do not send listing keys by unsecured email.",
        },
        {
          name: "9406 W Lake Mead Blvd, Suite 100",
          note: "Las Vegas, NV 89134. Visitor parking faces W Lake Mead Blvd.",
        },
        {
          name: "Hours on the GBP listing",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. Walk-ins welcome during posted hours.",
        },
      ],
    },
    {
      h2: "Call the client line or email Homes@HeyBerkshire.com from this URL",
      body: "Skip a second form if you already have the number. Call or text (702) 222-1964. Email homes@heyberkshire.com. Calendly is the appointment column on this page. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Client CTA",
          note: "(702) 222-1964. Same-day reply on the number you left.",
        },
        {
          name: "Email",
          note: "homes@heyberkshire.com. Typical reply within two hours during posted hours.",
        },
        {
          name: "Calendly column",
          note: "Phone consult, showing, or Suite 100 meeting. Bring photo ID and target ZIPs.",
        },
        {
          name: "Maps pin",
          note: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. License S.0197614.LLC.",
        },
      ],
    },
  ],
  "/market-insights": [
    {
      h2: "37% California in-migration, 0% NV state income tax, $1B+ data-center spend — apply at Suite 100",
      body: "Figures on this page are January 2026 snapshots. They are not a CMA for your APN. Call (702) 222-1964. We apply them at 9406 W Lake Mead Blvd, then drive one ZIP.",
      pins: [
        {
          name: "37% California buyers",
          note: "Cited on this page as a share of Las Vegas buyers. Confirm the week you write.",
        },
        {
          name: "0% Nevada state income tax",
          note: "Tax fact. HOA dues and property tax still apply. Run the sheet at the desk.",
        },
        {
          name: "$1B+ data-center investment",
          note: "Henderson corridor jobs. Commute minutes are mapped by address, not a slogan.",
        },
        {
          name: "45M annual visitors",
          note: "Hospitality demand is a metro input. Your listing still needs comps. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Switch, AWS, and Google power campuses in Henderson — 25–35 minutes from W Lake Mead Blvd",
      body: "Data-center jobs are an east-valley clock from Suite 100. Summerlin is a separate west loop. Call (702) 222-1964. Do not stack both in one afternoon.",
      pins: [
        {
          name: "Henderson corridor",
          note: "Google, Amazon Web Services, Switch, and related operators cited on this page.",
        },
        {
          name: "25–35 minute drive",
          note: "From 9406 W Lake Mead Blvd to Henderson listings. Confirm traffic the morning you tour.",
        },
        {
          name: "Fiber and power",
          note: "Infrastructure notes belong in the briefing. Square footage and HOA dues still decide the offer.",
        },
        {
          name: "Remote-pay files",
          note: "California paycheck vs Nevada tax line is a net-sheet item. Open /buyers/california-relocator.",
        },
      ],
    },
    {
      h2: "Bay Area and LA net sheets vs Summerlin or Henderson ZIP — video intake from Suite 100",
      body: "California remains the top inbound source cited on this page. $250K+ average equity is a snapshot, not your proceeds. Call (702) 222-1964. Four-hour drive or about a one-hour flight to most of California.",
      pins: [
        {
          name: "37% inbound share",
          note: "Cited here for Las Vegas buyers from California. Confirm with current MLS notes.",
        },
        {
          name: "$250K+ equity snapshot",
          note: "Average cited on this page. Your net is a California close plus Nevada purchase math.",
        },
        {
          name: "Bay Area and LA",
          note: "Primary source markets named on this URL. We time Summerlin vs Henderson before a tour week.",
        },
        {
          name: "CA tax line vs NV",
          note: "California state income tax bands cited here at 9.3%–13.3%. Nevada has no state income tax. HOA still applies.",
        },
      ],
    },
    {
      h2: "Allegiant Stadium, Summerlin medical corridor, Nevada film credits — one employer clock at the desk",
      body: "Diversification is three separate drives. Pick one employer cluster before we leave Suite 100. Call (702) 222-1964. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Allegiant Stadium district",
          note: "West Las Vegas hospitality and sports jobs. Not a Summerlin village swap.",
        },
        {
          name: "Medical corridors",
          note: "Henderson and Summerlin hospital campuses. Commute minutes mapped by address at the desk.",
        },
        {
          name: "Nevada film incentives",
          note: "Production and studio notes are dated. Confirm current credits the week you underwrite.",
        },
        {
          name: "One cluster per afternoon",
          note: "Do not tour stadium, hospital, and studio ZIPs in one loop. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Henderson Inspirada, Summerlin Ridges, Aliante rec, Mountains Edge trails — January 2026 ZIP notes",
      body: "Outlook copy on this page is a snapshot. Appreciation ranges are not a CMA. Call (702) 222-1964. Named villages and commute minutes beat a caption.",
      pins: [
        {
          name: "Henderson",
          note: "Inspirada, MacDonald Highlands, Green Valley Ranch. 25–35 minutes from Suite 100.",
        },
        {
          name: "Summerlin",
          note: "The Ridges, Paseos, Downtown Summerlin. 10–15 minutes. Palo Verde High School commute by street.",
        },
        {
          name: "North Las Vegas",
          note: "Aliante rec campus. Published entry bands live on /neighborhoods/north-las-vegas. Confirm the week you tour.",
        },
        {
          name: "Mountains Edge",
          note: "Exploration Peak trails. Southwest clock. Square footage vs new-construction rows after registration.",
        },
      ],
    },
    {
      h2: "Apply 2026 forces to one APN: buyer letter or listing CMA at 9406 W Lake Mead Blvd",
      body: "Inventory is wider than 2021–2023 on this page, but well-priced homes still move. Call (702) 222-1964. Builder credits belong on /new-construction after you register Dr. Jan.",
      pins: [
        {
          name: "Buyer letter first",
          note: "Pre-approval before a two-ZIP tour. RealScout holds live MLS. We sequence the drives.",
        },
        {
          name: "Henderson vs west Summerlin",
          note: "Job-corridor clocks are separate. Pick one afternoon.",
        },
        {
          name: "Builder credits",
          note: "Rate buydowns expire. Register at Suite 100 before any model row.",
        },
        {
          name: "Listing CMA",
          note: "Overpriced files sit. Correctly priced files on this page are cited under 30 DOM. Bring the APN.",
        },
      ],
    },
  ],
  "/market-update": [
    {
      h2: "$452,500 median, 847 sales, 4,892 listings, 26 DOM, 98.2% list-to-sale — not your street CMA",
      body: "This week's snapshot on this URL. Week deltas cited here: median +1.2%, sales +8.3%, listings -2.1%, DOM -2 days, list-to-sale +0.4%. Call (702) 222-1964. We will not price your house from a metro headline.",
      pins: [
        {
          name: "$452,500 median",
          note: "This week's figure on this page. January 2026 valley median elsewhere on the site is often cited near $450K.",
        },
        {
          name: "847 homes sold",
          note: "+8.3% vs last week on this page. Volume is not your offer strategy.",
        },
        {
          name: "4,892 active listings",
          note: "-2.1% vs last week. Inventory still needs your ZIP filter.",
        },
        {
          name: "26 DOM / 98.2% list-to-sale",
          note: "Urgency and close-to-ask are dated. Bring the APN to 9406 W Lake Mead Blvd.",
        },
      ],
    },
    {
      h2: "Ridges 8,400 sq ft custom closed at $4.2M in 12 days — one Summerlin gate file",
      body: "6 bed, 7 bath, 8,400 sq ft. Cited at 97% of ask vs a luxury-segment 67-day average on this page. Gate lists stay off group texts. Call (702) 222-1964 from Suite 100.",
      pins: [
        {
          name: "The Ridges",
          note: "15–20 minutes to the guardhouse from 9406 W Lake Mead Blvd. Confirm the list that morning.",
        },
        {
          name: "8,400 sq ft",
          note: "Square footage and bath count are the listing facts. Views vary by lot — measure from the file.",
        },
        {
          name: "12 days on market",
          note: "Below the luxury average cited here. Not a promise for the next Ridges listing.",
        },
        {
          name: "California inbound demand",
          note: "Named on this page as a luxury driver. Your buyer still needs a letter. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "26 DOM and 98.2% close-to-ask — write the offer or list price at Suite 100",
      body: "This week's story on this URL: modest +1.2% prices, +8.3% volume, -2.1% inventory. Call (702) 222-1964. A metro balance is not a CMA. Bring the address.",
      pins: [
        {
          name: "Buyer clock",
          note: "26-day average DOM. Lender letter before the first showing.",
        },
        {
          name: "Seller clock",
          note: "Near-ask closes when priced to comps. Overpricing costs days.",
        },
        {
          name: "Spring inventory",
          note: "If listings keep falling while sales hold, competition can tighten. Dated — re-check the week you list.",
        },
        {
          name: "BHHS paperwork",
          note: "Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC. RealScout holds the saved search.",
        },
      ],
    },
    {
      h2: "Pre-approval on a 26-day clock, or list before spring inventory — pick the file type",
      body: "Buyers: letter, then two ZIPs. Sellers: comps at the desk, then photos. Call (702) 222-1964. 98.2% list-to-sale on this page means deep discounts are uncommon this week.",
      pins: [
        {
          name: "Get the letter",
          note: "FHA, VA, or conventional compared at Suite 100 so the first appointment has a number.",
        },
        {
          name: "Price to comps",
          note: "Homes priced to the CMA are the ones hitting 26 DOM. We will not invent your number.",
        },
        {
          name: "Photos and HOA packet",
          note: "Presentation is a punch list. HOA dues beat a caption.",
        },
        {
          name: "Do not wait for a slogan season",
          note: "January/February inventory on this page can be thinner. Confirm the week you act.",
        },
      ],
    },
    {
      h2: "Summerlin $628K / 21 DOM vs Henderson $487,500 / 23 DOM vs Mountains Edge $478K / 26 DOM",
      body: "Area rows on this page are this week's snapshot. Central Las Vegas is cited at $425,000. Call (702) 222-1964. Two clocks from Suite 100 — not twelve ZIPs.",
      pins: [
        {
          name: "Summerlin $628,000",
          note: "142 sold, 21 DOM this week on this page. 10–15 minutes from W Lake Mead Blvd.",
        },
        {
          name: "Henderson $487,500",
          note: "198 sold, 23 DOM. 25–35 minutes. Separate east afternoon.",
        },
        {
          name: "Central Las Vegas $425,000",
          note: "Cited on this table. Confirm ZIP before you treat it as a Summerlin substitute.",
        },
        {
          name: "Mountains Edge $478,000",
          note: "64 sold, 26 DOM. Southwest clock. Square footage vs new-construction after registration.",
        },
      ],
    },
  ],
  "/neighborhoods": [
    {
      h2: "Open Summerlin or Green Valley first — 10–15 vs 25–35 minutes from Suite 100",
      body: "The card grid is a menu. The decision is a drive. Call (702) 222-1964. Named campuses and commute minutes are on each community page — not a slogan row.",
      pins: [
        {
          name: "Summerlin",
          note: "10–15 minutes. Red Rock trailheads and Downtown Summerlin on the same west clock.",
        },
        {
          name: "Green Valley / Henderson",
          note: "25–35 minutes. Tree canopy age and Coronado High School commute by address.",
        },
        {
          name: "The Ridges vs Southern Highlands",
          note: "Gate list vs I-15 south loop. Do not stack both on day one.",
        },
        {
          name: "North Las Vegas / Centennial Hills",
          note: "Aliante rec vs Arbor View High School commute. Open the page, then book.",
        },
      ],
    },
    {
      h2: "Two-ZIP tour, named-campus commute minutes, RealScout match — book from W Lake Mead Blvd",
      body: "Area tours start at 9406 W Lake Mead Blvd, Suite 100. We map Palo Verde, Coronado, Arbor View, and Legacy High School minutes at ccsd.net/zoning by address. Call (702) 222-1964.",
      pins: [
        {
          name: "Area tours",
          note: "One west loop or one Henderson loop. Parking, trees, and rec campuses — not a caption.",
        },
        {
          name: "Named campuses",
          note: "Commute minutes by street. Enrollment contacts belong on the campus page, not a rating slogan.",
        },
        {
          name: "RealScout match",
          note: "Live MLS filters at the desk. We do not duplicate RealScout AI recommendations.",
        },
        {
          name: "Then drive",
          note: "Open /neighborhoods/[slug], then Calendly. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/about": [
    {
      h2: "Ridges $1M+ files, Toll Brothers registration, Sun City packets, CA net sheets — one desk",
      body: "Pick a file type at 9406 W Lake Mead Blvd, Suite 100. License S.0197614.LLC. Call (702) 222-1964. We do not route you through a call center.",
      pins: [
        {
          name: "Residential resale",
          note: "Single-family, condo, and townhome files across Las Vegas and Henderson. Square footage and HOA dues first.",
        },
        {
          name: "$1M+ and new construction",
          note: "The Ridges, MacDonald Highlands, Southern Highlands. Toll Brothers, Lennar, Century — register Dr. Jan before models.",
        },
        {
          name: "55+ occupancy packets",
          note: "Sun City Summerlin, Sun City Anthem, Del Webb at Lake Las Vegas. HOPA rules at the desk, then one rec campus.",
        },
        {
          name: "Investment and California inbound",
          note: "Rental caps and CA net sheets. Nevada has no state income tax — HOA still applies. Open /buyers/california-relocator.",
        },
      ],
    },
  ],
  "/buyers": [
    {
      h2: "January 2026 buyer snapshot: $450K median, 4,850 listings, 28 DOM — then two ZIPs",
      body: "Valley figures on this page. Summerlin and Henderson medians live on their community pages. Call (702) 222-1964. Lender letter at Suite 100 before the first showing.",
      pins: [
        {
          name: "$450K median",
          note: "January 2026 valley snapshot cited here. Not a CMA for your offer.",
        },
        {
          name: "4,850 active listings",
          note: "Filter beds, baths, and square footage in RealScout. Do not screenshot 40 cards.",
        },
        {
          name: "28 days on market",
          note: "Average. Well-priced files move faster. Letter in hand before we drive.",
        },
        {
          name: "+4.2% year over year",
          note: "Cited on this page. Your ZIP can differ. Two-ZIP tour from 9406 W Lake Mead Blvd.",
        },
      ],
    },
  ],
  "/faq": [
    {
      h2: "Accordion closed? Call (702) 222-1964 or book Calendly at Suite 100",
      body: "FAQ copy is the desk version of the same questions. Bring a ZIP and a pre-approval. 9406 W Lake Mead Blvd, Suite 100 is about 10 minutes from most Summerlin villages. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Live Q&A",
          note: "Named campuses and commute minutes replace slogans. Call or text (702) 222-1964.",
        },
        {
          name: "Calendly",
          note: "Phone, showing, or Suite 100 meeting. Photo ID and target ZIPs.",
        },
        {
          name: "Email",
          note: "homes@heyberkshire.com for documents. Do not send listing keys by unsecured email.",
        },
        {
          name: "Maps pin",
          note: "Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC.",
        },
      ],
    },
  ],
};
