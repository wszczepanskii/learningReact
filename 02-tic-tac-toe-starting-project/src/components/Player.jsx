import { useState } from "react";

export default function Player({ initName, symbol, isActive, onChangeName }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initName);

	function handleClick() {
		setIsEditing((editing) => !editing);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	let btnCaption = "Edit";

	if (isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={handleChange} />
		);
		btnCaption = "Save";
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleClick}>{btnCaption}</button>
		</li>
	);
}
