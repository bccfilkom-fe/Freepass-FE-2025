"use client";

import {
	type CreateUserRequest,
	CreateUserSchema,
} from "@/shared/repository/user/dto";
import { useCreateUserMutation } from "@/shared/repository/user/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCreateUserForm = () => {
	const { isPending, mutate: createUser } = useCreateUserMutation();
	const form = useForm<CreateUserRequest>({
		resolver: zodResolver(CreateUserSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		createUser(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
