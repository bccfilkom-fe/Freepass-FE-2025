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
import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useLoginForm } from "../hooks/use-login-form";

export function LoginForm() {
	const form = useLoginForm();

	return (
		<div className="flex flex-col gap-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.onSubmitHandler}>
							<div className="flex flex-col gap-6">
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
								<Button
									type="submit"
									className="w-full"
									disabled={form.isLoading}
								>
									{form.isLoading && (
										<LoaderIcon className="animate-spin" size={20} />
									)}
									Login
								</Button>
							</div>
						</form>
					</Form>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link href="/register" className="underline underline-offset-4">
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
