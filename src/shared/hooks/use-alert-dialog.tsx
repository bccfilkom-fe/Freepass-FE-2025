"use client";

import { create } from "zustand";
import { AlertDialog } from "../components/ui/alert-dialog";

type AlertDialogStore = {
	isOpen: boolean;
	openAlertDialog: (props: { children: React.ReactNode }) => void;
	children: React.ReactNode;
	closeAlertDialog: () => void;
};

export const useAlertDialogStore = create<AlertDialogStore>((set) => ({
	isOpen: false,
	openAlertDialog: ({ children }) => {
		set({ isOpen: true, children });
	},
	closeAlertDialog: () => {
		set({ isOpen: false, children: null });
	},
	children: null,
}));

export default function GlobalAlertDialog() {
	const { isOpen, children, closeAlertDialog } = useAlertDialogStore();

	return (
		<AlertDialog open={isOpen} onOpenChange={() => closeAlertDialog()}>
			{children}
		</AlertDialog>
	);
}
