export function formatDates(_startDate: string, _endDate: string) {
	const startDate = new Date(_startDate);
	const endDate = new Date(_endDate);

	const startTime = startDate.toLocaleTimeString("id-ID", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
	const endTime = endDate.toLocaleTimeString("id-ID", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
	const formattedDate = startDate.toLocaleDateString("id-ID", {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	return `${startTime} - ${endTime}, ${formattedDate}`;
}

export function timeDifference(_startDate: string, _endDate: string) {
	const startDate = new Date(_startDate);
	const endDate = new Date(_endDate);
	const diff = Math.abs(startDate.getTime() - endDate.getTime());
	const hours = Math.floor(diff / 1000 / 60 / 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);

	if (minutes === 0) {
		return `${hours} hours`;
	}

	if (hours === 0) {
		return `${minutes} minutes`;
	}

	return `${hours} hours ${minutes} minutes`;
}
