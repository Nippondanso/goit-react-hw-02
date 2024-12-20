import {useEffect, useState} from 'react';
import './App.css';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";
import UseLocalStorage from "./components/hooks/useLocalStorage.js";

function App() {
	
	const [feedbackData, setFeedbackData] = useState(() => {
		let data = UseLocalStorage.getValue("feedback_key");
		
		if (data !== null) {
			return JSON.parse(data);
		}
		
		return {
			good: 0, neutral: 0, bad: 0,
		}
	});
	const {good, neutral, bad} = feedbackData;
	const totalFeedback = good + neutral + bad;
	const positiveFeedback = Math.round((good / totalFeedback) * 100);
	
	useEffect(() => {
		UseLocalStorage.setValue("feedback_key", feedbackData);
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
			totalFeedback={feedbackData.good + feedbackData.neutral + feedbackData.bad}
		/>
		{totalFeedback > 0
			? <Feedback
				{...feedbackData}
				positiveFeedback={positiveFeedback}
				totalFeedback={totalFeedback}
		/>
			: <Notification message={"No feedback yet."}/>}
	</>)
}

export default App;
