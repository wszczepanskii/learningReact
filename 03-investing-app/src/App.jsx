import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 1000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(inputId, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputId]: +newValue,
			};
		});
	}

	const inputIsValid = userInput.duration > 0;

	return (
		<>
			<Header />
			<UserInput onChangeInput={handleChange} userInput={userInput} />
			{!inputIsValid && (
				<p className="center">Please enter a duration greater than 0.</p>
			)}
			{inputIsValid && <ResultsTable input={userInput} />}
			{/* <ResultsTable input={userInput} /> */}
		</>
	);
}

export default App;
