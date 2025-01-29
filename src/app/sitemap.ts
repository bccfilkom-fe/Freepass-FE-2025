import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://freepass-fe-bcc-2025.ahargunyllib.tech/",
			lastModified: new Date(),
			priority: 0.5,
			changeFrequency: "never",
		},
	];
}
