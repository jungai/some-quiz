import { setupWorker, SetupWorkerApi } from "msw";
import { getReservationHandler, postReservationHandler } from "./reservation";
import { getRestaurantByIdHandler, getRestaurantsHandler } from "./restaurant";

export const handlers = [
	getRestaurantsHandler, // v1/restaurants
	getRestaurantByIdHandler, // v1/restaurants/:id
	getReservationHandler, // v1/reservations/:id
	postReservationHandler, // v1/reservations
];

export const worker: () => SetupWorkerApi = () => setupWorker(...handlers);
