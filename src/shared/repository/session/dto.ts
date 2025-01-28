import { z } from "zod";
import {
	type SessionStatusMap,
	SessionTagMap,
	type SessionTypeMap,
} from "../../lib/map-data";
import type { PaginationResponse } from "../../types/response";
import type { UserResponse } from "../user/dto";

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
	proposer: UserResponse;
	count_attendees: number;
};

export type SessionAttendeeResponse = {
	session_id: string;
	user_id: string;
	review?: string;
	reason?: string;
	session: SessionResponse;
	user: UserResponse;
};

export type GetSessionsResponse = {
	sessions: SessionResponse[];
	meta: PaginationResponse;
};

export type GetSessionsQuery = {
	search: string;
	page: number;
	limit: number;
	type?: keyof typeof SessionTypeMap;
	tags?: string[];
	sort_by?: "id" | "title" | "start_at" | "end_at" | "capacity";
	sort_order?: "asc" | "desc";
	before_at?: string; // iso string
	after_at?: string; // iso string
	status?: keyof typeof SessionStatusMap;
	proposer_id?: string;
};

export type GetSessionResponse = {
	session: SessionResponse;
};

export type GetSessionAttendeesquery = {
	page: number;
	limit: number;
	sort_by?: "id" | "title" | "start_at" | "end_at" | "capacity";
	sort_order?: "asc" | "desc";
};

export type GetSessionAttendeesResponse = {
	session_attendees: SessionAttendeeResponse[];
	meta: PaginationResponse;
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

export const AcceptSessionSchema = z
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

export type AcceptSessionRequest = z.infer<typeof AcceptSessionSchema>;

export const RejectSessionSchema = z.object({
	reason: z.string().min(3).max(255),
});

export type RejectSessionRequest = z.infer<typeof RejectSessionSchema>;
