"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
	return (
		<div className="py-20 lg:py-40 grid grid-cols-1 gap-8 md:grid-cols-2 ">
			<div className="flex gap-4 flex-col ">
				<div className="flex gap-4 flex-col">
					<h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
						Simplify Your Conferences, Maximise Your Impact
					</h1>
					<p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
						All-in-one platform to manage registrations, schedules, speakers,
						and engagement seamlessly. Save time, impress attendees, and run
						stress-free events.
					</p>
				</div>
				<div className="flex flex-row gap-4">
					<Button size="lg" className="gap-4">
						Sign up here <MoveRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
			<motion.div
				className="grid grid-cols-2 gap-8 "
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.2 },
					},
				}}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.6, ease: "easeOut" },
						},
					}}
					className="bg-muted rounded-md aspect-square"
				/>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.8, ease: "easeOut" },
						},
					}}
					className="bg-muted rounded-md row-span-2"
				/>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 30 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.7, ease: "easeOut" },
						},
					}}
					className="bg-muted rounded-md aspect-square"
				/>
			</motion.div>
		</div>
	);
}
