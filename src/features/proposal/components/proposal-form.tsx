"use client";

import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/shared/components/ui/sheet";
import { LoaderIcon } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { Checkbox } from "../../../shared/components/ui/checkbox";
import {
	DateField,
	DateInput,
} from "../../../shared/components/ui/datefield-rac";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../shared/components/ui/form";
import { Input } from "../../../shared/components/ui/input";
import { Textarea } from "../../../shared/components/ui/textarea";
import { SessionTagMap } from "../../../shared/lib/map-data";
import { useCreateSessionForm } from "../hooks/use-create-session-form";

export default function ProposalForm() {
	const form = useCreateSessionForm();

	return (
		<SheetContent className="overflow-y-scroll">
			<SheetHeader>
				<SheetTitle>Create a new proposal</SheetTitle>
				<SheetDescription>
					Provide the details of your proposal below.
				</SheetDescription>
			</SheetHeader>

			<Form {...form}>
				<form onSubmit={form.onSubmitHandler} className="flex flex-col gap-6">
					<FormField
						name="title"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="title">Title</FormLabel>
									<FormControl>
										<Input id="title" type="text" {...prop.field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="description"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="description">Description</FormLabel>
									<FormControl>
										<Textarea id="description" {...prop.field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="tags"
						control={form.control}
						render={() => {
							return (
								<FormItem>
									<FormLabel htmlFor="tags">Tags</FormLabel>
									{Object.keys(SessionTagMap).map((tag) => (
										<FormField
											key={tag}
											name="tags"
											control={form.control}
											render={(prop) => {
												return (
													<FormItem
														key={tag}
														className="flex flex-row items-start space-x-3 space-y-0"
													>
														<FormControl>
															<Checkbox
																checked={prop.field.value?.includes(tag)}
																onCheckedChange={(checked) => {
																	return checked
																		? prop.field.onChange([
																				...(prop.field.value || []),
																				tag,
																			])
																		: prop.field.onChange(
																				prop.field.value?.filter(
																					(value) => value !== tag,
																				),
																			);
																}}
															/>
														</FormControl>
														<FormLabel className="text-sm font-normal">
															{SessionTagMap[tag as keyof typeof SessionTagMap]}
														</FormLabel>
													</FormItem>
												);
											}}
										/>
									))}
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="start_at"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="start_at">Start Date</FormLabel>
									<FormControl>
										<DateField
											granularity="minute"
											hourCycle={12}
											onChange={(value) => {
												if (value)
													prop.field.onChange(new Date(value.toString()));
											}}
										>
											<DateInput />
										</DateField>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="end_at"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="end_at">End Date</FormLabel>
									<FormControl>
										<DateField
											granularity="minute"
											hourCycle={12}
											onChange={(value) => {
												if (value)
													prop.field.onChange(new Date(value.toString()));
											}}
										>
											<DateInput />
										</DateField>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="meeting_url"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="meeting_url">Meeting URL</FormLabel>
									<FormControl>
										<Input id="meeting_url" type="url" {...prop.field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="room"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="room">Room</FormLabel>
									<FormControl>
										<Input id="room" type="text" {...prop.field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="capacity"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="capacity">Capacity</FormLabel>
									<FormControl>
										<Input
											id="capacity"
											type="text"
											inputMode="numeric"
											onChange={(e) => {
												const value = e.target.value;
												if (value === "") {
													prop.field.onChange(0);
												} else {
													prop.field.onChange(Number(value));
												}
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<Button type="submit" className="w-full" disabled={form.isLoading}>
						{form.isLoading && (
							<LoaderIcon className="animate-spin" size={20} />
						)}
						Create Proposal
					</Button>
				</form>
			</Form>
		</SheetContent>
	);
}
