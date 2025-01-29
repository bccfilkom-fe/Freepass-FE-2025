import type { GlobalResponse } from "../types/response";

export const handleResponse = async <T>(
	action: string,
	response: Response,
): Promise<GlobalResponse<T>> => {
	if (!response.ok) {
		const data = await response.json();

		throw new Error(data.payload.error || `${action} failed`);
	}

	const data = await response.json();

	return {
		success: true,
		payload: data.payload,
		message: `${action} success`,
	};
};
