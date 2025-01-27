"use client";

import { Input } from "@/shared/components/ui/input";
import useDebounce from "@/shared/hooks/use-debounce";
import { useEffect, useState } from "react";

type Prop = {
	handleSearch: (search: string) => void;
};

export default function SearchInput({ handleSearch }: Prop) {
	const [value, setValue] = useState("");
	const debouncedValue = useDebounce(value, 500);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		handleSearch(debouncedValue);
	}, [debouncedValue]);

	return (
		<div className="flex items-center py-4">
			<Input
				placeholder="Search sessions..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="max-w-sm"
			/>
		</div>
	);
}
