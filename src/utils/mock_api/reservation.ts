import { rest } from "msw";
import { v4 } from "uuid";
import {
	Restaurant,
	Slot,
	mockRestaurants,
	mockNOG,
	mockTimeSlots,
} from "./restaurant";

interface User {
	id: number;
	name: string;
	username: string;
	msisdn: string;
}

export const mockUsers: User[] = [
	{
		id: 1,
		name: "junior",
		username: "junior1234",
		msisdn: "0123456789",
	},
];

export interface Reservation {
	id: string;
	userId: number;
	restaurantId: number;
	packageId: number;
	date: string;
	nogId: number;
	timeSlotId: number;
	customerName: string;
	customerPhone: string;
	createDt: string;
}

export interface NormalizeReservation {
	id: string;
	user: User;
	restaurant: Restaurant;
	date: string;
	time: Slot;
	nog: Slot;
	customerName: string;
	customerPhone: string;
}

export let mockReservations: Reservation[] = [];

export const getReservationHandler = rest.get(
	"https://test.mock/v1/reservations/:id",
	(req, res, ctx) => {
		const { id } = req.params;

		// reservation page only
		if (id) {
			const user = mockReservations.filter((res) => res.userId === Number(id));

			// assume that mock data is valid
			const reserveList: NormalizeReservation[] = user.map((us) => ({
				id: us.id,
				user: mockUsers.find((u) => u.id === us.userId) as User,
				restaurant: mockRestaurants.find(
					(r) => r.id === us.restaurantId
				) as Restaurant,
				date: us.date,
				time: mockTimeSlots.find((t) => t.id === us.timeSlotId) as Slot,
				nog: mockNOG.find((n) => n.id === us.nogId) as Slot,
				customerName: us.customerName,
				customerPhone: us.customerPhone,
			}));

			return res(
				ctx.status(200),
				ctx.json<NormalizeReservation[]>(reserveList)
			);
		}
	}
);

export const postReservationHandler = rest.post<Reservation>(
	"https://test.mock/v1/reservations",
	(req, res, ctx) => {
		const { body } = req;

		mockReservations = [
			...mockReservations,
			{ ...body, id: v4(), createDt: new Date().toJSON() },
		];

		return res(ctx.status(200), ctx.json<{ success: true }>({ success: true }));
	}
);
