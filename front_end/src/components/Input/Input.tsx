import type { FC } from "react";
import { FcSearch } from "react-icons/fc";
import Loading from "../Loading";
import {
	StyledIconWrapper,
	StyledInput,
	StyledInputWrapper,
} from "./InputStyles";

interface InputProps {
	placeholder?: string;
	showIcon?: boolean;
	isLoading?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string | number;
}

export const Input: FC<InputProps> = ({
	placeholder = "กรอกชื่อร้านอาหาร ....",
	showIcon = true,
	isLoading = false,
	onChange,
	value,
}) => {
	return (
		<StyledInputWrapper>
			<StyledInput
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			<StyledIconWrapper>
				{isLoading && <Loading />}
				{showIcon && <FcSearch />}
			</StyledIconWrapper>
		</StyledInputWrapper>
	);
};

export default Input;
