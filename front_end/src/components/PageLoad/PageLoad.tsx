import type { FC } from "react";
import {
	StyledPageLoadWrapper,
	StylePageLoadContainer,
} from "./PageLoadStyles";

export const PageLoading: FC = () => {
	return (
		<StylePageLoadContainer>
			<StyledPageLoadWrapper>
				<div></div>
				<div></div>
				<div></div>
			</StyledPageLoadWrapper>
		</StylePageLoadContainer>
	);
};

export default PageLoading;
