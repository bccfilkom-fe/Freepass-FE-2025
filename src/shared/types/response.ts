export type GlobalResponse<T> = {
	success: boolean;
	payload: T;
	message: string;
};

export type PaginationResponse = {
	total_data: number;
	total_page: number;
	page: number;
	limit: number;
};
