import type { FC } from "react";
import App from "./App";
import GlobalStyle from "./configs/global_styles";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./utils/mock_api";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const Provider: FC = () => {
	// start mock service worker(msw)
	worker().start();

	return (
		<ReduxProvider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</ReduxProvider>
	);
};

export default Provider;
