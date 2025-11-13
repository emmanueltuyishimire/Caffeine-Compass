
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caffeine-calculation-site.com';

  const staticPages = [
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  const calculatorRoutes = [
    '/calculators/intake',
    '/calculators/half-life',
    '/calculators/caffeine-timing-optimizer',
    '/calculators/caffeine-withdrawal-tracker',
    '/calculators/caffeine-sensitivity-test',
    '/calculators/drink-comparison',
    '/calculators/drinks-database',
    '/calculators/caffeine-overdose-risk',
    '/calculators/pregnancy-safe-limit',
    '/calculators/caffeine-sleep-calculator'
  ];

  const articleRoutes = [
      '/articles/caffeine-effect-on-rem-sleep',
      '/articles/caffeine-half-life-sleep',
      '/articles/how-long-before-bed-to-stop-caffeine'
  ];

  const staticUrls = staticPages.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const calculatorUrls = calculatorRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const articleUrls = articleRoutes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
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
      priority: 0.8,
    },
    ...staticUrls,
    ...calculatorUrls,
    ...articleUrls,
  ]
}
