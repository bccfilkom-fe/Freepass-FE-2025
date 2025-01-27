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
import { useRejectProposalForm } from "../hooks/use-reject-proposal-form";

type Prop = {
	id: string;
};

export default function RejectProposalForm({ id }: Prop) {
	const form = useRejectProposalForm({ id });

	return (
		<Form {...form}>
			<form onSubmit={form.onSubmitHandler} className="space-y-2">
				<FormField
					name="reason"
					control={form.control}
					render={(prop) => {
						return (
							<FormItem>
								<FormLabel htmlFor="reason">Reason</FormLabel>
								<FormControl>
									<Textarea id="reason" {...prop.field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button type="submit" variant="destructive">
					Reject
				</Button>
			</form>
		</Form>
	);
}
