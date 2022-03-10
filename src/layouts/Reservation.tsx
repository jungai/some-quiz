import styled from "styled-components";

const Reservation = styled.main`
	max-width: 1000px;
	width: 100%;
	padding: 0.8rem 1rem;
	margin: 0 auto;

	& > * + * {
		margin-top: 1rem;
	}
`;

export default Reservation;
