import { FC, useEffect } from "react";
import Card from "../Card";
import {
	StyledModal,
	StyledModalWrapper,
	StyledModalCloseBtn,
} from "./ModalStyles";
import { AiOutlineClose } from "react-icons/ai";

export interface ModalProps {
	open?: boolean;
	onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "visible";
		};
	}, []);

	return open ? (
		<StyledModal>
			<StyledModalWrapper>
				<div style={{ width: "350px" }}>
					<Card clean>{children}</Card>
				</div>
				<StyledModalCloseBtn onClick={onClose}>
					<AiOutlineClose />
				</StyledModalCloseBtn>
			</StyledModalWrapper>
		</StyledModal>
	) : null;
};

export default Modal;
