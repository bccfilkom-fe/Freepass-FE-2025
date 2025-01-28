import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Adjust as needed
import { useCallback, useEffect, useState } from "react";
import useDebounce from "./use-debounce";

export default function usePagination() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	// Initial state based on URL search parameters
	const [paginationState, setPaginationState] = useState(() => ({
		pageIndex: searchParams.get("page")
			? Number(searchParams.get("page")) - 1
			: 0,
		pageSize: searchParams.get("limit")
			? Number(searchParams.get("limit"))
			: 10,
		search: searchParams.get("search") || "",
	}));

	// Debounced version of search state
	const debouncedSearch = useDebounce(paginationState.search, 500);

	// Utility function to update the query string
	const updateQueryString = useCallback(
		(newParams: Record<string, string>) => {
			const urlSearchParams = new URLSearchParams(searchParams);
			for (const [key, value] of Object.entries(newParams)) {
				if (value) urlSearchParams.set(key, value);
				else urlSearchParams.delete(key); // Remove the key if value is empty
			}
			router.replace(`${pathname}?${urlSearchParams.toString()}`);
		},
		[router, pathname, searchParams],
	);

	const handlePageChange = useCallback(
		(pageIndex: number) => {
			setPaginationState((prevState) => ({
				...prevState,
				pageIndex,
			}));
			updateQueryString({
				page: (pageIndex + 1).toString(),
				limit: paginationState.pageSize.toString(),
			});
		},
		[updateQueryString, paginationState.pageSize],
	);

	// Set search state (debounced effect happens automatically)
	const handleSearch = useCallback((search: string) => {
		setPaginationState((prevState) => ({
			...prevState,
			search,
			pageIndex: 0, // Reset to first page on new search
		}));
	}, []);

	// Effect to update the query string when the debounced search changes
	useEffect(() => {
		updateQueryString({
			search: debouncedSearch,
			page: "1", // Reset to the first page
		});
	}, [debouncedSearch, updateQueryString]);

	return {
		paginationState,
		setPaginationState,
		handlePageChange,
		handleSearch,
	};
}
