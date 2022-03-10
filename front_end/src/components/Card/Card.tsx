import type { FC } from "react";
import {
	StyledCardContainer,
	StyledCardImg,
	StyledCardImgWrapper,
	StyledCardTextTitle,
	StyledCardTextWrapper,
	StyledCardTextLocation,
} from "./CardStyles";

export interface CardProps {
	imgSrc?: string;
	title?: string;
	location?: string;
	onClick?: () => void;
}

export const Card: FC<CardProps> = ({ imgSrc, title, location, onClick }) => {
	return (
		<StyledCardContainer onClick={onClick}>
			<StyledCardImgWrapper>
				<StyledCardImg src={imgSrc} loading="lazy" />
			</StyledCardImgWrapper>
			<StyledCardTextWrapper>
				<StyledCardTextTitle>{title}</StyledCardTextTitle>
				<StyledCardTextLocation>{location}</StyledCardTextLocation>
			</StyledCardTextWrapper>
		</StyledCardContainer>
	);
};

export default Card;
