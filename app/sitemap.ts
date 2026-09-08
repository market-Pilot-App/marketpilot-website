import { MetadataRoute } from "next";
import { getAllPosts } from "./blog/posts-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  return [
    {
      url: "https://www.marketpiloting.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.marketpiloting.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.marketpiloting.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.marketpiloting.com/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://www.marketpiloting.com/terms",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...posts.map((post) => ({
      url: `https://www.marketpiloting.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: "https://www.marketpiloting.com/social-media-automation", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://www.marketpiloting.com/ai-website-builder", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://www.marketpiloting.com/brand-dna-engine", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://www.marketpiloting.com/whatsapp-marketing", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://www.marketpiloting.com/lead-generation", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];
}
