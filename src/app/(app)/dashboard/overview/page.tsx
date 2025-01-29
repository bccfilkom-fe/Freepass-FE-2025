import { useId } from "react";
import { Card, CardContent } from "../../../../shared/components/ui/card";

export default function Page() {
	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Overview</h2>
			</div>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 h-full">
				<Card className="col-span-2 row-span-1 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer h-full">
					<CardContent className="justify-center items-center flex h-full">
						<span className="text-muted-foreground">No Data...</span>
					</CardContent>
				</Card>
				<Card className="col-span-1 row-span-2 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer h-full">
					<CardContent className="justify-center items-center flex h-full">
						<span className="text-muted-foreground">No Data...</span>
					</CardContent>
				</Card>
				<Card className="hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer h-full">
					<CardContent className="justify-center items-center flex h-full">
						<span className="text-muted-foreground">No Data...</span>
					</CardContent>
				</Card>
				<Card className="hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer h-full">
					<CardContent className="justify-center items-center flex h-full">
						<span className="text-muted-foreground">No Data...</span>
					</CardContent>
				</Card>
				<Card className="hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer h-full">
					<CardContent className="justify-center items-center flex h-full">
						<span className="text-muted-foreground">No Data...</span>
					</CardContent>
				</Card>
				<Card className="md:col-span-2 lg:col-span-1 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer h-full">
					<CardContent className="justify-center items-center flex h-full">
						<span className="text-muted-foreground">No Data...</span>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
