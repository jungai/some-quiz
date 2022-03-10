export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_IS_LOGIN = "SET_IS_LOGIN";
export const SET_IS_OPEN_AUTH_MODAL = "SET_IS_OPEN_AUTH_MODAL";

export type ActionTypes =
	| { type: typeof LOGIN }
	| { type: typeof LOGOUT }
	| { type: typeof SET_IS_LOGIN; payload: boolean }
	| { type: typeof SET_IS_OPEN_AUTH_MODAL; payload: boolean };

export const login = (): ActionTypes => ({
	type: LOGIN,
});

export const logout = (): ActionTypes => ({
	type: LOGOUT,
});

export const setIsLogin = (val: boolean): ActionTypes => ({
	type: SET_IS_LOGIN,
	payload: val,
});

export const setIsOpenAuthModal = (val: boolean): ActionTypes => ({
	type: SET_IS_OPEN_AUTH_MODAL,
	payload: val,
});
