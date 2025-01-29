import { Button } from "../../../shared/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../shared/components/ui/form";
import { Textarea } from "../../../shared/components/ui/textarea";
import { useReviewSessionForm } from "../hooks/use-review-session-form";

type Prop = {
	id: string;
};

export default function ReviewSessionForm({ id }: Prop) {
	const form = useReviewSessionForm({ id });

	return (
		<Form {...form}>
			<form onSubmit={form.onSubmitHandler} className="space-y-2">
				<FormField
					name="review"
					control={form.control}
					render={(prop) => {
						return (
							<FormItem>
								<FormLabel htmlFor="review">Review</FormLabel>
								<FormControl>
									<Textarea id="review" {...prop.field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button type="submit">Review</Button>
			</form>
		</Form>
	);
}
