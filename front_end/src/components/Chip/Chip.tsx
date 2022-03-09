import type { FC } from "react";
import { StyledChipContainer } from "./ChipStyles";

export interface ChipProps {
	variant?: "outlined" | "filled";
}

export const Chip: FC<ChipProps> = ({ variant = "outlined", children }) => {
	return (
		<StyledChipContainer variant={variant}>{children}</StyledChipContainer>
	);
};

export default Chip;
