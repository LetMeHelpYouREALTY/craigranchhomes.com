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
      body: "Sun City Anthem is 30–35 minutes from 851 W Lone Mountain Rd, Suite 103. Occupancy rules are reviewed at the desk before the Henderson drive. Call (702) 820-5408. Do not mix this with a Summerlin 55+ morning.",
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
          note: "Larger lots and custom product. Published band $700K–$1.2M. Call (702) 820-5408. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/55-plus-communities": [
    {
      h2: "Occupancy packets at Suite 103, then one rec campus — not a slogan grid",
      body: "HOPA occupancy is reviewed at 851 W Lone Mountain Rd before we drive. Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. Call (702) 820-5408. Nevada has no state income tax; HOA dues still apply.",
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
    {
      h2: "25,000+ 55+ homes, $280K–$1.2M published bands, HOA $140–$350 — packet at Suite 103",
      body: "January 2026 snapshot on this hub. Occupancy rules are reviewed at 851 W Lone Mountain Rd before any clubhouse. Call (702) 820-5408. Pick one west campus or one Henderson campus.",
      pins: [
        {
          name: "West first",
          note: "Sun City Summerlin 10–15 minutes. Trilogy and Heritage 12–18. Same west clock as Suite 103.",
        },
        {
          name: "Henderson second",
          note: "Anthem Center, Solera, Del Webb at Lake Las Vegas are 30–45 minutes. Do not stack with Summerlin the same morning.",
        },
        {
          name: "North loop",
          note: "Sun City Aliante is 20–25 minutes. Craig Road employers first if you still work.",
        },
        {
          name: "HOA packet",
          note: "Dues bands on this page are $140–$350. Confirm the week you tour. Office/GBP (702) 820-5408.",
        },
      ],
    },
    {
      h2: "Open one 55+ campus page, then book the rec building from W Lone Mountain Rd",
      body: "The card grid is a menu. The decision is a drive. Call (702) 820-5408. Named rec square footage and commute minutes beat a slogan row.",
      pins: [
        {
          name: "Sun City Summerlin",
          note: "Four rec campuses. 7,700+ homes. 10–15 minutes from Suite 103.",
        },
        {
          name: "Trilogy / Heritage",
          note: "Clubhouse-scale vs staffed gate. Downtown Summerlin retail on the same west hop.",
        },
        {
          name: "Anthem / Solera / Del Webb",
          note: "Henderson 55+ block. Anthem Center about 64,000 sq ft. Lake campus is a longer east clock.",
        },
        {
          name: "Aliante",
          note: "42,000 sq ft rec and 18-hole course on the north loop. Not a Summerlin swap.",
        },
      ],
    },
  ],
  "/buyers/luxury-homes-las-vegas": [
    {
      h2: "Ridges gate, MacDonald Strip view, or Lake Las Vegas shoreline — pick the first clock",
      body: "This URL is buyer luxury search. Gate codes stay off group texts. The /luxury-homes hub is listing-or-search intake. Call (702) 820-5408 from 851 W Lone Mountain Rd, Suite 103.",
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
      body: "Marketing is a punch list at Suite 103, not a slogan. HOA drone rules and gate vendor lists are confirmed before photographer day. Call (702) 820-5408.",
      pins: [
        {
          name: "Photography scoped in writing",
          note: "Drone, twilight, and floor plans are named on the listing agreement. Social stays off until you initial the set.",
        },
        {
          name: "Off-market window",
          note: "Private showing blocks are booked from 851 W Lone Mountain Rd. Addresses stay off unsecured threads.",
        },
        {
          name: "Buyer search vs listing hub",
          note: "Buyer-only search lives at /buyers/luxury-homes-las-vegas. This page is listing or search intake for either side.",
        },
        {
          name: "Paid placement punch list",
          note: "BHHS syndication is scoped before go-live. We do not promise a portal we cannot name. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/services": [
    {
      h2: "Buyer, listing, 55+, and relocation desks — pick the file type first",
      body: "Each service meeting starts at 851 W Lone Mountain Rd, Suite 103 so MLS, showing routes, and BHHS paperwork share one start. Call (702) 820-5408.",
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
      body: "Specialized files still start at Suite 103. Builder registration happens before any model row. HOA rental caps are checked before you fly in. Call (702) 820-5408.",
      pins: [
        {
          name: "Investment",
          note: "Open /investment-properties. Rent comps and HOA rental rules before the area drive.",
        },
        {
          name: "New construction",
          note: "Open /new-construction. Register Dr. Jan at Suite 103 before Skye Canyon, Inspirada, or Cadence models.",
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
      h2: "Village cards with January 2026 medians — commute minutes from Suite 103",
      body: "This hub is inventory. Neighborhood pages hold named campuses and parks. Filter here, then call (702) 820-5408. We will not tour twelve ZIPs in one afternoon.",
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
          note: "15–20 minutes to the guardhouse. Gate list from Suite 103.",
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
      h2: "License S.0197614.LLC at Suite 103 — the parent company is on the letterhead",
      body: "Ask who photographs, who writes remarks, who negotiates. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, 851 W Lone Mountain Rd, Suite 103. Call (702) 820-5408. Closed volume cited on this site: $127M+ since 2008.",
      pins: [
        {
          name: "Brokerage on the contract",
          note: "BHHS Nevada Properties is the named brokerage. Samples are reviewed at this pin before you sign.",
        },
        {
          name: "Referral desk",
          note: "Inbound California and outbound states are briefed from Suite 103. Local showings still start here.",
        },
        {
          name: "Closed-file street comps",
          note: "Ask for recent closes on your street. We will not invent a price. Office/GBP (702) 820-5408.",
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
      h2: "Register at Suite 103, then one builder corridor — Toll, Lennar, KB, or Shea",
      body: "Most Las Vegas and Henderson builders require your agent on the first visit. Register Dr. Jan Duffy at 851 W Lone Mountain Rd before Skye Canyon, Inspirada, or Cadence. Call (702) 820-5408.",
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
      body: "Name, address, and office line (702) 820-5408 match GBP. Client CTA (702) 820-5408. 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Inconsistent NAP is a Maps ranking leak.",
      pins: [
        {
          name: "Call",
          note: "Use the Call button on this page. Do not swap the office line with the client CTA.",
        },
        {
          name: "Directions",
          note: "The map pin is this Suite 103 address. Visitor parking faces W Lone Mountain Rd.",
        },
        {
          name: "View Google Reviews",
          note: "Review schema and the GBP reviews link stay on this page so Maps and the website agree.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday closed. If GBP hours change, this page updates the same day.",
        },
      ],
    },
    {
      h2: "License S.0197614.LLC, Suite 103 hours, and the Maps pin on one URL",
      body: "This About band is for Google Business Profile alignment. Who, what, and where live here so GBP and craigranchhomes.com do not drift. Call (702) 820-5408. Office/GBP (702) 820-5408.",
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
          note: "851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Summerlin 10–15 minutes. Henderson 25–35 via I-215 east.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday closed. Match GBP the same day hours change.",
        },
      ],
    },
    {
      h2: "Mon–Fri 9am–6pm, Sat 10am–4pm at Suite 103 — Sunday closed",
      body: "Hours on this URL must match Google Business. Walk-ins welcome during posted hours. Call (702) 820-5408. Office/GBP (702) 820-5408. 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032.",
      pins: [
        {
          name: "Monday–Friday",
          note: "9am–6pm. Visitor parking faces W Lone Mountain Rd.",
        },
        {
          name: "Saturday",
          note: "10am–4pm. Showing blocks can start here and continue to the listing.",
        },
        {
          name: "Sunday",
          note: "Closed. Call (702) 820-5408 Monday–Saturday to schedule.",
        },
        {
          name: "GBP match",
          note: "If hours change on Google, this page updates the same day. Inconsistent hours leak Maps ranking.",
        },
      ],
    },
    {
      h2: "Maps pin at 851 W Lone Mountain Rd — Directions and Google Reviews on this URL",
      body: "The embed, Get Directions, and View Google Reviews buttons are the GBP actions. Call or text (702) 820-5408. License S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties.",
      pins: [
        {
          name: "Get Directions",
          note: "Opens the Suite 103 pin. Do not use a different street for GBP.",
        },
        {
          name: "View Google Reviews",
          note: "Review schema and the GBP reviews link stay on this page.",
        },
        {
          name: "Call",
          note: "Client CTA (702) 820-5408. Office line on Google is (702) 820-5408.",
        },
        {
          name: "Address line",
          note: "851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Same as the footer NAP.",
        },
      ],
    },
  ],
  "/sellers": [
    {
      h2: "Photographer, remarks, and comps scoped at Suite 103 before go-live",
      body: "Listing files start at 851 W Lone Mountain Rd, Suite 103. Photos and MLS remarks wait until the walkthrough. Call (702) 820-5408. We do not promise a portal we cannot name.",
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
          note: "Inspection, appraisal, and occupancy dates are drafted before you leave Suite 103.",
        },
        {
          name: "Net sheet",
          note: "HOA, title, and payoff lines are written here. Office/GBP (702) 820-5408.",
        },
      ],
    },
    {
      h2: "CMA at the desk, photos at the house, then MLS — that is the listing clock",
      body: "The selling sequence is dated at Suite 103. We do not skip the walkthrough. Call (702) 820-5408.",
      pins: [
        {
          name: "Valuation",
          note: "Open /home-valuation. Comps at 851 W Lone Mountain Rd before photographer day.",
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
          note: "Inspections and appraisal language live on the file. Call (702) 820-5408.",
        },
      ],
    },
    {
      h2: "Move-up, downsize, probate, or outbound sale — open the matching seller URL",
      body: "/sellers/move-up, /sellers/downsizing, /sellers/divorce-probate, and /sellers/relocation are separate clocks from Suite 103. Call (702) 820-5408.",
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
          note: "Court orders and lockbox rules at Suite 103, not the lobby. Private slot required.",
        },
        {
          name: "Outbound relocation",
          note: "Las Vegas closing dates lined up with the next city. BHHS destination agent briefed from this desk.",
        },
      ],
    },
    {
      h2: "Photo set, MLS remarks, HOA vendor list, and showing calendar — initialed at Suite 103",
      body: "What you get when you list is a punch list, not a slogan. Call (702) 820-5408. 851 W Lone Mountain Rd, Suite 103. We do not promise a portal we cannot name.",
      pins: [
        {
          name: "Photography",
          note: "Interior, exterior, and drone rules confirmed with the HOA before shoot day.",
        },
        {
          name: "MLS remarks",
          note: "Square footage, HOA dues, and occupancy dates beat a caption. Attribution stays on the listing.",
        },
        {
          name: "Paid placement",
          note: "BHHS channels you initial. Social stays off until you approve the set.",
        },
        {
          name: "Showing calendar",
          note: "Lockbox and occupancy windows written at the desk. Office/GBP (702) 820-5408.",
        },
      ],
    },
    {
      h2: "January 2026 valley median $450K is not your CMA — bring the APN to Suite 103",
      body: "Open /home-valuation with the address. We will not invent your number from a metro headline. Call (702) 820-5408. Typical close cited on this site: $450,000 valley snapshot.",
      pins: [
        {
          name: "MLS comps",
          note: "Recent closes on your street, not a portal average.",
        },
        {
          name: "Condition and HOA",
          note: "Interiors and packets are walked, then written.",
        },
        {
          name: "No obligation to list",
          note: "Valuation first. Listing paperwork is a separate appointment.",
        },
        {
          name: "Dated CMA",
          note: "DOM and inventory move. The sheet is dated the day we pull it.",
        },
      ],
    },
  ],
  "/sellers/downsizing": [
    {
      h2: "List the larger house, then one 55+ rec campus — same afternoon from Suite 103",
      body: "Sun City Summerlin is 10–15 minutes from 851 W Lone Mountain Rd. Occupancy rules are reviewed before the clubhouse. Call (702) 820-5408. Do not guess at square footage you have not walked.",
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
      h2: "2015–2021 purchase equity is a CMA at Suite 103, not a slogan",
      body: "If you bought in that window, bring the APN. We will not invent a gain. January 2026 DOM cited on this site is 28 days for priced-right listings. Call (702) 820-5408.",
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
          note: "Current house and next ZIP share 851 W Lone Mountain Rd as the start.",
        },
        {
          name: "Contingent vs non-contingent",
          note: "Written at the desk before you list. Call (702) 820-5408.",
        },
      ],
    },
  ],
  "/sellers/relocation": [
    {
      h2: "Las Vegas sale calendar plus a named BHHS agent in the next city",
      body: "Outbound files start at Suite 103. Destination agents are briefed from 851 W Lone Mountain Rd so two closings do not collide. Call (702) 820-5408.",
      pins: [
        {
          name: "Remote listing",
          note: "Photos, lockbox, and showing logs run from this desk. Addresses stay off group texts.",
        },
        {
          name: "50,000-agent desk, local file",
          note: "BHHS destination intro is a Suite 103 call. Local showings still start here until you leave.",
        },
        {
          name: "Two-contract calendar",
          note: "Bring both drafts. Occupancy dates are written before you fly.",
        },
        {
          name: "Office/GBP",
          note: "(702) 820-5408. Client CTA (702) 820-5408. Do not swap the lines.",
        },
      ],
    },
  ],
  "/sellers/divorce-probate": [
    {
      h2: "Court orders, lockbox rules, and showing logs at Suite 103 — not the lobby",
      body: "Confidential review is by appointment at 851 W Lone Mountain Rd, Suite 103. Letters testamentary or court orders come with you. Call (702) 820-5408.",
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
          note: "Documented, dated, and routed to counsel. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/relocation": [
    {
      h2: "No state income tax is a line item — then one Summerlin or Henderson clock",
      body: "Inbound math starts at 851 W Lone Mountain Rd, Suite 103. Housing prices 40–60% below many California coastal cities is a comparison, not a guarantee. Call (702) 820-5408.",
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
          note: "Golf and hiking are compared by acreage and minutes from Suite 103, not a slogan.",
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
      h2: "January 2026 medians by ZIP — then a CMA on YOUR APN at Suite 103",
      body: "Valley snapshot: $450K median, 28 DOM, 4,850 active listings, 2.1 months inventory. Area cards are not a substitute for one address. Call (702) 820-5408.",
      pins: [
        {
          name: "Summerlin $625K",
          note: "22 DOM on the January 2026 snapshot. 10–15 minutes from Suite 103.",
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
          note: "45 DOM. Gate lists from 851 W Lone Mountain Rd. Confirm the week you tour.",
        },
      ],
    },
  ],
  "/investment-properties": [
    {
      h2: "HOA rental caps and rent comps at Suite 103 before any area drive",
      body: "Cap-rate review happens at 851 W Lone Mountain Rd. Then one ZIP cluster: North Las Vegas, Henderson, or southwest. Call (702) 820-5408. We check rental rules before you fly in.",
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
          note: "Identification windows are dated. Bring the relinquished APN. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/home-valuation": [
    {
      h2: "Zestimate screenshots stay in the parking lot — comps are pulled at Suite 103",
      body: "Bring the APN to 851 W Lone Mountain Rd. AVMs miss interiors and HOA packets. Call (702) 820-5408. A 10% miss on $450K is $45K — we will not invent your number.",
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
    {
      h2: "Square footage, named campuses, HOA dues, 2.1 months inventory — comps at Suite 103",
      body: "School-zone slogans are not a CMA. Palo Verde, Coronado, Arbor View, and Legacy High School minutes are mapped by address at ccsd.net/zoning. Call (702) 820-5408. January 2026 inventory cited on this page: 2.1 months.",
      pins: [
        {
          name: "ZIP and commute",
          note: "Summerlin 10–15 minutes from Suite 103. Henderson 25–35. Not a caption premium.",
        },
        {
          name: "Beds, baths, square footage",
          note: "Layout and first-floor primary suites are listing facts. Confirm the week you price.",
        },
        {
          name: "Kitchens, HVAC, roof",
          note: "Condition is walked. We will not invent a dollar-per-upgrade from a blog average.",
        },
        {
          name: "Lot and views",
          note: "Measure from the file. Pool and lot size vary by APN.",
        },
      ],
    },
  ],
  "/buyers/first-time-buyers": [
    {
      h2: "FHA 3.5% at $498,257, VA 0% down, or a builder credit — pick the file type",
      body: "Lender letter is reviewed at 851 W Lone Mountain Rd, Suite 103 before the first two-ZIP tour. 2026 FHA limit cited on this page: $498,257. Call (702) 820-5408. Confirm with your lender the week you write.",
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
          note: "Open /new-construction. Register Dr. Jan at Suite 103 before any model row.",
        },
      ],
    },
    {
      h2: "NLV from $350K, Centennial, or Green Valley — one ZIP, named campuses, commute minutes",
      body: "First-purchase tours start at Suite 103. Legacy High School, Arbor View, and Coronado High School commutes are mapped at ccsd.net/zoning by address. Call (702) 820-5408.",
      pins: [
        {
          name: "North Las Vegas",
          note: "Published band $350K–$450K on this page. New-construction rows after registration.",
        },
        {
          name: "Centennial Hills",
          note: "Northwest clock from W Lone Mountain Rd. Arbor View High School commute by street.",
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
    {
      h2: "$1,800 rent vs $1,900 PITI on a $400K / 3.5% FHA file — run the sheet at Suite 103",
      body: "Figures on this page are a worked example, not your payment. Rate cited here: 6.5%. 2026 FHA limit: $498,257. Call (702) 820-5408. Lender letter before the first showing.",
      pins: [
        {
          name: "Rent column",
          note: "$1,800/month cited here. Five-year rent spend on this page: $108,000 with $0 equity.",
        },
        {
          name: "Buy column",
          note: "$1,900/month PITI on a $400K / 3.5% down example. Equity line on this page: $600+/month.",
        },
        {
          name: "FHA 3.5%",
          note: "Limit $498,257 for 2026 on this URL. Confirm with your lender the week you write.",
        },
        {
          name: "Then two ZIPs",
          note: "North Las Vegas, Centennial Hills, or Green Valley. Named campuses by address. Call (702) 820-5408.",
        },
      ],
    },
  ],
  "/contact": [
    {
      h2: "Walk-in hours and (702) 820-5408 at Suite 103 — the Maps pin is this desk",
      body: "Berkshire Hathaway HomeServices Nevada Properties. 851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. Client CTA (702) 820-5408. Office/GBP (702) 820-5408. Closed volume cited on this site: $127M+ since 2008. Map, Directions, and Google Reviews stay on this URL.",
      pins: [
        {
          name: "Call or text (702) 820-5408",
          note: "Dr. Jan answers this line. Do not swap it with the office number on Google.",
        },
        {
          name: "DrDuffy@CraigRanchHomes.com",
          note: "Documents only. Do not send listing keys by unsecured email.",
        },
        {
          name: "851 W Lone Mountain Rd, Suite 103",
          note: "North Las Vegas, NV 89032. Visitor parking faces W Lone Mountain Rd.",
        },
        {
          name: "Hours on the GBP listing",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday closed. Walk-ins welcome during posted hours.",
        },
      ],
    },
    {
      h2: "Call the client line or email DrDuffy@CraigRanchHomes.com from this URL",
      body: "Skip a second form if you already have the number. Call or text (702) 820-5408. Email DrDuffy@CraigRanchHomes.com. Calendly is the appointment column on this page. Office/GBP (702) 820-5408.",
      pins: [
        {
          name: "Client CTA",
          note: "(702) 820-5408. Same-day reply on the number you left.",
        },
        {
          name: "Email",
          note: "DrDuffy@CraigRanchHomes.com. Typical reply within two hours during posted hours.",
        },
        {
          name: "Calendly column",
          note: "Phone consult, showing, or Suite 103 meeting. Bring photo ID and target ZIPs.",
        },
        {
          name: "Maps pin",
          note: "851 W Lone Mountain Rd, Suite 103, North Las Vegas, NV 89032. License S.0197614.LLC.",
        },
      ],
    },
  ],
  "/market-insights": [
    {
      h2: "37% California in-migration, 0% NV state income tax, $1B+ data-center spend — apply at Suite 103",
      body: "Figures on this page are January 2026 snapshots. They are not a CMA for your APN. Call (702) 820-5408. We apply them at 851 W Lone Mountain Rd, then drive one ZIP.",
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
          note: "Hospitality demand is a metro input. Your listing still needs comps. Call (702) 820-5408.",
        },
      ],
    },
    {
      h2: "Switch, AWS, and Google power campuses in Henderson — 25–35 minutes from W Lone Mountain Rd",
      body: "Data-center jobs are an east-valley clock from Suite 103. Summerlin is a separate west loop. Call (702) 820-5408. Do not stack both in one afternoon.",
      pins: [
        {
          name: "Henderson corridor",
          note: "Google, Amazon Web Services, Switch, and related operators cited on this page.",
        },
        {
          name: "25–35 minute drive",
          note: "From 851 W Lone Mountain Rd to Henderson listings. Confirm traffic the morning you tour.",
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
      h2: "Bay Area and LA net sheets vs Summerlin or Henderson ZIP — video intake from Suite 103",
      body: "California remains the top inbound source cited on this page. $250K+ average equity is a snapshot, not your proceeds. Call (702) 820-5408. Four-hour drive or about a one-hour flight to most of California.",
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
      body: "Diversification is three separate drives. Pick one employer cluster before we leave Suite 103. Call (702) 820-5408. Office/GBP (702) 820-5408.",
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
          note: "Do not tour stadium, hospital, and studio ZIPs in one loop. Call (702) 820-5408.",
        },
      ],
    },
    {
      h2: "Henderson Inspirada, Summerlin Ridges, Aliante rec, Mountains Edge trails — January 2026 ZIP notes",
      body: "Outlook copy on this page is a snapshot. Appreciation ranges are not a CMA. Call (702) 820-5408. Named villages and commute minutes beat a caption.",
      pins: [
        {
          name: "Henderson",
          note: "Inspirada, MacDonald Highlands, Green Valley Ranch. 25–35 minutes from Suite 103.",
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
      h2: "Apply 2026 forces to one APN: buyer letter or listing CMA at 851 W Lone Mountain Rd",
      body: "Inventory is wider than 2021–2023 on this page, but well-priced homes still move. Call (702) 820-5408. Builder credits belong on /new-construction after you register Dr. Jan.",
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
          note: "Rate buydowns expire. Register at Suite 103 before any model row.",
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
      body: "This week's snapshot on this URL. Week deltas cited here: median +1.2%, sales +8.3%, listings -2.1%, DOM -2 days, list-to-sale +0.4%. Call (702) 820-5408. We will not price your house from a metro headline.",
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
          note: "Urgency and close-to-ask are dated. Bring the APN to 851 W Lone Mountain Rd.",
        },
      ],
    },
    {
      h2: "Ridges 8,400 sq ft custom closed at $4.2M in 12 days — one Summerlin gate file",
      body: "6 bed, 7 bath, 8,400 sq ft. Cited at 97% of ask vs a luxury-segment 67-day average on this page. Gate lists stay off group texts. Call (702) 820-5408 from Suite 103.",
      pins: [
        {
          name: "The Ridges",
          note: "15–20 minutes to the guardhouse from 851 W Lone Mountain Rd. Confirm the list that morning.",
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
          note: "Named on this page as a luxury driver. Your buyer still needs a letter. Office/GBP (702) 820-5408.",
        },
      ],
    },
    {
      h2: "26 DOM and 98.2% close-to-ask — write the offer or list price at Suite 103",
      body: "This week's story on this URL: modest +1.2% prices, +8.3% volume, -2.1% inventory. Call (702) 820-5408. A metro balance is not a CMA. Bring the address.",
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
      body: "Buyers: letter, then two ZIPs. Sellers: comps at the desk, then photos. Call (702) 820-5408. 98.2% list-to-sale on this page means deep discounts are uncommon this week.",
      pins: [
        {
          name: "Get the letter",
          note: "FHA, VA, or conventional compared at Suite 103 so the first appointment has a number.",
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
      body: "Area rows on this page are this week's snapshot. Central Las Vegas is cited at $425,000. Call (702) 820-5408. Two clocks from Suite 103 — not twelve ZIPs.",
      pins: [
        {
          name: "Summerlin $628,000",
          note: "142 sold, 21 DOM this week on this page. 10–15 minutes from W Lone Mountain Rd.",
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
      h2: "Open Summerlin or Green Valley first — 10–15 vs 25–35 minutes from Suite 103",
      body: "The card grid is a menu. The decision is a drive. Call (702) 820-5408. Named campuses and commute minutes are on each community page — not a slogan row.",
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
      h2: "Two-ZIP tour, named-campus commute minutes, RealScout match — book from W Lone Mountain Rd",
      body: "Area tours start at 851 W Lone Mountain Rd, Suite 103. We map Palo Verde, Coronado, Arbor View, and Legacy High School minutes at ccsd.net/zoning by address. Call (702) 820-5408.",
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
          note: "Open /neighborhoods/[slug], then Calendly. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/about": [
    {
      h2: "Ridges $1M+ files, Toll Brothers registration, Sun City packets, CA net sheets — one desk",
      body: "Pick a file type at 851 W Lone Mountain Rd, Suite 103. License S.0197614.LLC. Call (702) 820-5408. We do not route you through a call center.",
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
      body: "Valley figures on this page. Summerlin and Henderson medians live on their community pages. Call (702) 820-5408. Lender letter at Suite 103 before the first showing.",
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
          note: "Cited on this page. Your ZIP can differ. Two-ZIP tour from 851 W Lone Mountain Rd.",
        },
      ],
    },
  ],
  "/faq": [
    {
      h2: "Accordion closed? Call (702) 820-5408 or book Calendly at Suite 103",
      body: "FAQ copy is the desk version of the same questions. Bring a ZIP and a pre-approval. 851 W Lone Mountain Rd, Suite 103 is about 10 minutes from most Summerlin villages. Office/GBP (702) 820-5408.",
      pins: [
        {
          name: "Live Q&A",
          note: "Named campuses and commute minutes replace slogans. Call or text (702) 820-5408.",
        },
        {
          name: "Calendly",
          note: "Phone, showing, or Suite 103 meeting. Photo ID and target ZIPs.",
        },
        {
          name: "Email",
          note: "DrDuffy@CraigRanchHomes.com for documents. Do not send listing keys by unsecured email.",
        },
        {
          name: "Maps pin",
          note: "Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC.",
        },
      ],
    },
  ],
  "/55-plus-communities/sun-city-summerlin": [
    {
      h2: "7,700 homes, four rec campuses, 10–15 minutes from 851 W Lone Mountain Rd",
      body: "Highland Falls, Palm Valley, and Eagle Crest are three courses. Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista are four rec buildings. Call (702) 820-5408. HOA cited on this page: $155–$195. Age-restriction rules at Suite 103 first.",
      pins: [
        {
          name: "Mountain Shadows",
          note: "Rec campus walk before you pick a street. Same west clock as Suite 103.",
        },
        {
          name: "Highland Falls",
          note: "Original golf campus. Published band on this page starts near $320K. Confirm the week you tour.",
        },
        {
          name: "Eagle Crest",
          note: "Newer plan rows on this campus. Do not tour all three courses in one afternoon.",
        },
        {
          name: "Mountain View Hospital",
          note: "Adjacent pin. Commute minutes mapped from the listing, not a valley average.",
        },
      ],
    },
  ],
  "/55-plus-communities/trilogy-summerlin": [
    {
      h2: "Shea clubhouse, spa, and plan rows — 12–18 minutes from Suite 103",
      body: "Trilogy sits on the office side of the valley. Downtown Summerlin retail is a short hop after the clubhouse. Call (702) 820-5408. HOA cited on this page: $250–$350. Register before walking models.",
      pins: [
        {
          name: "Clubhouse restaurant",
          note: "On-site dining is a HOA amenity you pay for. Walk it before any plan row.",
        },
        {
          name: "Spa and fitness",
          note: "Square footage is clubhouse-scale, not a four-building Sun City rec campus.",
        },
        {
          name: "Shea plans",
          note: "About 800+ homes on this page. Open floor plans are listing facts — confirm the week you tour.",
        },
        {
          name: "Do not add Anthem",
          note: "Henderson 55+ is a separate east clock. Call (702) 820-5408 from 851 W Lone Mountain Rd.",
        },
      ],
    },
  ],
  "/55-plus-communities/heritage-stonebridge": [
    {
      h2: "Staffed gate, 1,100+ homes, Downtown Summerlin retail — 12–18 minutes from Suite 103",
      body: "Guest lists are booked from 851 W Lone Mountain Rd so arrival is not improvised. Call (702) 820-5408. Published band on this page: $400K–$750K. HOA $175–$220. This is not a 7,700-home campus.",
      pins: [
        {
          name: "Staffed gate",
          note: "We put you on the list that morning. Gate codes stay off group texts.",
        },
        {
          name: "Clubhouse",
          note: "Smaller rec building than Sun City Summerlin. Walk it before you pick a street.",
        },
        {
          name: "Downtown Summerlin",
          note: "Retail on the same west hop as Suite 103. Not a Henderson add-on.",
        },
        {
          name: "Occupancy packet",
          note: "Age-restriction and guest rules at the desk. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/55-plus-communities/solera-anthem": [
    {
      h2: "1,200-home Henderson campus, staffed gate — 30–35 minutes from Suite 103",
      body: "All residents must be 55+ here — confirm the HOA occupancy rule in writing. Call (702) 820-5408. Published band on this page: $380K–$650K. HOA $170–$210. Compare Sun City Anthem on the same east clock only if that is the brief.",
      pins: [
        {
          name: "Occupancy in writing",
          note: "This campus is all-55+. Packet at 851 W Lone Mountain Rd before the drive.",
        },
        {
          name: "Clubhouse and pool",
          note: "Boutique rec, not Anthem Center's 64,000 sq ft. Walk one building.",
        },
        {
          name: "Staffed gate",
          note: "Guest list from Suite 103. Do not mix with a Summerlin 55+ morning.",
        },
        {
          name: "Anthem parks",
          note: "Nearby parks are on this Henderson clock. Call (702) 820-5408.",
        },
      ],
    },
  ],
  "/55-plus-communities/sun-city-aliante": [
    {
      h2: "42,000 sq ft rec, 18-hole course, 2,800+ homes — 20–25 minutes north from Suite 103",
      body: "Golf and rec sit next to the Aliante retail strip. Call (702) 820-5408. Occupancy rules at 851 W Lone Mountain Rd before the north loop. Do not add Henderson the same day.",
      pins: [
        {
          name: "42,000 sq ft rec",
          note: "Pools, fitness, tennis, pickleball. Walk the building before fairway vs interior lots.",
        },
        {
          name: "18-hole course",
          note: "Winds through the campus. Resident rates are in the packet — confirm the week you tour.",
        },
        {
          name: "Aliante retail",
          note: "Adjacent strip. Craig Road and I-15 commutes mapped if you still work.",
        },
        {
          name: "North Vista Hospital",
          note: "Hospital pin on this north clock. Call (702) 820-5408. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
  "/55-plus-communities/del-webb-lake-las-vegas": [
    {
      h2: "$400K–$900K, pickleball, 320-acre lake — 35–45 minutes from Suite 103",
      body: "Del Webb at Lake Las Vegas is a 2016-to-present 55+ campus. Occupancy at 851 W Lone Mountain Rd before the Henderson drive. Call (702) 820-5408. HOA cited on this page: $200–$280. Do not stack with a Summerlin 55+ morning.",
      pins: [
        {
          name: "320-acre lake",
          note: "Shoreline and golf are on this east-Henderson clock. Measure from the listing.",
        },
        {
          name: "Pickleball and rec",
          note: "Walk the rec building before any plan row. About 1,800+ homes on this page.",
        },
        {
          name: "2016+ construction",
          note: "Newer product than 1989 Sun City Summerlin. Confirm HOA packet the week you tour.",
        },
        {
          name: "East clock only",
          note: "35–45 minutes from Suite 103. Office/GBP (702) 820-5408.",
        },
      ],
    },
  ],
};
