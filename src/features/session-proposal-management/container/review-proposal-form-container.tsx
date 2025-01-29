import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/shared/components/ui/sheet";
import { useGetSessionQuery } from "@/shared/repository/session/query";
import { LoaderIcon } from "lucide-react";
import ReviewProposalForm from "../components/review-proposal-form";

type Props = {
	id: string;
};

export default function ReviewProposalFormContainer({ id }: Props) {
	const { data, isLoading } = useGetSessionQuery(id);

	return (
		<SheetContent className="overflow-y-scroll">
			<SheetHeader>
				<SheetTitle>Review a proposal</SheetTitle>
				<SheetDescription>
					Check the details of the proposal below.
				</SheetDescription>
			</SheetHeader>
			{isLoading || !data ? (
				<LoaderIcon className="animate-spin" size={20} />
			) : (
				<ReviewProposalForm id={id} session={data.payload.session} />
			)}
		</SheetContent>
	);
}
