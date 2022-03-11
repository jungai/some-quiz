import { mockInstance } from "../../../utils/axios";
import { Reservation } from "../../../utils/mock_api/reservation";

type GetReservationBody = Omit<Reservation, "id" | "createDt">;

export const postReservation = async (body: GetReservationBody) => {
	const { data } = await mockInstance.post<{ success: boolean }>(
		`v1/reservations`,
		{
			...body,
		}
	);

	return data;
};
