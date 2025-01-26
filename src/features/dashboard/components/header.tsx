"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { useLogoutMutation } from "@/shared/repository/auth/query";
import { useSessionQuery } from "@/shared/repository/session-manager/query";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type TabHref, tabsData } from "../data/tabs";
import HeaderSkeleton from "./header-skeleton";
import Tab from "./tab";

type Props = {
	activeTab: TabHref;
};

export default function Header({ activeTab }: Props) {
	const [hoveredTab, setHoveredTab] = useState<TabHref | null>(null);
	const router = useRouter();
	const { mutate: logout } = useLogoutMutation();
	const { data, isLoading } = useSessionQuery();

	if (isLoading) {
		return <HeaderSkeleton />;
	}

	if (!data || !data.role) {
		return <p>Error loading user data</p>;
	}

	const { role } = data;

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
