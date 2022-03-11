import { mockInstance } from "../../../utils/axios";
import { NormalizeReservation } from "../../../utils/mock_api/reservation";

interface GetReservationParams {
	id: number;
}

export const getReservation = async ({ id }: GetReservationParams) => {
	const { data } = await mockInstance.get<NormalizeReservation[]>(
		`v1/reservations/${id}`
	);

	return data;
};
