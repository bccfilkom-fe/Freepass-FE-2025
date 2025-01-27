"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useDialogStore } from "../../hooks/use-dialog";
import { useSheetStore } from "../../hooks/use-sheet";
import {
	acceptSessionProposal,
	createSession,
	editSession,
	getSessionEvent,
	getSessions,
	rejectSessionProposal,
} from "./action";
import type {
	AcceptSessionRequest,
	EditSessionRequest,
	GetSessionsQuery,
	RejectSessionRequest,
} from "./dto";

export const useSessionsQuery = () => {
	const searchParams = useSearchParams();

	const search = searchParams.get("search");
	const page = Number(searchParams.get("page"));
	const limit = Number(searchParams.get("limit"));
	const type = Number(searchParams.get("type"));
	const status = Number(
		searchParams.get("status"),
	) as GetSessionsQuery["status"];
	const tags = searchParams.get("tags")
		? searchParams.get("tags")?.split(",") || null
		: null;
	const sort_by = searchParams.get("sort_by") as GetSessionsQuery["sort_by"];
	const sort_order = searchParams.get(
		"sort_order",
	) as GetSessionsQuery["sort_order"];
	const before_at = searchParams.get("before_at");
	const after_at = searchParams.get("after_at");

	return useQuery({
		queryKey: ["session", search, page, limit, type],
		queryFn: () =>
			getSessions({
				search,
				page,
				limit,
				type,
				tags,
				sort_by,
				sort_order,
				before_at,
				after_at,
				status,
			}),
	});
};

export const useGetSessionQuery = (sessionId: string) => {
	return useQuery({
		queryKey: ["session", sessionId],
		queryFn: () => getSessionEvent(sessionId),
	});
};

export const useCreateSessionMutation = () => {
	const queryClient = useQueryClient();
	const { closeSheet } = useSheetStore();

	return useMutation({
		mutationKey: ["session"],
		mutationFn: (data: EditSessionRequest) => createSession(data),
		onSuccess: (data) => {
			toast.success(data.message);
			closeSheet();
			queryClient.invalidateQueries({ queryKey: ["session"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export const useEditSessionMutation = (id: string) => {
	const { closeSheet } = useSheetStore();
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["session", id],
		mutationFn: (data: EditSessionRequest) => editSession(data, id),
		onSuccess: (data) => {
			toast.success(data.message);
			closeSheet();
			queryClient.invalidateQueries({ queryKey: ["session"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export const useAcceptSessionProposalMutation = (id: string) => {
	const { closeSheet } = useSheetStore();
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["session"],
		mutationFn: (data: AcceptSessionRequest) => acceptSessionProposal(data, id),
		onSuccess: (data) => {
			toast.success(data.message);
			closeSheet();
			queryClient.invalidateQueries({ queryKey: ["session"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export const useRejectSessionProposalMutation = (id: string) => {
	const { closeDialog } = useDialogStore();
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["session"],
		mutationFn: (data: RejectSessionRequest) => rejectSessionProposal(data, id),
		onSuccess: (data) => {
			toast.success(data.message);
			closeDialog();
			queryClient.invalidateQueries({ queryKey: ["session"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};
