"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createSession } from "../session-manager/action";
import { login, logout, register } from "./action";
import type { LoginRequest, RegisterRequest } from "./dto";

export const useLoginMutation = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationKey: ["auth-session"],
		mutationFn: (data: LoginRequest) => login(data),
		onSuccess: async (data) => {
			toast.success(data.message);
			await createSession(data.payload.access_token);
			router.push("/dashboard");
			queryClient.invalidateQueries({ queryKey: ["auth-session"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export const useRegisterMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["auth-session"],
		mutationFn: (data: RegisterRequest) => register(data),
		onSuccess: async (data) => {
			queryClient.refetchQueries({ queryKey: ["auth-session"] });
		},
	});
};

export const useLogoutMutation = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationKey: ["auth-session"],
		mutationFn: () => logout(),
		onSuccess: () => {
			toast.success("Logout success");
			router.push("/");
			queryClient.resetQueries({ queryKey: ["auth-session"] });
		},
	});
};
