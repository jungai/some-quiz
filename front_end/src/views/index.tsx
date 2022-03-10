import Input from "../components/Input";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { size } from "../utils/devices";
import Card from "../components/Card";
import MainLayout from "../layouts/Main";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/debounce";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllRestaurantData } from "../store/actions/restaurant";
import { Store } from "../store/types";
import Loading from "../components/Loading";

const TotalText = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	& > span {
		color: tomato;
		text-decoration: underline;
		font-weight: bold;
	}
	@media (min-width: ${size.md}) {
		font-size: 1.4rem;
	}

	@media (min-width: ${size.lg}) {
		font-size: 1.5rem;
	}
`;

const CardWrapper = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(1, 1fr);

	@media (min-width: ${size.md}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${size.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

function App() {
	const navigate = useNavigate();
	const restaurants = useSelector((state: Store) => state.restaurants.payload);
	const isLoadingRestaurants = useSelector(
		(state: Store) => state.restaurants.isLoading
	);
	const dispatch = useDispatch();

	// State and setter for search term
	const [searchTerm, setSearchTerm] = useState("");

	const handleClick = (id: number) => {
		navigate(`reservation/${id}`);
	};

	const debouncedSearchTerm = useDebounce(searchTerm, 800);

	useEffect(() => {
		dispatch(fetchAllRestaurantData(searchTerm));
	}, [debouncedSearchTerm]);

	return (
		<div>
			<MainLayout>
				<Input
					type="search"
					value={searchTerm}
					isLoading={isLoadingRestaurants}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				{isLoadingRestaurants ? (
					<Loading size="2rem" />
				) : (
					<>
						<TotalText>
							ร้านอาหารทั้งหมด <span>{restaurants.length}</span> รายการ
						</TotalText>
						<CardWrapper>
							{restaurants.map((restaurant, index) => (
								<Card
									key={`${index}-${restaurant.name}`}
									title={restaurant.name}
									imgSrc={restaurant.pics[0]}
									location={restaurant.location}
									onClick={() => handleClick(restaurant.id)}
								/>
							))}
						</CardWrapper>
					</>
				)}
			</MainLayout>
		</div>
	);
}

export default App;
