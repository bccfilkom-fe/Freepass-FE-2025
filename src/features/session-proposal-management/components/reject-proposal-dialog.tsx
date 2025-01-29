import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/shared/components/ui/dialog";
import RejectProposalForm from "./reject-proposal-form";

type Prop = {
	id: string;
};

export default function RejectProposalDialog({ id }: Prop) {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Reject Proposal</DialogTitle>
			</DialogHeader>
			<RejectProposalForm id={id} />
		</DialogContent>
	);
}
