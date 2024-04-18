import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleSelectProject(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}

	const selectedProject = projectsState.projects.find(
		(project) => project.id == projectsState.selectedProjectId
	);

	function handleDeleteProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	}

	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				taskId: Math.random(),
			};

			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.taskId !== id),
			};
		});
	}

	console.log(projectsState);

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectsState.tasks}
		/>
	);

	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
		);
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar
				onStartAddProject={handleStartAddProject}
				onSelectProject={handleSelectProject}
				projects={projectsState.projects}
				selectedProjectId={projectsState.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
