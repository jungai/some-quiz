import styled from "styled-components";

const MainLayout = styled.main`
	max-width: 1280px;
	width: 100%;
	padding: 0.8rem 1rem;
	margin: 0 auto;

	& > * + * {
		margin-top: 1rem;
	}
`;

export default MainLayout;
