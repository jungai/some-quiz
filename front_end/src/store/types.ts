import { AuthReducerState } from "./reducers/auth";
import { ReservationReducerState } from "./reducers/reservation";
import { RestaurantReducerState } from "./reducers/restaurant";

export interface Store {
	restaurants: RestaurantReducerState;
	reservation: ReservationReducerState;
	auth: AuthReducerState;
}
