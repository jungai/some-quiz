import Modal from "../Modal";
import type { FC } from "react";
import {
	StyledLoginWithFacebook,
	StyledLoginModalWrapper,
	StyledLoginModalTitle,
} from "./LoginModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { login, setIsOpenAuthModal } from "../../store/actions/auth";

export interface LoginModalProps {
	open: boolean;
}

export const LoginModal: FC<LoginModalProps> = ({ open }) => {
	const dispatch = useDispatch();

	const handleLoginWithFacebook = () => {
		dispatch(login());
	};

	const handleCloseLoginModal = () => {
		dispatch(setIsOpenAuthModal(false));
	};

	return (
		<Modal open={open} onClose={handleCloseLoginModal}>
			<StyledLoginModalWrapper>
				<StyledLoginModalTitle>เข้าสู่ระบบ</StyledLoginModalTitle>
				<StyledLoginWithFacebook onClick={handleLoginWithFacebook}>
					Facebook
				</StyledLoginWithFacebook>
			</StyledLoginModalWrapper>
		</Modal>
	);
};

export default LoginModal;
