import type { FC } from "react";
import { StyledLoadingContainer } from "./LoadingStyles";

interface LoadingProps {
	size?: string;
}

export const Loading: FC<LoadingProps> = ({ size }) => {
	return <StyledLoadingContainer size={size} />;
};

export default Loading;
