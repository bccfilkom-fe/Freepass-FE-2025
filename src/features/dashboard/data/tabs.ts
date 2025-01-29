export const tabsData = {
	1: [
		{
			label: "Overview",

			href: "/dashboard/overview",
		},
		{
			label: "Sessions",

			href: "/dashboard/sessions",
		},
		{
			label: "Proposal",

			href: "/dashboard/proposal",
		},
	],
	2: [
		{
			label: "Overview",

			href: "/dashboard/overview",
		},
		{
			label: "Session Management",

			href: "/dashboard/session-management",
		},
		{
			label: "Session Proposal Management",

			href: "/dashboard/session-proposal-management",
		},
	],
	3: [
		{
			label: "Overview",

			href: "/dashboard/overview",
		},
		{
			label: "User Management",

			href: "/dashboard/user-management",
		},
	],
} as const;

export type TabHref = (typeof tabsData)[keyof typeof tabsData][number]["href"];
export type TabLabel =
	(typeof tabsData)[keyof typeof tabsData][number]["label"];
