import styled from "styled-components";

export const StylePageLoadContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledPageLoadWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	& div {
		display: inline-block;
		position: absolute;
		left: 8px;
		width: 16px;
		background: tomato;
		animation: load 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	}
	& div:nth-child(1) {
		left: 8px;
		animation-delay: -0.24s;
	}
	& div:nth-child(2) {
		left: 32px;
		animation-delay: -0.12s;
	}
	& div:nth-child(3) {
		left: 56px;
		animation-delay: 0;
	}

	@keyframes load {
		0% {
			top: 8px;
			height: 64px;
		}
		50%,
		100% {
			top: 24px;
			height: 32px;
		}
	}
`;
