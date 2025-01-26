import type { RoleMap } from "@/shared/lib/map-data";
import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type LoginRequest = z.infer<typeof LoginSchema>;

export type LoginResponse = {
	access_token: string;
};

export const RegisterSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
});

export type RegisterRequest = z.infer<typeof RegisterSchema>;

type UserResponse = {
	id: string;
	name: string;
	email: string;
	role: keyof typeof RoleMap;
	image_uri?: string;
};

export type GetSessionResponse = {
	user: UserResponse;
};
