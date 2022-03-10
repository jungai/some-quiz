import type { FC } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Index from "./views";
import PageLoading from "./components/PageLoad";
import LoginModal from "./components/LoginModal";
import { useSelector } from "react-redux";
import { Store } from "./store/types";

const ReservationPage = lazy(() => import("./views/Reservation"));

export const App: FC = () => {
	const isOpenAuthModal = useSelector(
		(state: Store) => state.auth.isOpenAuthModal
	);

	return (
		<>
			<Header title="Jungai" />
			{isOpenAuthModal && <LoginModal open={isOpenAuthModal} />}
			<Routes>
				<Route path="/" element={<Index />} />
				<Route
					path="reservation/:id"
					element={
						<Suspense fallback={<PageLoading />}>
							<ReservationPage />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
