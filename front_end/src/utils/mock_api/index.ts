import { setupWorker, SetupWorkerApi } from "msw";
import { getRestaurantByIdHandler, getRestaurantsHandler } from "./restaurant";

export const handlers = [
	getRestaurantsHandler, // /v1/restaurants
	getRestaurantByIdHandler, // v1/restaurants/:id
];

export const worker: () => SetupWorkerApi = () => setupWorker(...handlers);
