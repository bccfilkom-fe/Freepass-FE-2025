"use client";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import Link from "next/link";
import { useRegisterForm } from "../hooks/use-register-form";

export function RegisterForm() {
	const form = useRegisterForm();

	return (
		<div className="flex flex-col gap-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Register</CardTitle>
					<CardDescription>
						Enter your details below to create an account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.onSubmitHandler}>
							<div className="flex flex-col gap-6">
								<FormField
									control={form.control}
									name="name"
									render={(prop) => {
										return (
											<FormItem>
												<FormLabel htmlFor="name">Name</FormLabel>
												<FormControl>
													<Input id="name" type="text" {...prop.field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										);
									}}
								/>
								<FormField
									control={form.control}
									name="email"
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
									control={form.control}
									name="password"
									render={(prop) => {
										return (
											<FormItem>
												<FormLabel htmlFor="password">Password</FormLabel>
												<FormControl>
													<Input
														id="password"
														type="password"
														{...prop.field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										);
									}}
								/>
								<Button type="submit" className="w-full">
									Register
								</Button>
							</div>
						</form>
					</Form>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href="/login" className="underline underline-offset-4">
							Login
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
