
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calculation.site';

  const staticPages = [
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  const calculatorRoutes = [
    '/calculators/caffeine-intake',
    '/calculators/caffeine-half-life',
    '/calculators/caffeine-timing-optimizer',
    '/calculators/caffeine-withdrawal-tracker',
    '/calculators/caffeine-sensitivity-test',
    '/calculators/caffeine-drink-comparison',
    '/calculators/caffeine-drinks-database',
    '/calculators/caffeine-overdose-risk',
    '/calculators/pregnancy-caffeine-safe-limit',
  ];

  const articleRoutes = [
      '/articles/caffeine-effect-on-rem-sleep',
      '/articles/caffeine-half-life-sleep',
      '/articles/how-long-before-bed-to-stop-caffeine',
      '/articles/how-to-quit-caffeine',
      '/articles/caffeine-makes-you-tired',
      '/articles/caffeine-doesnt-affect-you',
      '/articles/does-sprite-have-caffeine',
      '/articles/does-matcha-have-caffeine',
      '/articles/how-much-caffeine-in-red-bull',
      '/articles/does-coke-zero-have-caffeine',
      '/articles/how-much-caffeine-in-a-cup-of-coffee',
      '/articles/how-long-does-caffeine-stay-in-your-system',
      '/articles/how-much-caffeine-in-espresso',
      '/articles/how-much-caffeine-in-celsius',
  ];

  // Placeholder for proxied blog routes
  const blogRoutes: string[] = [
    // e.g., '/blog/my-first-post', '/blog/another-post'
  ];

  // Placeholder for proxied business routes
  const businessRoutes: string[] = [
    // e.g., '/business/our-services', '/business/contact-us'
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

  const blogUrls = blogRoutes.map(route => ({
      url: `${baseUrl}${route}`, // The route already includes /blog
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
  }));

  const businessUrls = businessRoutes.map(route => ({
      url: `${baseUrl}${route}`, // The route already includes /business
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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
    ...blogUrls,
    ...businessUrls,
  ]
}
