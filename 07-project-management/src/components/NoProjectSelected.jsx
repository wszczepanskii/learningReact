import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className="w-2/3 mt-24 text-center">
			<img
				className="w-16 h-16 object-contain mx-auto"
				src={noProjectImage}
				alt="An empty task list"
			/>
			<p className="font-bold text-xl text-stone-500 my-4">
				No Projects Selected
			</p>
			<p className="text-stone-400 mb-4">
				Select a project or get started with a new one
			</p>
			<p className="mt-8">
				<Button onClick={onStartAddProject}>Create new project</Button>
			</p>
		</div>
	);
}
