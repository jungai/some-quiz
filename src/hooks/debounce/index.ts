import { useState, useEffect } from "react";

// refs {@link https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci}
export default function useDebounce<T>(value: T, delay: number = 1000) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
}
