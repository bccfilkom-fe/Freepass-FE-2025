import { z } from "zod";
import {
	type SessionStatusMap,
	SessionTagMap,
	type SessionTypeMap,
} from "../../lib/map-data";

export type SessionResponse = {
	id: string;
	title: string;
	description?: string;
	type: keyof typeof SessionTypeMap;
	start_at: string;
	end_at: string;
	tags: (keyof typeof SessionTagMap)[];
	capacity: number;
	meeting_url?: string;
	room?: string;
	image_uri?: string;
	status: keyof typeof SessionStatusMap;
};

export type GetSessionsResponse = {
	sessions: SessionResponse[];
};

export type GetSessionsQuery = {
	search: string | null;
	page: number | null;
	limit: number | null;
	type: number | null;
	tags: string[] | null;
	sort_by: "id" | "title" | "start_at" | "end_at" | "capacity" | null;
	sort_order: "asc" | "desc" | null;
	before_at: string | null; // iso string
	after_at: string | null; // iso string
};

export type GetSessionResponse = {
	session: SessionResponse;
};

export const CreateSessionSchema = z
	.object({
		title: z.string().min(3).max(255),
		description: z.string().optional(),
		type: z.number().int().min(1).max(1),
		tags: z
			.array(
				z
					.string()
					.refine((tag) => SessionTagMap[tag as keyof typeof SessionTagMap]),
			)
			.optional(),
		start_at: z.date().refine((arg) => arg > new Date(), {
			message: "Start date must be in the future",
		}),
		end_at: z.date(),
		capacity: z.number().int().min(1),
		meeting_url: z.string().optional(),
		room: z.string().optional(),
	})
	.refine((arg) => arg.start_at < arg.end_at, {
		message: "End date must be after start date",
	})
	.refine((arg) => arg.meeting_url || arg.room, {
		message: "Either meeting url or room id must be provided",
	})
	.refine((arg) => !(arg.meeting_url && arg.room), {
		message: "Only one of meeting url or room id can be provided",
	});

export type CreateSessionRequest = z.infer<typeof CreateSessionSchema>;

export const EditSessionSchema = z
	.object({
		title: z.string().min(3).max(255),
		description: z.string().optional(),
		type: z.number().int().min(1).max(1),
		tags: z
			.array(
				z
					.string()
					.refine((tag) => SessionTagMap[tag as keyof typeof SessionTagMap]),
			)
			.optional(),
		start_at: z.date().refine((arg) => arg > new Date(), {
			message: "Start date must be in the future",
		}),
		end_at: z.date(),
		capacity: z.number().int().min(1),
		meeting_url: z.string().optional(),
		room: z.string().optional(),
	})
	.refine((arg) => arg.start_at < arg.end_at, {
		message: "End date must be after start date",
	})
	.refine((arg) => arg.meeting_url || arg.room, {
		message: "Either meeting url or room id must be provided",
	})
	.refine((arg) => !(arg.meeting_url && arg.room), {
		message: "Only one of meeting url or room id can be provided",
	});

export type EditSessionRequest = z.infer<typeof CreateSessionSchema>;
