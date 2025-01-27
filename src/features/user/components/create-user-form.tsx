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
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../shared/components/ui/form";
import { Input } from "../../../shared/components/ui/input";
import { Textarea } from "../../../shared/components/ui/textarea";
import { useCreateUserForm } from "../hooks/use-create-user-form";

export default function CreateUserForm() {
	const form = useCreateUserForm();

	return (
		<SheetContent className="overflow-y-scroll">
			<SheetHeader>
				<SheetTitle>Create a new event coordinator</SheetTitle>
				<SheetDescription>
					Provide the details of the event coordinator below.
				</SheetDescription>
			</SheetHeader>

			<Form {...form}>
				<form onSubmit={form.onSubmitHandler} className="flex flex-col gap-6">
					<FormField
						name="name"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="name">name</FormLabel>
									<FormControl>
										<Input id="name" type="text" {...prop.field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="email"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="email">Email</FormLabel>
									<FormControl>
										<Input id="email" type="email" {...prop.field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						name="password"
						control={form.control}
						render={(prop) => {
							return (
								<FormItem>
									<FormLabel htmlFor="password">Password</FormLabel>
									<FormControl>
										<Input id="password" type="password" {...prop.field} />
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
						Create Event Coordinator
					</Button>
				</form>
			</Form>
		</SheetContent>
	);
}
