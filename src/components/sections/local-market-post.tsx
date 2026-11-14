// Dr. Jan Duffy's own local market post, published November 14, 2026.
// Numbers checked against the sources listed at the bottom of the post.
export default function LocalMarketPost() {
  return (
    <article className="mx-auto max-w-3xl text-left">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">{"Home Prices Around Craig Ranch, November 2026"}</h2>
      <p className="mb-6 text-sm opacity-70">November 14, 2026 · Dr. Jan Duffy</p>
      <p className="mb-4 leading-relaxed">{"Home prices around Craig Ranch are holding steady. In ZIP 89032, the median sale price was $406,692 for the three months ending October 2026, up 0.3% from a year ago."}</p>
      <p className="mb-4 leading-relaxed">{"Homes took a median 52 days to sell, compared with 49 a year ago. Sellers still got about 99.3% of their list price, and 104 homes sold in October."}</p>
      <p className="mb-4 leading-relaxed">{"Supply is building. A local market report shows about 6.1 months of homes for sale in 89032. That gives buyers time to compare."}</p>
      <p className="mb-4 leading-relaxed">{"Rates averaged 7.11% for a 30-year fixed the week of November 12."}</p>
      <p className="mb-4 leading-relaxed">
        <strong>What it means for you:</strong> {"Prices are stable, not falling, but buyers have more room to negotiate than last year. For numbers on a specific Craig Ranch home, call Dr. Jan at "}
        <a href="tel:7028205408" className="underline">(702) 820-5408</a>.
      </p>
      <p className="text-sm italic opacity-70">{"Sources: Redfin ZIP 89032 market data (3 months ending October 2026, all home types); local brokerage 89032 market report (November 2026); Freddie Mac weekly rate survey (November 12, 2026)."}</p>
    </article>
  );
}
