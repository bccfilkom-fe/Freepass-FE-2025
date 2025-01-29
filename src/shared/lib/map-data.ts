export const RoleMap = {
	1: "user",
	2: "event-coordinator",
	3: "admin",
};

export const SessionTagMap = {
	PM: "Product Management",
	PD: "Product Design",
	FE: "Frontend",
	BE: "Backend",
	DS: "Data Science",
	CP: "Competitive Programming",
} as const;

export const SessionTypeMap = {
	1: "Workshop",
} as const;

export const SessionStatusMap = {
	0: "All",
	1: "Pending",
	2: "Approved",
	3: "Rejected",
} as const;
