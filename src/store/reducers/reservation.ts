import { NormalizeReservation } from "../../utils/mock_api/reservation";
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
	CREATE_RESERV_ERROR,
	CREATE_RESERV_SUCCESS,
	CREATE_RESERV_DATA,
	FETCH_RESERVATION_DATA,
	FETCH_RESERVATION_SUCCESS,
	FETCH_RESERVATION_ERROR,
	RESET_RESERVATION_DATA,
} from "../actions/reservation";

export interface ReservationReducerState {
	restaurant?: Restaurant;
	payload?: NormalizeReservation[];
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
	isSuccess: boolean;
}

const initialState: ReservationReducerState = {
	payload: [],
	isLoading: false,
	isSuccess: false,
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
				restaurant: action.payload,
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
		case CREATE_RESERV_DATA:
			return {
				...state,
				isLoading: true,
			};
		case CREATE_RESERV_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: action.payload,
			};
		case CREATE_RESERV_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case FETCH_RESERVATION_DATA:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_RESERVATION_SUCCESS:
			return {
				...state,
				payload: action.payload,
				isLoading: false,
			};
		case FETCH_RESERVATION_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		// case RESET_RESERVATION_DATA:
		// 	return { ...state, ...initialState };
		default:
			return state;
	}
};
