export type GlobalResponse<T> = {
	success: boolean;
	payload: T;
	message: string;
};
