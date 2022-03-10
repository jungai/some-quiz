import styled from "styled-components";
import { size } from "../../utils/devices";

export const StyledCardContainer = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	border: 1px solid #ccc;
	height: 280px;
	width: 100%;
`;

export const StyledCardImgWrapper = styled.div`
	height: 60%;
`;

export const StyledCardImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const StyledCardTextWrapper = styled.div`
	margin: 0.5rem;
	width: 100%;
`;

// TODO: variable thing ...
export const StyledCardTextTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;

	@media (min-width: ${size.md}) {
		font-size: 1.4rem;
	}
`;

export const StyledCardTextLocation = styled.p`
	font-size: 0.8rem;
	opacity: 0.8;

	@media (min-width: ${size.md}) {
		font-size: 1rem;
		opacity: 0.6;
	}
`;
