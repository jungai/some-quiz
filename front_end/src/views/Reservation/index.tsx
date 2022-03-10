import { FC, useState } from "react";
import { useEffect } from "react";
import Reservation from "../../layouts/Reservation";
import Swiper from "../../components/Swiper";
import { useParams, useNavigate } from "react-router-dom";
import Chip from "../../components/Chip";
import Input from "../../components/Input";
import styled, { css } from "styled-components";
import { size } from "../../utils/devices";
import { BiArrowBack } from "react-icons/bi";
import DatePicker from "../../components/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../store/types";
import Button from "../../components/Button";
import {
	fetchRestaurantData,
	resetReservation,
	setCustomerName,
	setCustomerPhone,
	setDate,
	setNOG,
	setPackage,
	setTimeSLot,
} from "../../store/actions/reservation";

const ReservTitle = styled.h1`
	font-size: 1.4rem;
	font-weight: 500;

	@media (min-width: ${size.md}) {
		font-size: 1.5rem;
	}

	@media (min-width: ${size.lg}) {
		font-size: 1.6rem;
	}
`;

const ReservDesc = styled.p`
	font-size: 1rem;
	color: #838383;

	@media (min-width: ${size.md}) {
		font-size: 1.2rem;
	}

	@media (min-width: ${size.lg}) {
		font-size: 1.3rem;
	}
`;

const DetailTitle = styled.h4`
	font-size: 1.2rem;
	font-weight: normal;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		width: 60px;
		height: 3px;
		background-color: tomato;
		bottom: -5px;
		border-bottom-left-radius: 0.6rem;
		border-bottom-right-radius: 0.6rem;
	}
`;

const ChipWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 0.25rem;

	@media (min-width: ${size.lg}) {
		width: 50%;
	}
`;

const Goback = styled(BiArrowBack)`
	cursor: pointer;
`;

const ButtonWrapper = styled.div`
	margin-top: 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ReservationPage: FC = () => {
	// TODO: throw not found cuz no id
	const { id } = useParams();
	const navigate = useNavigate();
	const [disabled, setIsDisabled] = useState(true);

	const dispatch = useDispatch();
	const restaurant = useSelector((state: Store) => state.reservation.payload);
	const selectedPackage = useSelector(
		(state: Store) => state.reservation.form.selectedPackageId
	);
	const selectedDate = useSelector(
		(state: Store) => state.reservation.form.selectedDateId
	);
	const selectedTime = useSelector(
		(state: Store) => state.reservation.form.selectedTimeSlotId
	);
	const selectedNOG = useSelector(
		(state: Store) => state.reservation.form.selectedNOGId
	);
	const customerName = useSelector(
		(state: Store) => state.reservation.form.customerName
	);
	const customerPhone = useSelector(
		(state: Store) => state.reservation.form.customerPhone
	);

	useEffect(() => {
		if (
			!!selectedPackage &&
			!!selectedDate &&
			!!selectedTime &&
			!!selectedNOG &&
			!!customerName &&
			!!customerPhone
		) {
			setIsDisabled(false);
		}
	}, [
		selectedPackage,
		selectedDate,
		selectedTime,
		selectedNOG,
		customerName,
		customerPhone,
	]);

	useEffect(() => {
		dispatch(fetchRestaurantData(Number(id)));

		return () => {
			// should clear state
			dispatch(resetReservation());
		};
	}, []);

	return (
		<Reservation>
			<Goback size="2rem" onClick={() => navigate("/")} />
			{restaurant ? (
				<>
					<ReservTitle>{restaurant?.name}</ReservTitle>
					<ReservDesc>สาขา - {restaurant?.location}</ReservDesc>
					<Swiper imgList={restaurant?.pics || []} />
					<DetailTitle>เลือก Packages</DetailTitle>
					<ChipWrapper>
						{restaurant?.packages.map((item, index) => (
							<Chip
								key={`${index}-${item.text}`}
								variant={selectedPackage === item.id ? "filled" : "outlined"}
								onClick={() => dispatch(setPackage(item.id))}
							>
								{item.text}
							</Chip>
						))}
					</ChipWrapper>
					<DetailTitle>เลือกวันที่</DetailTitle>
					<DatePicker
						value={selectedDate}
						onChange={(e) => dispatch(setDate(e.target.value))}
					/>
					<DetailTitle>เลือกเวลา</DetailTitle>
					<ChipWrapper>
						{restaurant?.timeSlots.map((time, index) => (
							<Chip
								key={`${index}-${time.text}`}
								variant={selectedTime === time.id ? "filled" : "outlined"}
								onClick={() => dispatch(setTimeSLot(time.id))}
							>
								{time.text}
							</Chip>
						))}
					</ChipWrapper>
					<DetailTitle>เลือกจำนวนคน</DetailTitle>
					<ChipWrapper>
						{restaurant?.numberOfGuests.map((nog, index) => (
							<Chip
								key={`${index}-${nog.text}`}
								variant={selectedNOG === nog.id ? "filled" : "outlined"}
								onClick={() => dispatch(setNOG(nog.id))}
							>
								{nog.text}
							</Chip>
						))}
					</ChipWrapper>
					<DetailTitle>กรอกชื่อลูกค้า</DetailTitle>
					<Input
						name="customer-name"
						showIcon={false}
						placeholder="ชื่อ"
						value={customerName || ""}
						onChange={(e) => dispatch(setCustomerName(e.target.value))}
					/>
					<DetailTitle>กรอกเบอร์ลูกค้า</DetailTitle>
					<Input
						name="customer-phone"
						showIcon={false}
						placeholder="เบอร์มือถือ"
						value={customerPhone || ""}
						onChange={(e) => dispatch(setCustomerPhone(e.target.value))}
					/>
					<ButtonWrapper>
						<Button disabled={disabled}>จอง</Button>
					</ButtonWrapper>
				</>
			) : (
				<h1>ไม่เจอ</h1>
			)}
		</Reservation>
	);
};

export default ReservationPage;
