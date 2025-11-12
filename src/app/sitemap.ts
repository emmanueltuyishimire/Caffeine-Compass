import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caffeine-calculation-site.com';

  const calculatorRoutes = [
    '/calculators/intake',
    '/calculators/half-life',
    '/calculators/caffeine-timing-optimizer',
    '/calculators/caffeine-withdrawal-tracker',
    '/calculators/caffeine-sensitivity-test',
    '/calculators/drink-comparison',
    '/calculators/drinks-database',
    '/calculators/caffeine-overdose-risk',
    '/calculators/pregnancy-safe-limit'
  ];

  const articleRoutes = [
      '/articles/caffeine-effect-on-rem-sleep',
      '/articles/caffeine-half-life-sleep',
      '/articles/how-long-before-bed-to-stop-caffeine'
  ];

  const calculatorUrls = calculatorRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articleUrls = articleRoutes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
     {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...calculatorUrls,
    ...articleUrls,
  ]
}

    