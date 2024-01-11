export default function Log({ turns }) {
	return (
		<ol id="log">
			{turns.map((turn) => (
				<li key={`${turn.square.row + 1}${turn.square.col + 1}`}>
					{turn.player} selected {turn.square.row + 1}, {turn.square.col + 1}
				</li>
			))}
		</ol>
	);
}
