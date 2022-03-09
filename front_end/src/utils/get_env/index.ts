function getEnv(key: string): string {
	const val = import.meta.env[key] as string;

	if (!val) {
		throw new Error(`Missing environment variable: ${key}`);
	}

	return val;
}

export function getApiUrl() {
	// for testing only
	try {
		return getEnv("VITE_API_URL");
	} catch (_error) {
		return "https://test.mock/";
	}
}
