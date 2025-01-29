import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "./use-debounce";

export default function usePagination() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const isInitializedRef = useRef(false);

	const [paginationState, setPaginationState] = useState(() => ({
		pageIndex: searchParams.get("page")
			? Number(searchParams.get("page")) - 1
			: 0,
		pageSize: searchParams.get("limit")
			? Number(searchParams.get("limit"))
			: 10,
		search: searchParams.get("search") || "",
	}));

	const debouncedSearch = useDebounce(paginationState.search, 500);

	const updateQueryString = useCallback(
		(newParams: Record<string, string>) => {
			const urlSearchParams = new URLSearchParams(searchParams);
			for (const [key, value] of Object.entries(newParams)) {
				if (value) urlSearchParams.set(key, value);
				else urlSearchParams.delete(key);
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

	const handleSearch = useCallback((search: string) => {
		setPaginationState((prevState) => ({
			...prevState,
			search,
			pageIndex: 0,
		}));
	}, []);

	useEffect(() => {
		if (!isInitializedRef.current) {
			isInitializedRef.current = true;
			return;
		}

		updateQueryString({
			search: debouncedSearch,
			page: "1",
		});
	}, [debouncedSearch, updateQueryString]);

	return {
		paginationState,
		setPaginationState,
		handlePageChange,
		handleSearch,
	};
}
