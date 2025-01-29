"use client";

import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useSessionQuery } from "@/shared/repository/auth/query";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isOpen, setOpen] = useState(false);
	const navigationItems = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Sessions",
			href: "/sessions",
		},
	];

	const { data, isLoading } = useSessionQuery();

	return (
		<header className="w-full z-40 fixed top-0 left-0 bg-background">
			<div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
				<div className="justify-start items-center gap-4 lg:flex hidden flex-row">
					{navigationItems.map((item) => (
						<div key={item.title}>
							<div className="flex flex-col gap-2">
								<Link href={item.href}>
									<Button variant="ghost">{item.title}</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="flex lg:justify-center pl-4">
					<p className="font-semibold">BCC Conference</p>
				</div>
				<div className="flex justify-end w-full gap-4 pr-2">
					{data ? (
						isLoading ? (
							<Skeleton className="w-10 h-10 rounded-full" />
						) : (
							<Link href="/dashboard">
								<Button variant="secondary">Dashboard</Button>
							</Link>
						)
					) : (
						<Link href="/login">
							<Button variant="ghost">Login</Button>
						</Link>
					)}
				</div>
				<div className="flex w-12 shrink lg:hidden items-end justify-end pr-4">
					<Button variant="ghost" onClick={() => setOpen(!isOpen)}>
						{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</Button>
					{isOpen && (
						<div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
							{navigationItems.map((item) => (
								<Link
									key={item.title}
									href={item.href}
									className="flex justify-between items-center px-4"
								>
									<span className="text-lg">{item.title}</span>
									<MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
