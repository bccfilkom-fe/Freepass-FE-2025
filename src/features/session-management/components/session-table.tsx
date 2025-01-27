import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { Fragment } from "react";
import { Button } from "../../../shared/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../../shared/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../../shared/components/ui/table";
import type { SessionResponse } from "../../../shared/repository/session/dto";
import type { PaginationResponse } from "../../../shared/types/response";
import { sessionColumns } from "./session-column";

type Props = {
	data: SessionResponse[];
	meta: PaginationResponse;
	paginationState: {
		pageIndex: number;
		pageSize: number;
	};
	handlePageChange: (pageIndex: number) => void;
};

export default function SessionTable({
	data,
	meta,
	paginationState,
	handlePageChange,
}: Props) {
	const columns = sessionColumns;

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		rowCount: meta.total_data,
		pageCount: meta.total_page,
		state: {
			pagination: paginationState,
		},
		initialState: {
			pagination: {
				pageIndex: paginationState.pageIndex,
				pageSize: paginationState.pageSize,
			},
		},
	});

	return (
		<Fragment>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex items-center justify-between px-2 w-full">
					<div className="flex items-center space-x-2">
						<p className="text-sm font-medium">Rows per page</p>
						<Select
							value={`${table.getState().pagination.pageSize}`}
							onValueChange={(value) => {
								table.setPageSize(Number(value));
							}}
						>
							<SelectTrigger className="h-8 w-[70px]">
								<SelectValue
									placeholder={table.getState().pagination.pageSize}
								/>
							</SelectTrigger>
							<SelectContent side="top">
								{[10, 20, 30, 40, 50].map((pageSize) => (
									<SelectItem key={pageSize} value={`${pageSize}`}>
										{pageSize}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="flex items-center space-x-4">
						<div className="flex w-[100px] items-center justify-center text-sm font-medium">
							Page {table.getState().pagination.pageIndex + 1} of{" "}
							{table.getPageCount()}
						</div>
						<div className="flex items-center space-x-2">
							<Button
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
								onClick={() => {
									table.setPageIndex(0);
									handlePageChange(0);
								}}
								disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">Go to first page</span>
								<ChevronsLeft />
							</Button>
							<Button
								variant="outline"
								className="h-8 w-8 p-0"
								onClick={() => {
									table.previousPage();
									handlePageChange(table.getState().pagination.pageIndex - 1);
								}}
								disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">Go to previous page</span>
								<ChevronLeft />
							</Button>
							<Button
								variant="outline"
								className="h-8 w-8 p-0"
								onClick={() => {
									table.nextPage();
									handlePageChange(table.getState().pagination.pageIndex + 1);
								}}
								disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">Go to next page</span>
								<ChevronRight />
							</Button>
							<Button
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
								onClick={() => {
									table.setPageIndex(table.getPageCount() - 1);
									handlePageChange(table.getPageCount() - 1);
								}}
								disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">Go to last page</span>
								<ChevronsRight />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
