import { mockInstance } from "../../../utils/axios";
import { Restaurant } from "../../../utils/mock_api/restaurant";
import { stringify } from "query-string";

interface GetRestaurantsParams {
	name?: string;
	id?: number;
}

export const getRestaurants = async ({ name, id }: GetRestaurantsParams) => {
	const queryStr = stringify(
		{ name, id },
		{ skipEmptyString: true, skipNull: true }
	);

	const { data } = await mockInstance.get<Restaurant[]>(
		`v1/restaurants?${queryStr}`
	);

	return data;
};
