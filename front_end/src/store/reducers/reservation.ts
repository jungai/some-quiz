import { Restaurant } from "../../utils/mock_api/restaurant";
import {
	ActionTypes,
	FETCH_RESERV_RESTAURANT_DATA,
	FETCH_RESERV_RESTAURANT_ERROR,
	FETCH_RESERV_RESTAURANT_SUCCESS,
	RESET_RESERV_RESTAURANT_DATA,
	SET_PACKAGE,
	SET_DATE,
	SET_TIME_SLOT,
	SET_NOG,
	SET_CUSTOMER_NAME,
	SET_CUSTOMER_PHONE,
} from "../actions/reservation";

export interface ReservationReducerState {
	payload?: Restaurant;
	isLoading: boolean;
	error: null | Error;
	form: {
		selectedPackageId?: number;
		selectedDateId?: string;
		selectedTimeSlotId?: number;
		selectedNOGId?: number;
		customerName?: string;
		customerPhone?: string;
	};
}

const initialState = {
	payload: undefined,
	isLoading: false,
	error: null,
	form: {},
};

export const reservationReducer = (
	state: ReservationReducerState = initialState,
	action: ActionTypes
): ReservationReducerState => {
	switch (action.type) {
		case FETCH_RESERV_RESTAURANT_DATA:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_RESERV_RESTAURANT_SUCCESS:
			return {
				...state,
				payload: action.payload,
				isLoading: false,
			};
		case FETCH_RESERV_RESTAURANT_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case RESET_RESERV_RESTAURANT_DATA:
			return { ...state, ...initialState };
		case SET_PACKAGE:
			return {
				...state,
				form: {
					...state.form,
					selectedPackageId: action.payload,
				},
			};
		case SET_DATE:
			return {
				...state,
				form: {
					...state.form,
					selectedDateId: action.payload,
				},
			};
		case SET_TIME_SLOT:
			return {
				...state,
				form: {
					...state.form,
					selectedTimeSlotId: action.payload,
				},
			};

		case SET_NOG:
			return {
				...state,
				form: {
					...state.form,
					selectedNOGId: action.payload,
				},
			};

		case SET_CUSTOMER_NAME:
			return {
				...state,
				form: {
					...state.form,
					customerName: action.payload,
				},
			};
		case SET_CUSTOMER_PHONE:
			return {
				...state,
				form: {
					...state.form,
					customerPhone: action.payload,
				},
			};

		default:
			return state;
	}
};
