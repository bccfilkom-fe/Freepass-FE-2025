"use client";

import {
	type EditSessionRequest,
	EditSessionSchema,
} from "@/shared/repository/session/dto";
import { useCreateSessionMutation } from "@/shared/repository/session/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCreateSessionForm = () => {
	const { isPending, mutate: createSession } = useCreateSessionMutation();
	const form = useForm<EditSessionRequest>({
		resolver: zodResolver(EditSessionSchema),
		defaultValues: {
			title: "",
			description: "",
			tags: [],
			type: 1,
			start_at: new Date(),
			end_at: new Date(),
			capacity: 0,
			meeting_url: "",
			room: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		createSession(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
