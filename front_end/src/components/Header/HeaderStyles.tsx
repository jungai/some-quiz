import styled from "styled-components";
import { size } from "../../utils/devices";

export const StyledHeaderContainer = styled.header`
	display: flex;
	width: 100%;
	height: 60px;
	background-color: white;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	border-bottom: 1px solid #e6e6e6;

	@media (min-width: ${size.md}) {
		padding: 0 5rem;
	}
`;

export const StyledHeaderText = styled.h1`
	color: tomato;
`;

export const StyledIconWrapper = styled.div`
	display: block;

	@media (min-width: ${size.md}) {
		display: none;
	}
`;
