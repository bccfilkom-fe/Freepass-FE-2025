"use client";

import {
	type ReviewSessionRequest,
	ReviewSessionSchema,
} from "@/shared/repository/session/dto";
import { useReviewSessionMutation } from "@/shared/repository/session/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Prop = {
	id: string;
};

export const useReviewSessionForm = ({ id }: Prop) => {
	const { isPending, mutate: reviewSession } = useReviewSessionMutation(id);
	const form = useForm<ReviewSessionRequest>({
		resolver: zodResolver(ReviewSessionSchema),
		defaultValues: {
			review: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		reviewSession(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
