import {useEffect, useState} from 'react';
import './App.css';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import UseLocalStorage from "./components/hooks/useLocalStorage.js";

function App() {
	
	const [positiveFeedback, setPositiveFeedback] = useState(0);
	const [totalFeedback, setTotalFeedback] = useState(0);
	
	const [feedbackData, setFeedbackData] = useState(() => {
		let data = UseLocalStorage.getValue("feedback_key");
		
		if (data !== null) {
			return JSON.parse(data);
		}
		
		return {
			good: 0, neutral: 0, bad: 0,
		}
	});
	
	useEffect(() => {
		UseLocalStorage.setValue("feedback_key", feedbackData);
		const {good, neutral, bad} = feedbackData;
		
		setTotalFeedback(good + neutral + bad);
		setPositiveFeedback(Math.round(((good + neutral) / (good + neutral + bad)) * 100));
		
	}, [feedbackData]);
	
	const updateFeedback = (feedbackType) => {
		if (feedbackType !== "reset") {
			setFeedbackData(() => ({
				...feedbackData, [feedbackType]: feedbackData[feedbackType] + 1,
			}));
		} else {
			setFeedbackData({
				good: 0, neutral: 0, bad: 0,
			})
		}
	};
	
	return (<>
			<Description
				name={"Sip Happens Café"}
				message={"Будь ласка, залишіть свій відгук про наш сервіс, обравши один із нижче запропонованих варіантів."}
			/>
			<Options
				updateFeedback={updateFeedback}
				totalFeedback={totalFeedback}
			/>
			<Feedback
				{...feedbackData}
				positiveFeedback={positiveFeedback}
				totalFeedback={totalFeedback}
			/>
		</>)
}

export default App
