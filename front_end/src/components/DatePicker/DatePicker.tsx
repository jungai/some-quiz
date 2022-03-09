import type { FC } from "react";
import { useState } from "react";
import { StyledInputWrapper } from "../Input/InputStyles";
import { StyledDatePicker } from "./DatePickerStyles";

export const DatePicker: FC = () => {
	const [selectedDate, setSelectedDate] = useState<string | undefined>();
	const currentDate = new Date().toISOString().split("T")[0];

	return (
		<StyledInputWrapper>
			<StyledDatePicker
				type="date"
				id="selected-date"
				name="selected-date"
				value={selectedDate || currentDate}
				min={currentDate}
				onChange={(e) => setSelectedDate(e.target.value)}
			/>
		</StyledInputWrapper>
	);
};

export default DatePicker;
