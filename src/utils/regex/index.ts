export function regex(value: unknown, regex: RegExp): boolean {
	if (typeof value !== "string" || !regex.test(value.trim())) {
		return false;
	}
	return true;
}

export const REGEX_TH_PHONE_NUMB = /^0[1-9][0-9]{8}$/;

export function isPhoneNumber(value: unknown): boolean {
	return regex(value, REGEX_TH_PHONE_NUMB);
}
