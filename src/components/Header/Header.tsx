import type { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setIsOpenAuthModal } from "../../store/actions/auth";
import { Store } from "../../store/types";
import {
	StyledHeaderContainer,
	StyledHeaderText,
	StyledList,
	StyleListItem,
} from "./HeaderStyles";

interface HeaderProps {
	title?: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
	const isLogin = useSelector((state: Store) => state.auth.isLogin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<StyledHeaderContainer>
			<StyledHeaderText onClick={() => navigate("/")}>{title}</StyledHeaderText>
			<StyledList>
				{isLogin ? (
					<>
						<StyleListItem onClick={() => navigate("reservation/history")}>
							ประวัติการจอง
						</StyleListItem>
						<StyleListItem onClick={() => dispatch(logout())}>
							ออกจากระบบ
						</StyleListItem>
					</>
				) : (
					<StyleListItem onClick={() => dispatch(setIsOpenAuthModal(true))}>
						เข้าสู่ระบบ
					</StyleListItem>
				)}
			</StyledList>
		</StyledHeaderContainer>
	);
};

export default Header;
