import styled from "styled-components";
import { size } from "../../utils/devices";

export const StyledLoginModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
	justify-content: center;
	height: 100%;

	& > * + * {
		margin-top: 1rem;
	}
`;

export const StyledLoginModalTitle = styled.h1`
	text-align: center;
	font-size: 1.1rem;
	font-weight: 500;

	@media (min-width: ${size.md}) {
		font-size: 1.4rem;
	}
`;

export const StyledLoginWithFacebook = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 0.6rem;
	background-color: #3b5998;
	color: white;
	font-size: 0.9rem;
	cursor: pointer;
`;
