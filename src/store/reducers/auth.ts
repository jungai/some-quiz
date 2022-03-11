import {
	ActionTypes,
	LOGIN,
	LOGOUT,
	SET_IS_OPEN_AUTH_MODAL,
} from "../actions/auth";

export interface AuthInfo {
	id: number;
	name: string;
	username: string;
	msisdn: string;
}

export interface AuthReducerState {
	payload?: AuthInfo;
	isLoading: boolean;
	error: null | Error;
	isLogin: boolean;
	isOpenAuthModal: boolean;
}

const initialState: AuthReducerState = {
	payload: undefined,
	isLoading: false,
	error: null,
	isLogin: false,
	isOpenAuthModal: false,
};

export const authReducer = (
	state: AuthReducerState = initialState,
	action: ActionTypes
): AuthReducerState => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLogin: true,
				payload: {
					id: 1,
					name: "junior",
					username: "junior1234",
					msisdn: "0123456789",
				},
				isOpenAuthModal: false,
			};
		case LOGOUT:
			return {
				...state,
				payload: undefined,
				isLogin: false,
			};
		case SET_IS_OPEN_AUTH_MODAL:
			return {
				...state,
				isOpenAuthModal: action.payload,
			};

		default:
			return state;
	}
};
