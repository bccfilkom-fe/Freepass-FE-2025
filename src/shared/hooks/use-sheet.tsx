"use client";

import { Sheet } from "@/shared/components/ui/sheet";
import { create } from "zustand";

type SheetStore = {
	isOpen: boolean;
	openSheet: (props: { children: React.ReactNode }) => void;
	children: React.ReactNode;
	closeSheet: () => void;
};

export const useSheetStore = create<SheetStore>((set) => ({
	isOpen: false,
	openSheet: ({ children }) => {
		set({ isOpen: true, children });
	},
	closeSheet: () => {
		set({ isOpen: false, children: null });
	},
	children: null,
}));

export default function GlobalSheet() {
	const { isOpen, children, closeSheet } = useSheetStore();

	return (
		<Sheet open={isOpen} onOpenChange={() => closeSheet()}>
			{children}
		</Sheet>
	);
}
