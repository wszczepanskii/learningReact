import Button from "./Button.jsx";

export default function SideBar({
	onStartAddProject,
	projects,
	onSelectProject,
	selectedProjectId,
}) {
	return (
		<aside className="bg-stone-900 w-1/3 py-16 px-8 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="text-xl font-bold text-stone-200 uppercase md:text-xl mb-8">
				Your Projects
			</h2>
			<Button onClick={onStartAddProject}>+ Add Project</Button>
			<ul className="mt-8">
				{projects.map((project) => {
					let cssClasses =
						"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
					// console.log(project);
					if (project.id === selectedProjectId) {
						cssClasses += " bg-stone-800 text-stone-200";
					} else {
						cssClasses += " text-stone-400";
					}

					return (
						<li key={project.id}>
							<button
								onClick={() => onSelectProject(project.id)}
								className={cssClasses}>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
