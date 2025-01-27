import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";
import { useDeleteSessionMutation } from "../../../shared/repository/session/query";

type Prop = {
	id: string;
};

export default function DeleteProposalAlert({ id }: Prop) {
	const { mutate: deleteProposal } = useDeleteSessionMutation(id);

	return (
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
				<AlertDialogDescription>
					This action cannot be undone. This will permanently delete session
					proposal and remove its data from our servers.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction onClick={() => deleteProposal()}>
					Yes
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	);
}
