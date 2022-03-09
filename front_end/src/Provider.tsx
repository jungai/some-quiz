import type { FC } from "react";
import { StrictMode } from "react";
import App from "./App";
import GlobalStyle from "./configs/global_styles";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./utils/mock_api";

const Provider: FC = () => {
	// start mock service worker(msw)
	worker().start();

	return (
		<StrictMode>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</StrictMode>
	);
};

export default Provider;
