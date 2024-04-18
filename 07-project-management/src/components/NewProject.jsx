import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onCancel, onAdd }) {
	const modal = useRef();

	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDate = dueDate.current.value;

		if (
			enteredTitle.trim() === "" ||
			enteredDescription.trim() === "" ||
			enteredDate.trim() === ""
		) {
			modal.current.open();
			return;
		}
		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			date: enteredDate,
		});
	}

	return (
		<>
			<Modal buttonCaption="Okay" ref={modal}>
				<h2 className="font-bold text-xl text-stone-700 my-4">Invalid Input</h2>
				<p className="text-stone-600 mb-4">
					Oops ... looks like you forgot to enter a value.
				</p>
				<p className="text-stone-600 mb-4">
					Please make sure you provide a valid value for every input field.
				</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex justify-end items-center gap-4 my-4">
					<li>
						<button
							onClick={onCancel}
							className="text-stone-800 hover:text-stone-950">
							Cancel
						</button>
					</li>
					<li>
						<button
							onClick={handleSave}
							className="bg-stone-800 hover:bg-stone-950 py-2 px-6 text-stone-50 rounded-md">
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input label="title" type="text" ref={title} />
					<Input label="description" ref={description} textarea />
					<Input label="due date" type="date" ref={dueDate} />
				</div>
			</div>
		</>
	);
}
