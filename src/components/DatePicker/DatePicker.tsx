import type { FC } from "react";
import { useState } from "react";
import { StyledInputWrapper } from "../Input/InputStyles";
import { StyledDatePicker, StyledErrorText } from "./DatePickerStyles";

export interface DatePickerProps {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	errText?: string;
}

export const DatePicker: FC<DatePickerProps> = ({
	value = "",
	onChange,
	errText,
	error,
}) => {
	const currentDate = new Date().toISOString().split("T")[0];

	return (
		<div>
			<StyledInputWrapper error={error}>
				<StyledDatePicker
					type="date"
					id="selected-date"
					name="selected-date"
					value={value}
					min={currentDate}
					onChange={onChange}
				/>
			</StyledInputWrapper>
			{error && errText && <StyledErrorText>{errText}</StyledErrorText>}
		</div>
	);
};

export default DatePicker;
