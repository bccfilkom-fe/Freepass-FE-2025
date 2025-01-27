import ProposalsTableContainer from "../../../../features/session-proposal-management/container/proposals-table-container";

export default function Page() {
	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Sesion Proposal Management</h2>
			</div>
			<div className="flex flex-col gap-4">
				<ProposalsTableContainer />
			</div>
		</section>
	);
}
