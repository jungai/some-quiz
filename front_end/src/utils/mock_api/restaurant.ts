import { rest } from "msw";

// use for time slot and number_of_guest
export interface Slot {
	id: number;
	text: string;
}

export interface Restaurant {
	id: number;
	name: string;
	pics: string[];
	price: string;
	location: string;
	timeSlots: Slot[];
	numberOfGuests: Slot[];
	packages: Slot[];
}

const mockNOG: Slot[] = [
	{
		id: 1,
		text: "1 ท่าน",
	},
	{
		id: 2,
		text: "2 ท่าน",
	},
	{
		id: 3,
		text: "3 ท่าน",
	},
	{
		id: 4,
		text: "4 ท่าน",
	},
	{
		id: 5,
		text: "5 ท่าน",
	},
	{
		id: 6,
		text: "6 ท่าน",
	},
	{
		id: 7,
		text: "7 ท่าน",
	},
	{
		id: 8,
		text: "8 ท่าน",
	},
	{
		id: 9,
		text: "9 ท่าน",
	},
	{
		id: 10,
		text: "10 ท่าน",
	},
];

const mockTimeSlots: Slot[] = [
	{
		id: 1,
		text: "10:00",
	},
	{
		id: 2,
		text: "11:00",
	},
	{
		id: 3,
		text: "11:00",
	},
	{
		id: 4,
		text: "11:00",
	},
	{
		id: 5,
		text: "12:00",
	},
	{
		id: 6,
		text: "13:00",
	},
	{
		id: 7,
		text: "14:00",
	},
	{
		id: 8,
		text: "15:00",
	},
	{
		id: 9,
		text: "16:00",
	},
	{
		id: 10,
		text: "17:00",
	},
	{
		id: 11,
		text: "18:00",
	},
	{
		id: 12,
		text: "19:00",
	},
	{
		id: 13,
		text: "20:00",
	},
];

const mockRestaurants: Restaurant[] = [
	{
		id: 1,
		name: "Mcdonald",
		pics: [
			"https://assets.brandinside.asia/uploads/2020/06/shutterstock_1181606473.jpg",
			"https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg",
		],
		price: "20-400",
		location: "บางนา",
		timeSlots: mockTimeSlots,
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "499 โครตคุ้ม",
			},
			{
				id: 2,
				text: "699 อิ่มโครต",
			},
		],
	},
	{
		id: 2,
		name: "Mcdonald",
		pics: [
			"https://assets.brandinside.asia/uploads/2020/06/shutterstock_1181606473.jpg",
			"https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg",
		],
		price: "20-400",
		location: "บางนา",
		timeSlots: mockTimeSlots.slice(4, 11),
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "1799 พรีเมี่ยม",
			},
		],
	},
	{
		id: 3,
		name: "Mcdonald",
		pics: [
			"https://assets.brandinside.asia/uploads/2020/06/shutterstock_1181606473.jpg",
			"https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg",
		],
		price: "20-400",
		location: "บางนา",
		timeSlots: mockTimeSlots.slice(3, 7),
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "499 โครตคุ้ม",
			},
			{
				id: 2,
				text: "699 อิ่มโครต",
			},
		],
	},
	{
		id: 4,
		name: "Mcdonald",
		pics: [
			"https://assets.brandinside.asia/uploads/2020/06/shutterstock_1181606473.jpg",
			"https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg",
		],
		price: "20-400",
		location: "บางนา",
		timeSlots: mockTimeSlots,
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "โต๊ะธรรมดา",
			},
		],
	},
	{
		id: 5,
		name: "mxdonald",
		pics: [
			"https://assets.brandinside.asia/uploads/2020/06/shutterstock_1181606473.jpg",
			"https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg",
		],
		price: "20-400",
		location: "บางนา",
		timeSlots: mockTimeSlots,
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "โต๊ะธรรมดา",
			},
			{
				id: 2,
				text: "ห้องส่วนตัว",
			},
		],
	},
	{
		id: 6,
		name: "Mcdonald",
		pics: [
			"https://assets.brandinside.asia/uploads/2020/06/shutterstock_1181606473.jpg",
			"https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg",
		],
		price: "20-400",
		location: "บางนา",
		timeSlots: [],
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "โต๊ะธรรมดา",
			},
			{
				id: 2,
				text: "ห้องส่วนตัว",
			},
		],
	},
];

export const getRestaurantsHandler = rest.get(
	"https://test.mock/v1/restaurants",
	(req, res, ctx) => {
		const name = req.url.searchParams.get("name");
		const id = req.url.searchParams.get("id");

		// reservation page only purpose
		if (id) {
			const restaurant = mockRestaurants.find(
				(restaurant) => restaurant.id === +id
			);
			return res(ctx.status(200), ctx.json<Restaurant | undefined>(restaurant));
		}

		// for search match by name
		if (name) {
			return res(
				ctx.status(200),
				ctx.json<Restaurant[]>(
					mockRestaurants.filter(
						(item) =>
							item.name.toLocaleLowerCase().match(name.toLocaleLowerCase())
								?.length
					)
				)
			);
		}

		return res(ctx.status(200), ctx.json<Restaurant[]>(mockRestaurants));
	}
);

export const getRestaurantByIdHandler = rest.get(
	"https://test.mock/v1/restaurants/:id",
	(req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json<Restaurant[]>(
				mockRestaurants.filter(
					(restaurant) => restaurant.id === Number(req.params.id)
				)
			)
		);
	}
);
