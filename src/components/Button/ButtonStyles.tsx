import styled, { css } from "styled-components";
import { size } from "../../utils/devices";
import type { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
	align-items: center;
	background-color: tomato;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0.5rem 0.6rem;
	transition: all 250ms;
	width: 100%;
	font-size: 1.1rem;

	@media (min-width: ${size.md}) {
		width: 300px;
		font-size: 1.3rem;
	}

	${(props) =>
		props.disabled &&
		css`
			cursor: not-allowed;
			opacity: 0.5;
		`}

	&:hover,
	&:focus {
		background-color: #fb8332;
		box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
	}

	&:hover {
		transform: translateY(-1px);
	}
`;
