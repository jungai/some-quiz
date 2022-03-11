import styled from "styled-components";

export const StyledModal = styled.div`
	z-index: 50;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	touch-action: none;
	background: rgba(0, 0, 0, 0.5);
`;

export const StyledModalWrapper = styled.div`
	z-index: 60;
	position: relative;
`;

export const StyledModalCloseBtn = styled.div`
	position: absolute;
	top: -10px;
	right: -5px;
	border-radius: 50%;
	border: 1px solid #ccc;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	width: 25px;
	cursor: pointer;
`;
