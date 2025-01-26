"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import type { RoleMap } from "@/shared/lib/map-data";
import { useLogoutMutation } from "@/shared/repository/auth/query";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type TabHref, tabsData } from "../data/tabs";
import Tab from "./tab";

type Props = {
	activeTab: TabHref;
	role: keyof typeof RoleMap;
};

export default function Header({ activeTab, role }: Props) {
	const { mutate: logout } = useLogoutMutation();

	const [hoveredTab, setHoveredTab] = useState<TabHref | null>(null);
	const router = useRouter();

	return (
		<div className="flex flex-col px-4 pt-4 border-b-2 gap-2">
			<div className="flex justify-between items-center ">
				<h1>Hi, (Name)</h1>
				<div className="flex space-x-2">
					<Avatar>
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/29647600?v=4"
							alt="Avatar"
						/>
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
					<Button size="icon" onClick={() => logout()}>
						<LogOutIcon />
					</Button>
				</div>
			</div>
			<div className="flex gap-4 overflow-y-auto">
				{tabsData[role].map((tab) => {
					return (
						<Tab
							key={tab.label}
							label={tab.label}
							isActive={activeTab === tab.href}
							onClick={() => router.push(tab.href)}
							onHover={(isHovered) =>
								setHoveredTab(isHovered ? tab.href : null)
							}
							isHovered={hoveredTab === tab.href}
						/>
					);
				})}
			</div>
		</div>
	);
}
