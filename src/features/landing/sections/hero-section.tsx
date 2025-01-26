import { Button } from "@/shared/components/ui/button";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
	return (
		<div className="w-full py-20 lg:py-40 px-4">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
					<div className="flex gap-4 flex-col">
						<div className="flex gap-4 flex-col">
							<h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
								Simplify Your Conferences, Maximise Your Impact
							</h1>
							<p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
								All-in-one platform to manage registrations, schedules,
								speakers, and engagement seamlessly. Save time, impress
								attendees, and run stress-free events.
							</p>
						</div>
						<div className="flex flex-row gap-4">
							<Button size="lg" className="gap-4">
								Sign up here <MoveRight className="w-4 h-4" />
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8">
						<div className="bg-muted rounded-md aspect-square" />
						<div className="bg-muted rounded-md row-span-2" />
						<div className="bg-muted rounded-md aspect-square" />
					</div>
				</div>
			</div>
		</div>
	);
}
