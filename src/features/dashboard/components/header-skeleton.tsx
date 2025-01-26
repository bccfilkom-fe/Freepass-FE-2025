import { Skeleton } from "@/shared/components/ui/skeleton";

export default function HeaderSkeleton() {
	return (
		<div className="flex flex-col px-4 py-4 border-b-2 gap-2">
			<div className="flex justify-between items-center ">
				<Skeleton className="w-20 h-6" />
				<div className="flex space-x-2">
					<Skeleton className="h-10 w-10" />
					<Skeleton className="h-9 w-9" />
				</div>
			</div>
			<div className="flex gap-4 overflow-y-auto">
				<Skeleton className="h-8 w-20" />
				<Skeleton className="h-8 w-20" />
				<Skeleton className="h-8 w-20" />
			</div>
		</div>
	);
}
