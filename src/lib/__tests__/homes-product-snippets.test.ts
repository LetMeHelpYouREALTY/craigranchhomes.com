import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateFAQPageSchema,
  generateSpeakableSchema,
} from '@/lib/metadata';
import { HOMES_PAGE_FAQS } from '@/lib/hyperlocal-faqs';

const baseUrl = 'https://www.craigranchvegashomes.com';

/**
 * Mirrors the JSON-LD array on /homes. Product + AggregateOffer without
 * aggregateRating triggered Search Console Product snippets failures; this
 * page must stay a CollectionPage hub, not a Product.
 */
function buildHomesPageSchema() {
  return [
    generateCollectionPageSchema({
      name: 'Homes for Sale in Craig Ranch, Las Vegas',
      description:
        'Craig Ranch homes hub: office inventory widget plus buyer guides for ZIP 89031. Live MLS cards are rendered by RealScout—not duplicated as listing or Product schema here.',
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

function collectTypes(value: unknown, found = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    for (const entry of value) {
      collectTypes(entry, found);
    }
    return found;
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const typeValue = record['@type'];
    if (typeof typeValue === 'string') {
      found.add(typeValue);
    } else if (Array.isArray(typeValue)) {
      for (const entry of typeValue) {
        if (typeof entry === 'string') {
          found.add(entry);
        }
      }
    }
    for (const nested of Object.values(record)) {
      collectTypes(nested, found);
    }
  }
  return found;
}

describe('/homes Product snippets regression', () => {
  it('does not emit Product or AggregateOffer (GSC Missing aggregateRating)', () => {
    const schema = buildHomesPageSchema();
    const types = collectTypes(schema);
    expect(types.has('Product')).toBe(false);
    expect(types.has('AggregateOffer')).toBe(false);
    expect(types.has('Offer')).toBe(false);
    expect(JSON.stringify(schema)).not.toMatch(/aggregateRating/);
  });

  it('emits CollectionPage with crawlable hub links instead of listing Products', () => {
    const collection = buildHomesPageSchema()[0] as {
      '@type': string;
      mainEntity?: {
        '@type': string;
        numberOfItems: number;
        itemListElement: Array<{ url: string }>;
      };
    };
    expect(collection['@type']).toBe('CollectionPage');
    expect(collection.mainEntity).toMatchObject({
      '@type': 'ItemList',
      numberOfItems: 5,
    });
    const urls = collection.mainEntity?.itemListElement.map((item) => item.url);
    expect(urls).toEqual([
      `${baseUrl}/buy-craig-ranch-homes`,
      `${baseUrl}/luxury-homes-craig-ranch-north-las-vegas`,
      `${baseUrl}/market-data`,
      `${baseUrl}/new-construction-craig-ranch`,
      `${baseUrl}/home-valuation-craig-ranch`,
    ]);
  });
});

