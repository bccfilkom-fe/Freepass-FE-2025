"use client";

import {
	type RejectSessionRequest,
	RejectSessionSchema,
} from "@/shared/repository/session/dto";
import { useRejectSessionProposalMutation } from "@/shared/repository/session/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Prop = {
	id: string;
};

export const useRejectProposalForm = ({ id }: Prop) => {
	const { isPending, mutate: rejectSessionProposal } =
		useRejectSessionProposalMutation(id);
	const form = useForm<RejectSessionRequest>({
		resolver: zodResolver(RejectSessionSchema),
		defaultValues: {
			reason: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		rejectSessionProposal(data);
	});

	return {
		...form,
		isLoading: isPending,
		onSubmitHandler,
	};
};
