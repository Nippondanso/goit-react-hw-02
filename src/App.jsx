import {useEffect, useState} from 'react';
import './App.css';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import CONSTANTS from "./constants.js";
import UseLocalStorage from "./components/hooks/useLocalStorage.js";

function App() {
	const [feedbackData, setFeedbackData] = useState(() => {
		
		let data = UseLocalStorage.getValue(CONSTANTS.FEEDBACK_DATA_KEY);
		
		if (data !== null) {
			return JSON.parse(data);
		}
		
		return {
			good: 0,
			neutral: 0,
			bad: 0,
		}
	});
	
	
	
	useEffect(() => {
		UseLocalStorage.setValue(CONSTANTS.FEEDBACK_DATA_KEY, feedbackData);
	
	},[feedbackData])
	
	const updateFeedback = (feedbackType) => {
		if (feedbackType !== "reset") {
			setFeedbackData(() => ({
				...feedbackData,
				[feedbackType]: feedbackData[feedbackType] + 1,
			}));
		} else{
			setFeedbackData({
				good: 0,
				neutral: 0,
				bad: 0,

			})
		}
	};
	
	
	
	
	return (
		<>
			<Description>
				<h1>{CONSTANTS.CAFE_NAME}</h1>
				<p>{CONSTANTS.CAFE_DESC}</p>
			</Description>
			
			<Options updateFeedback={updateFeedback} feedbackData={feedbackData}/>
			
			<Feedback {...feedbackData}/>
		</>
	)
}

export default App
