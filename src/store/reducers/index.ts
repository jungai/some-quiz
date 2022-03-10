import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { reservationReducer } from "./reservation";
import { restaurantReducer } from "./restaurant";

export default combineReducers({
	restaurants: restaurantReducer,
	reservation: reservationReducer,
	auth: authReducer,
});
