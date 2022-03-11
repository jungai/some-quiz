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
	font-size: 1.1rem;
	cursor: pointer;

	@media (min-width: ${size.md}) {
		font-size: 1.5rem;
	}
`;

export const StyledIconWrapper = styled.div`
	display: block;

	@media (min-width: ${size.md}) {
		display: none;
	}
`;

export const StyledList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
`;

export const StyleListItem = styled.li`
	padding: 0 0.5rem;
	font-weight: 500;
	font-size: 0.8rem;
	cursor: pointer;

	&:hover {
		color: tomato;
		font-style: italic;
	}

	@media (min-width: ${size.md}) {
		font-size: 1.2rem;
	}
`;
