import type { FC } from "react";
import { StyledChipContainer } from "./ChipStyles";

export interface ChipProps {
	variant?: "outlined" | "filled";
	onClick?: () => void;
}

export const Chip: FC<ChipProps> = ({
	variant = "outlined",
	children,
	onClick,
}) => {
	return (
		<StyledChipContainer variant={variant} onClick={onClick}>
			{children}
		</StyledChipContainer>
	);
};

export default Chip;
