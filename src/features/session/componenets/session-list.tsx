"use client";

import { Checkbox } from "../../../shared/components/ui/checkbox";
import {
	DateField,
	DateInput,
} from "../../../shared/components/ui/datefield-rac";
import { Input } from "../../../shared/components/ui/input";
import { Label } from "../../../shared/components/ui/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../shared/components/ui/radio-group";
import { Skeleton } from "../../../shared/components/ui/skeleton";
import { SessionTagMap } from "../../../shared/lib/map-data";
import { useSessionsQuery } from "../../../shared/repository/session/query";
import SessionCard from "./session-card";

export default function SessionList() {
	const { isLoading, data } = useSessionsQuery({ status: 2 });

	if (isLoading || !data) {
		return (
			<div className="h-5/6 grid grid-cols-6 grid-rows-5 gap-x-4">
				<div className="border-2 rounded-lg col-span-2 row-span-5" />
				<div className="col-span-4 row-span-5 overflow-y-auto gap-y-4 grid w-full">
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
				</div>
			</div>
		);
	}

	return (
		<div className="h-5/6  grid grid-cols-6 grid-rows-5 gap-x-4">
			<div className="border-2 rounded-lg col-span-2 row-span-5 p-4 space-y-4 overflow-y-auto">
				<div className="space-y-2">
					<Label>Search</Label>
					<Input placeholder="Search by title..." />
				</div>
				<div className="space-y-2">
					<Label>Tags</Label>
					{Object.keys(SessionTagMap).map((tag) => (
						<div
							key={tag}
							className="flex flex-row items-start space-x-3 space-y-0"
						>
							<Checkbox
							// checked={prop.field.value?.includes(tag)}
							// onCheckedChange={(checked) => {
							// 	return checked
							// 		? prop.field.onChange([...(prop.field.value || []), tag])
							// 		: prop.field.onChange(
							// 				prop.field.value?.filter((value) => value !== tag),
							// 			);
							// }}
							/>
							<span className="text-sm font-normal">
								{SessionTagMap[tag as keyof typeof SessionTagMap]}
							</span>
						</div>
					))}
				</div>
				<div className="space-y-2">
					<Label>Place</Label>
					<RadioGroup defaultValue="all">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="all" id="r1" />
							<Label htmlFor="r1">All</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="offline" id="r2" />
							<Label htmlFor="r2">Offline</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="online" id="r3" />
							<Label htmlFor="r3">Online</Label>
						</div>
					</RadioGroup>
				</div>
				<div className="space-y-2">
					<Label>Start Date</Label>
					<DateField
						granularity="minute"
						hourCycle={12}
						// onChange={(value) => {
						// 	if (value) prop.field.onChange(new Date(value.toString()));
						// }}
					>
						<DateInput />
					</DateField>
				</div>
			</div>
			<div className="col-span-4 row-span-5 overflow-y-auto gap-y-4 grid w-full">
				{data.payload.sessions.length > 0 ? (
					data.payload.sessions.map((session) => {
						return <SessionCard key={session.id} session={session} />;
					})
				) : (
					<p>
						There are no sessions available at the moment. Please check back
						later or propose your own session!
					</p>
				)}
			</div>
		</div>
	);
}
