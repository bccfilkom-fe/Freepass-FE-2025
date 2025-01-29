import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/shared/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import ReviewSessionForm from "./review-session-form";

type Prop = {
	id: string;
};

export default function ReviewSessionDialog({ id }: Prop) {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Review</DialogTitle>
				<DialogDescription>Tell me about the session</DialogDescription>
			</DialogHeader>
			<ReviewSessionForm id={id} />
		</DialogContent>
	);
}
