"use client";

import GlobalAlertDialog from "@/shared/hooks/use-alert-dialog";
import GlobalSheet from "@/shared/hooks/use-sheet";
import type React from "react";
import { Toaster } from "../sonner";
import ReactQueryProvider from "./react-query";

export default function Provider({ children }: React.PropsWithChildren) {
	return (
		<ReactQueryProvider>
			{children}
			<Toaster richColors />
			<GlobalSheet />
			<GlobalAlertDialog />
		</ReactQueryProvider>
	);
}
