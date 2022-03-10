import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getRestaurants } from "../../data_services/restaurants/get";
import { Restaurant } from "../../utils/mock_api/restaurant";
import { Store } from "../types";

export const FETCH_RESTAURANT_DATA = "FETCH_RESTAURANT_DATA";
export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS";
export const FETCH_RESTAURANT_ERROR = "FETCH_RESTAURANT_ERROR";
export const RESET_RESTAURANT_DATA = "RESET_RESTAURANT_DATA";

export type ActionTypes =
	| { type: typeof FETCH_RESTAURANT_DATA }
	| { type: typeof FETCH_RESTAURANT_SUCCESS; payload: Restaurant[] }
	| { type: typeof FETCH_RESTAURANT_ERROR; error: Error }
	| { type: typeof RESET_RESTAURANT_DATA };

export const fetchAllRestaurantData =
	(
		name?: string
	): ThunkAction<void, Store["restaurants"], unknown, Action<string>> =>
	async (dispatch) => {
		dispatch({ type: FETCH_RESTAURANT_DATA });
		try {
			const data = await getRestaurants({ name });

			dispatch({
				type: FETCH_RESTAURANT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: FETCH_RESTAURANT_ERROR,
				error,
			});
		}
	};
