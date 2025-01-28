"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useAlertDialogStore } from "../../hooks/use-alert-dialog";
import { useDialogStore } from "../../hooks/use-dialog";
import { useSheetStore } from "../../hooks/use-sheet";
import {
	acceptSessionProposal,
	createSession,
	deleteReviewSession,
	deleteSession,
	editSession,
	getSessionAttendees,
	getSessionEvent,
	getSessions,
	registerSession,
	rejectSessionProposal,
} from "./action";
import type {
	AcceptSessionRequest,
	EditSessionRequest,
	GetSessionAttendeesquery,
	GetSessionsQuery,
	RejectSessionRequest,
} from "./dto";

export const useSessionsQuery = ({
	status,
}: {
	status: GetSessionsQuery["status"];
}) => {
	const searchParams = useSearchParams();

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

	return useQuery({
		queryKey: ["session", page, limit, search, status],
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

export const useGetSessionAttendeesQuery = (sessionId: string) => {
	const searchParams = useSearchParams();
	const page = Number(searchParams.get("page")) || 1;
	const limit = Number(searchParams.get("limit")) || 10;
	const sort_by =
		(searchParams.get("sort_by") as GetSessionAttendeesquery["sort_by"]) ||
		undefined;
	const sort_order =
		(searchParams.get(
			"sort_order",
		) as GetSessionAttendeesquery["sort_order"]) || undefined;

	return useQuery({
		queryKey: ["session", sessionId, "attendees", page, limit],
		queryFn: () =>
			getSessionAttendees(sessionId, { page, limit, sort_by, sort_order }),
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

export const useDeleteSessionMutation = (id: string) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["session"],
		mutationFn: () => deleteSession(id),
		onSuccess: (data) => {
			toast.success(data.message);
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

export const useRegisterSessionMutation = (id: string) => {
	const queryClient = useQueryClient();
	const { closeAlertDialog } = useAlertDialogStore();

	return useMutation({
		mutationKey: ["session"],
		mutationFn: () => registerSession(id),
		onSuccess: (data) => {
			toast.success(data.message);
			closeAlertDialog();
			queryClient.invalidateQueries({ queryKey: ["session"] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export const useDeleteReviewMutation = (sessionId: string, userId: string) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ["session", sessionId, "review", userId],
		mutationFn: () => deleteReviewSession(sessionId, userId),
		onSuccess: (data) => {
			toast.success(data.message);
			queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};
