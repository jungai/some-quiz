import type { FC } from "react";
import { StyledSwiperContainer, StyledSwiperImg } from "./SwiperStyles";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

interface SwiperProps {
	imgList: string[];
}

export const Swiper: FC<SwiperProps> = ({ imgList }) => {
	return (
		<StyledSwiperContainer navigation modules={[Navigation]}>
			{imgList.map((img, index) => (
				<SwiperSlide key={`${index}-${img.slice(0, 10)}`}>
					<StyledSwiperImg src={img} alt="test" />
				</SwiperSlide>
			))}
		</StyledSwiperContainer>
	);
};

export default Swiper;
