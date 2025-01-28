"use client";

import { Input } from "@/shared/components/ui/input";

type Prop = {
	placeholder?: string;
	value: string;
	handleSearch: (search: string) => void;
};

export default function SearchInput({
	handleSearch,
	placeholder,
	value,
}: Prop) {
	return (
		<div className="flex items-center py-4">
			<Input
				placeholder={placeholder || "Search..."}
				value={value}
				onChange={(e) => handleSearch(e.target.value)}
				className="max-w-sm"
			/>
		</div>
	);
}
