"use client";

import {
	type EditSessionRequest,
	EditSessionSchema,
	type GetSessionResponse,
	type SessionResponse,
} from "@/shared/repository/session/dto";
import {
	useCreateSessionMutation,
	useEditSessionMutation,
} from "@/shared/repository/session/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Prop = {
	id: string;
	session: SessionResponse;
};

export const useEditSessionForm = ({ id, session }: Prop) => {
	console.table(session);
	const { isPending, mutate: editSession } = useEditSessionMutation(id);
	const form = useForm<EditSessionRequest>({
		resolver: zodResolver(EditSessionSchema),
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
		editSession(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
