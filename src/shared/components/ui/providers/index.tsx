"use client";

import GlobalAlertDialog from "@/shared/hooks/use-alert-dialog";
import GlobalSheet from "@/shared/hooks/use-sheet";
import type React from "react";
import GlobalDialog from "../../../hooks/use-dialog";
import { Toaster } from "../sonner";
import ReactQueryProvider from "./react-query";

export default function Provider({ children }: React.PropsWithChildren) {
	return (
		<ReactQueryProvider>
			{children}
			<Toaster richColors />
			<GlobalDialog />
			<GlobalSheet />
			<GlobalAlertDialog />
		</ReactQueryProvider>
	);
}
