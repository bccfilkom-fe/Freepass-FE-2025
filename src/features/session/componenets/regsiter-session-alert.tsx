import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";

type Prop = {
	onAction: () => void;
};

export default function RegisterSessionAlert({ onAction }: Prop) {
	return (
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Register Session</AlertDialogTitle>
				<AlertDialogDescription>
					Are you sure you want to register for this session?
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction onClick={onAction}>Yes</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	);
}
