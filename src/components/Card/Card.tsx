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
	clean?: boolean;
	width?: string;
}

export const Card: FC<CardProps> = ({
	imgSrc,
	title,
	location,
	onClick,
	clean,
	children,
	width,
}) => {
	return (
		<StyledCardContainer onClick={onClick}>
			{clean ? (
				children
			) : (
				<>
					<StyledCardImgWrapper>
						<StyledCardImg src={imgSrc} loading="lazy" />
					</StyledCardImgWrapper>
					<StyledCardTextWrapper>
						<StyledCardTextTitle>{title}</StyledCardTextTitle>
						<StyledCardTextLocation>สาขา - {location}</StyledCardTextLocation>
					</StyledCardTextWrapper>
				</>
			)}
		</StyledCardContainer>
	);
};

export default Card;
