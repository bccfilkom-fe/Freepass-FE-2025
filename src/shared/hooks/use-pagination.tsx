import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSheetStore } from "./use-sheet";

export default function usePagination() {
	const store = useSheetStore();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const [paginationState, setPaginationState] = useState({
		pageIndex: searchParams.get("page")
			? Number(searchParams.get("page")) - 1
			: 0,
		pageSize: searchParams.get("limit")
			? Number(searchParams.get("limit"))
			: 10,
		search: searchParams.get("search") || "",
	});

	const handlePageChange = (pageIndex: number) => {
		setPaginationState((prevState) => ({
			...prevState,
			pageIndex,
		}));

		const urlSearchParams = new URLSearchParams(searchParams);
		urlSearchParams.set("page", (pageIndex + 1).toString());
		urlSearchParams.set("limit", paginationState.pageSize.toString());

		router.replace(`${pathname}?${urlSearchParams.toString()}`);
	};

	const handleSearch = (search: string) => {
		setPaginationState((prevState) => ({
			...prevState,
			search,
		}));

		const urlSearchParams = new URLSearchParams(searchParams);
		urlSearchParams.set("search", search);

		router.replace(`${pathname}?${urlSearchParams.toString()}`);
	};

	return {
		paginationState,
		setPaginationState,
		handlePageChange,
		handleSearch,
	};
}
