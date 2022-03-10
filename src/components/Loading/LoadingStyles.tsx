import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";

export const StyledLoadingContainer = styled(AiOutlineLoading3Quarters)`
	animation: rotate 1s linear infinite;

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
`;
