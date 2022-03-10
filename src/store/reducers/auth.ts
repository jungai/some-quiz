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
				isOpenAuthModal: false,
			};
		case LOGOUT:
			return {
				...state,
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
