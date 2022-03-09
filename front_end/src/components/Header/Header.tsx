import type { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
	StyledHeaderContainer,
	StyledHeaderText,
	StyledIconWrapper,
} from "./HeaderStyles";

interface HeaderProps {
	title?: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<StyledHeaderContainer>
			<StyledIconWrapper>
				<AiOutlineMenu size="1.4rem" />
			</StyledIconWrapper>
			<StyledHeaderText>{title}</StyledHeaderText>
		</StyledHeaderContainer>
	);
};

export default Header;
