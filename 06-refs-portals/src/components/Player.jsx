import { useState, useRef } from "react";

export default function Player() {
	const playerNameRef = useRef();

	const [playerName, setPlayerName] = useState(null);
	// const [submitted, setSubmitted] = useState(false);

	// function handleChnage(e) {
	// 	setSubmitted(false);
	// 	setPlayerName(e.target.value);
	// }

	function handleClick() {
		// setSubmitted(true);
		setPlayerName(playerNameRef.current.value);
		playerNameRef.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {playerName ?? "unknown entity"}</h2>
			<p>
				<input
					ref={playerNameRef}
					type="text"
					// onChange={handleChnage}
					// value={playerName}
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
