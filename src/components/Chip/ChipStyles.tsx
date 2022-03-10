import styled, { css } from "styled-components";
import type { ChipProps } from "./Chip";

type ChipContainerProps = Pick<ChipProps, "variant">;

export const StyledChipContainer = styled.div<ChipContainerProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0.4rem 0.6rem;
	border-radius: 1rem;
	cursor: pointer;
	${(props) =>
		props.variant === "outlined" &&
		css`
			border: 1px solid tomato;
			background-color: white;
			color: tomato;
		`}
	${(props) =>
		props.variant === "filled" &&
		css`
			border: 1px solid tomato;
			background-color: tomato;
			color: white;
		`};

	&:hover {
		background-color: tomato;
		color: white;
	}
`;
