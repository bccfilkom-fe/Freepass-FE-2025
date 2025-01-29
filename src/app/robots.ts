import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/dashboard"],
		},
		sitemap: "https://freepass-fe-bcc-2025.ahargunyllib.tech/sitemap.xml",
	};
}
