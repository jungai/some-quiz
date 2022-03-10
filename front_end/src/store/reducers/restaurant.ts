import { Restaurant } from "../../utils/mock_api/restaurant";
import {
	ActionTypes,
	FETCH_RESTAURANT_DATA,
	FETCH_RESTAURANT_ERROR,
	FETCH_RESTAURANT_SUCCESS,
	RESET_RESTAURANT_DATA,
} from "../actions/restaurant";

export interface RestaurantReducerState {
	payload: Restaurant[];
	isLoading: boolean;
	error: null | Error;
}

const initialState: RestaurantReducerState = {
	payload: [],
	isLoading: false,
	error: null,
};

export const restaurantReducer = (
	state: RestaurantReducerState = initialState,
	action: ActionTypes
): RestaurantReducerState => {
	switch (action.type) {
		case FETCH_RESTAURANT_DATA:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_RESTAURANT_SUCCESS:
			return {
				...state,
				payload: action.payload,
				isLoading: false,
			};
		case FETCH_RESTAURANT_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};

		case RESET_RESTAURANT_DATA:
			return { ...state, ...initialState };
		default:
			return state;
	}
};
