import { FC, useEffect, Fragment } from "react";
import ReserveLayout from "../../layouts/Reservation";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store/types";
import { fetchReservations } from "../../store/actions/reservation";
import { Navigate, useLocation } from "react-router-dom";

const StyleTitle = styled.h1`
	font-size: 1.4rem;
	font-style: italic;
`;

const StyleHeadText = styled.h3`
	font-size: 0.9rem;
	text-decoration: underline;
	color: tomato;
`;

const StyleText = styled.p`
	font-size: 1.1rem;
	opacity: 0.8;
`;

export const ReservationHistory: FC = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const reservations = useSelector((state: Store) => state.reservation.payload);
	const authInfo = useSelector((state: Store) => state.auth.payload);

	useEffect(() => {
		if (!authInfo) return;

		dispatch(fetchReservations(authInfo.id));
	}, []);

	return authInfo ? (
		<ReserveLayout>
			<StyleTitle>ประวัติการจอง</StyleTitle>
			{(reservations || []).map((data) => (
				<Fragment key={data.id}>
					<StyleHeadText>ชื่อร้าน</StyleHeadText>
					<StyleText>{data.restaurant.name}</StyleText>
					<StyleHeadText>วันที่</StyleHeadText>
					<StyleText>{data.date}</StyleText>
					<StyleHeadText>เวลา</StyleHeadText>
					<StyleText>{data.time.text}</StyleText>
					<StyleHeadText>จำนวน</StyleHeadText>
					<StyleText>{data.nog.text}</StyleText>
					<StyleHeadText>ชื่อที่จอง</StyleHeadText>
					<StyleText>{data.customerName}</StyleText>
					<StyleHeadText>เบอร์ที่จอง</StyleHeadText>
					<StyleText>{data.customerPhone}</StyleText>
					<hr />
				</Fragment>
			))}
		</ReserveLayout>
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
};

export default ReservationHistory;
