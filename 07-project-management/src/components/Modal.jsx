import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md" ref={dialog}>
			{children}
			<form className="mt-4 text-right" method="dialog">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.querySelector("#modal-root")
	);
});

export default Modal;
