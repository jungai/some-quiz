import type { FC } from "react";
import { StyledButton } from "./ButtonStyles";

export interface ButtonProps {
	onClick?: () => void;
	block?: boolean;
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	block = false,
	disabled,
}) => {
	return (
		<StyledButton block={block} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
