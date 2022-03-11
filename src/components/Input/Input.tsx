import type { FC } from "react";
import { FcSearch } from "react-icons/fc";
import Loading from "../Loading";
import {
	StyledIconWrapper,
	StyledInput,
	StyledInputWrapper,
	StyledErrorText,
} from "./InputStyles";

interface InputProps {
	placeholder?: string;
	showIcon?: boolean;
	isLoading?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string | number;
	name?: string;
	type?: string;
	error?: boolean;
	errText?: string;
}

export const Input: FC<InputProps> = ({
	placeholder = "กรอกชื่อร้านอาหาร ....",
	showIcon = true,
	isLoading = false,
	onChange,
	value,
	name,
	type,
	error,
	errText,
}) => {
	return (
		<div>
			<StyledInputWrapper error={error}>
				<StyledInput
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					type={type}
				/>
				<StyledIconWrapper>
					{isLoading && <Loading />}
					{showIcon && <FcSearch />}
				</StyledIconWrapper>
			</StyledInputWrapper>
			{error && errText && <StyledErrorText>{errText}</StyledErrorText>}
		</div>
	);
};

export default Input;
