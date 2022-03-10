import type { FC } from "react";
import { useState } from "react";
import { StyledInputWrapper } from "../Input/InputStyles";
import { StyledDatePicker } from "./DatePickerStyles";

export interface DatePickerProps {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ value = "", onChange }) => {
	const currentDate = new Date().toISOString().split("T")[0];

	return (
		<StyledInputWrapper>
			<StyledDatePicker
				type="date"
				id="selected-date"
				name="selected-date"
				value={value}
				min={currentDate}
				onChange={onChange}
			/>
		</StyledInputWrapper>
	);
};

export default DatePicker;
