import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateFAQPageSchema,
  generateHomesProductSchema,
  generateSpeakableSchema,
} from '@/lib/metadata';
import { HOMES_PAGE_FAQS } from '@/lib/hyperlocal-faqs';
import { SITE_AGENT_RATING } from '@/lib/site-nap';

const baseUrl = 'https://www.craigranchhomes.com';

/**
 * Mirrors the JSON-LD array on /homes. Search Console Product snippets
 * required aggregateRating when Product + AggregateOffer are present.
 */
function buildHomesPageSchema() {
  return [
    generateHomesProductSchema({
      url: `${baseUrl}/homes`,
    }),
    generateCollectionPageSchema({
      name: 'Homes for Sale in Craig Ranch, Las Vegas',
      description:
        'Craig Ranch homes hub with Product aggregateRating for Search Console.',
      url: `${baseUrl}/homes`,
      items: [
        {
          name: 'Buy Craig Ranch Homes',
          url: `${baseUrl}/buy-craig-ranch-homes`,
        },
        {
          name: 'Luxury Homes in Craig Ranch',
          url: `${baseUrl}/luxury-homes-craig-ranch-north-las-vegas`,
        },
        {
          name: 'Craig Ranch Market Data',
          url: `${baseUrl}/market-data`,
        },
        {
          name: 'New Construction in Craig Ranch',
          url: `${baseUrl}/new-construction-craig-ranch`,
        },
        {
          name: 'Home Valuation for Craig Ranch',
          url: `${baseUrl}/home-valuation-craig-ranch`,
        },
      ],
    }),
    generateSpeakableSchema({
      url: `${baseUrl}/homes`,
      name: 'Homes for Sale in Craig Ranch',
    }),
    generateFAQPageSchema(HOMES_PAGE_FAQS),
    generateBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Homes for Sale', url: `${baseUrl}/homes` },
    ]),
  ];
}

describe('/homes Product snippets aggregateRating', () => {
  it('emits Product with AggregateOffer and aggregateRating', () => {
    const product = generateHomesProductSchema({
      url: `${baseUrl}/homes`,
    });

    expect(product['@type']).toBe('Product');
    expect(product.name).toBe('Craig Ranch Homes');
    expect(product.offers).toMatchObject({
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '370000',
      highPrice: '1800000',
    });
    expect(product.aggregateRating).toEqual({
      '@type': 'AggregateRating',
      ratingValue: String(SITE_AGENT_RATING.ratingValue),
      reviewCount: String(SITE_AGENT_RATING.reviewCount),
      bestRating: String(SITE_AGENT_RATING.bestRating),
      worstRating: String(SITE_AGENT_RATING.worstRating),
    });
  });

  it('keeps CollectionPage hub links alongside Product markup', () => {
    const schema = buildHomesPageSchema();
    const collection = schema[1] as {
      '@type': string;
      mainEntity?: {
        '@type': string;
        numberOfItems: number;
        itemListElement: Array<{ url: string }>;
      };
    };
    expect(collection['@type']).toBe('CollectionPage');
    expect(collection.mainEntity?.numberOfItems).toBe(5);
    expect(collection.mainEntity?.itemListElement.map((item) => item.url)).toEqual([
      `${baseUrl}/buy-craig-ranch-homes`,
      `${baseUrl}/luxury-homes-craig-ranch-north-las-vegas`,
      `${baseUrl}/market-data`,
      `${baseUrl}/new-construction-craig-ranch`,
      `${baseUrl}/home-valuation-craig-ranch`,
    ]);
  });
});
