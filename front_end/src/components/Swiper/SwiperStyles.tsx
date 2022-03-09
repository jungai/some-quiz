import styled from "styled-components";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const StyledSwiperContainer = styled(Swiper)`
	width: 100%;
	height: 400px;
`;

// export const StyledSwiperSlide = styled(SwiperSlide)``;

export const StyledSwiperImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
