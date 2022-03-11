import styled from "styled-components";
import { size } from "../../utils/devices";

export const StyledInputWrapper = styled.div<{ error?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;

	${({ error }) => error && `border: 1px solid red;`}

	&:hover {
		box-shadow: 1px 1px 1px thistle;
	}
`;

export const StyledInput = styled.input`
	flex: 1 0;
	min-width: 50px;
	min-height: 25px;
	font-size: inherit;
	background-color: transparent;
	padding-left: 5px;
	border: 0;
	&:focus {
		outline: none;
	}

	@media (min-width: ${size.lg}) {
		font-size: 1.1rem;
	}
`;

export const StyledIconWrapper = styled.div`
	flex: 0 0;
	display: flex;
	align-items: center;
	justify-content: center;

	& > * + * {
		margin-left: 0.5rem;
	}
`;

export const StyledErrorText = styled.span`
	color: red;
	font-size: 0.8rem;
`;
