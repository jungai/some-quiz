import type { FC } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./views";

const ReservationPage = lazy(() => import("./views/Reservation"));

export const App: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route
				path="reservation/:id"
				element={
					<Suspense fallback="loading...">
						<ReservationPage />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default App;
