"use client";

import { type LoginRequest, LoginSchema } from "@/shared/repository/auth/dto";
import { useLoginMutation } from "@/shared/repository/auth/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
	const { isPending, mutate: login } = useLoginMutation();
	const form = useForm<LoginRequest>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		login(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
