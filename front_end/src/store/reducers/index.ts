import { combineReducers } from "redux";
import { reservationReducer } from "./reservation";
import { restaurantReducer } from "./restaurant";

export default combineReducers({
	restaurants: restaurantReducer,
	reservation: reservationReducer,
});
