"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
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
	const pathname = usePathname();

	const search = searchParams.get("search") || "";
	const page = Number(searchParams.get("page")) || 1;
	const limit = Number(searchParams.get("limit")) || 10;
	const type =
		(Number(searchParams.get("type")) as GetSessionsQuery["type"]) || undefined;
	const tags = searchParams.get("tags")?.split(",") || undefined;
	const sort_by =
		(searchParams.get("sort_by") as GetSessionsQuery["sort_by"]) || undefined;
	const sort_order =
		(searchParams.get("sort_order") as GetSessionsQuery["sort_order"]) ||
		undefined;
	const before_at = searchParams.get("before_at") || undefined;
	const after_at = searchParams.get("after_at") || undefined;
	const proposer_id = searchParams.get("proposer_id") || undefined;

	let status =
		(Number(searchParams.get("status")) as GetSessionsQuery["status"]) ||
		undefined;

	if (pathname.startsWith("/sessions")) status = 2; // accepted
	if (pathname.startsWith("/dashboard/session-proposal-management")) status = 1; // pending

	return useQuery({
		queryKey: ["session", page, limit, search],
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
				proposer_id,
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
