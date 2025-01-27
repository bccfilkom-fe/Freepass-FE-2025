"use client";

import {
	type AcceptSessionRequest,
	AcceptSessionSchema,
	type SessionResponse,
} from "@/shared/repository/session/dto";
import { useAcceptSessionProposalMutation } from "@/shared/repository/session/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Prop = {
	id: string;
	session: SessionResponse;
};

export const useReviewProposalSessionForm = ({ id, session }: Prop) => {
	const { isPending, mutate: acceptSessionProposal } =
		useAcceptSessionProposalMutation(id);

	const form = useForm<AcceptSessionRequest>({
		resolver: zodResolver(AcceptSessionSchema),
		defaultValues: {
			title: session.title,
			description: session.description,
			tags: session.tags,
			type: 1,
			start_at: new Date(session.start_at),
			end_at: new Date(session.end_at),
			capacity: session.capacity || 0,
			meeting_url: session.meeting_url || "",
			room: session.room || "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		acceptSessionProposal(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
