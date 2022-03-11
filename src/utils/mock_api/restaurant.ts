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
	location: string;
	timeSlots: Slot[];
	numberOfGuests: Slot[];
	packages: Slot[];
}

export const mockNOG: Slot[] = [
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

export const mockTimeSlots: Slot[] = [
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

export const mockRestaurants: Restaurant[] = [
	{
		id: 1,
		name: "หัวปลาช่องนนทรี",
		pics: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUUplHLqChmwBEowNtJEIG_hdalavoyUtbw&usqp=CAU",
			"https://www.ryoiireview.com/upload/article/201706/1498467224_8de60d906db582ebce7cead3867da5f1.jpg",
		],
		location: "บางนา(ตรงจข้ามเมกะบางนา)",
		timeSlots: mockTimeSlots,
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "โต๊ะธรรมดา",
			},
			{
				id: 2,
				text: "ห้องแอร์",
			},
		],
	},
	{
		id: 2,
		name: "Octave Rooftop Lounge & Bar",
		pics: [
			"https://www.eatchillwander.com/wp-content/uploads/2020/08/octave-rooftop-lounge-and-bar-marriott-sukhumvit-bangkok19-1024x683.jpg",
			"https://sites.google.com/site/fooddring123/_/rsrc/1487142476571/la-moon/bar-rest_10.jpg",
		],
		location: "โรงแรมแมริออท",
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
		name: "Copper Buffet",
		pics: [
			"https://bk-review.com/wp-content/uploads/2020/01/all-new-copper-bffet.jpg",
			"https://miro.medium.com/max/1400/1*vb3Ha69xG7HcV0xJyqigBw.jpeg",
		],
		location: "The sense ปิ่นเกล้า",
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
		name: "เอเทรี่ยม @ โรงแรมแลนด์มาร์ค",
		pics: [
			"https://cdn.eatigo.com/restaurant-image/378_d67d7271-2f6a-4f25-bcb6-63b72c68ba3e.jpeg",
			"https://cdn.eatigo.com/restaurant-image/378_7a72d7d3-3c02-44ec-af60-0275a79a09bd.jpeg",
		],
		location: "โรงแรมแลนด์มาร์ค กรุงเทพฯ",
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
		name: "หัวปลาช่องนนทรี",
		pics: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUUplHLqChmwBEowNtJEIG_hdalavoyUtbw&usqp=CAU",
			"https://www.ryoiireview.com/upload/article/201706/1498467224_8de60d906db582ebce7cead3867da5f1.jpg",
		],
		location: "นครอินทร์ (พระราม5)",
		timeSlots: mockTimeSlots,
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "โต๊ะธรรมดา",
			},
			{
				id: 2,
				text: "ห้องแอร์",
			},
		],
	},
	{
		id: 6,
		name: "Yuzu Omakase",
		pics: [
			"https://www.bkkmenu.com/files/sharer/yuzu-omakase.jpg?v=1644175995",
			"https://site.listsothebysrealty.in.th/wp-content/uploads/2020/04/Yuzu-Omakase-2.jpg",
		],
		location: "สยามสแควร์ ซอย 3",
		timeSlots: [],
		numberOfGuests: mockNOG,
		packages: [
			{
				id: 1,
				text: "The Experience (9,500 บาท)",
			},
			{
				id: 2,
				text: "Omakase Course 2,500 บาท",
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
