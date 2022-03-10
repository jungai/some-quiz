import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getRestaurants } from "../../data_services/restaurants/get";
import { Restaurant } from "../../utils/mock_api/restaurant";
import { Store } from "../types";

export const FETCH_RESERV_RESTAURANT_DATA = "FETCH_RESERV_RESTAURANT_DATA";
export const FETCH_RESERV_RESTAURANT_SUCCESS =
	"FETCH_RESERV_RESTAURANT_SUCCESS";
export const FETCH_RESERV_RESTAURANT_ERROR = "FETCH_RESERV_RESTAURANT_ERROR";
export const RESET_RESERV_RESTAURANT_DATA = "RESET_RESERV_RESTAURANT_DATA";
export const SET_PACKAGE = "SET_PACKAGE";
export const SET_DATE = "SET_DATE";
export const SET_TIME_SLOT = "SET_TIME_SLOT";
export const SET_NOG = "SET_NOG";
export const SET_CUSTOMER_NAME = "SET_CUSTOMER_NAME";
export const SET_CUSTOMER_PHONE = "SET_CUSTOMER_PHONE";

export type ActionTypes =
	| { type: typeof FETCH_RESERV_RESTAURANT_DATA }
	| { type: typeof FETCH_RESERV_RESTAURANT_SUCCESS; payload: Restaurant }
	| { type: typeof FETCH_RESERV_RESTAURANT_ERROR; error: Error }
	| { type: typeof RESET_RESERV_RESTAURANT_DATA }
	| { type: typeof SET_PACKAGE; payload: number }
	| { type: typeof SET_DATE; payload: string }
	| { type: typeof SET_TIME_SLOT; payload: number }
	| { type: typeof SET_NOG; payload: number }
	| { type: typeof SET_CUSTOMER_NAME; payload: string }
	| { type: typeof SET_CUSTOMER_PHONE; payload: string };

export const setPackage = (id: number): ActionTypes => ({
	type: SET_PACKAGE,
	payload: id,
});

export const setDate = (time: string): ActionTypes => ({
	type: SET_DATE,
	payload: time,
});

export const setTimeSLot = (id: number): ActionTypes => ({
	type: SET_TIME_SLOT,
	payload: id,
});

export const setNOG = (id: number): ActionTypes => ({
	type: SET_NOG,
	payload: id,
});

export const setCustomerName = (name: string): ActionTypes => ({
	type: SET_CUSTOMER_NAME,
	payload: name,
});

export const setCustomerPhone = (number: string): ActionTypes => ({
	type: SET_CUSTOMER_PHONE,
	payload: number,
});

export const resetReservation = (): ActionTypes => ({
	type: "RESET_RESERV_RESTAURANT_DATA",
});

export const fetchRestaurantData =
	(
		id?: number
	): ThunkAction<void, Store["reservation"], unknown, Action<string>> =>
	async (dispatch) => {
		dispatch({ type: FETCH_RESERV_RESTAURANT_DATA });
		try {
			const data = await getRestaurants({ id });

			dispatch({
				type: FETCH_RESERV_RESTAURANT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: FETCH_RESERV_RESTAURANT_ERROR,
				error,
			});
		}
	};
