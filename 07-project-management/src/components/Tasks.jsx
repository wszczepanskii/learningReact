import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask, projectId }) {
	const newTasks = tasks.filter((task) => task.projectId === projectId);

	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<NewTask onAddTask={onAddTask} />
			{newTasks.length === 0 && (
				<p className="text-stone-800 my-4">
					This project does not have any tasks yet.
				</p>
			)}
			{newTasks.length > 0 && (
				<ul className="p-4 mt-8 rounded-md bg-stone-100">
					{newTasks.map((task) => (
						<li key={task.taskId} className="flex justify-between my-4">
							<span>{task.text}</span>
							<button
								className="text-stone-700 hover:text-red-500"
								onClick={() => onDeleteTask(task.taskId)}>
								Clear
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
