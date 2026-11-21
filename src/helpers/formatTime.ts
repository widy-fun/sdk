const formatTime = ({ milliseconds }: { milliseconds?: number }) => {
	const safeMilliseconds =
		typeof milliseconds === "number" && Number.isFinite(milliseconds)
			? Math.max(0, milliseconds)
			: 0;

	const totalSeconds = Math.floor(safeMilliseconds / 1000);
	const totalMinutes = Math.floor(totalSeconds / 60);
	const totalHours = Math.floor(totalMinutes / 60);
	const totalDays = Math.floor(totalHours / 24);

	const years = Math.floor(totalDays / 365);
	const days = totalDays % 365;
	const hours = totalHours % 24;
	const minutes = totalMinutes % 60;
	const seconds = totalSeconds % 60;

	const pad = (value: number, length = 2) =>
		String(value).padStart(length, "0");

	if (years >= 1) {
		return `${years}:${pad(days, 3)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
	}

	if (totalDays >= 1) {
		return `${totalDays}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
	}

	if (totalHours >= 1) {
		return `${pad(totalHours)}:${pad(minutes)}:${pad(seconds)}`;
	}

	return `${pad(minutes)}:${pad(seconds)}`;
};
export default formatTime;
