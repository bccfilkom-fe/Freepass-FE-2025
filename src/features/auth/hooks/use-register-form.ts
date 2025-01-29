"use client";

import {
	type RegisterRequest,
	RegisterSchema,
} from "@/shared/repository/auth/dto";
import { useRegisterMutation } from "@/shared/repository/auth/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useRegisterForm = () => {
	const {
		isPending,
		mutate: register,
		data: res,
		status,
		error,
	} = useRegisterMutation();
	const router = useRouter();
	const form = useForm<RegisterRequest>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		register(data);

		if (status === "success") {
			toast.success(res.message);
			router.push("/login");
		} else if (status === "error") {
			toast.error(error.message);
		}
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
