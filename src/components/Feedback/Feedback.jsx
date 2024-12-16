import FeedbackLine from "./FeedbackLine.jsx";
import CONSTANTS from "../../constants.js";
import {useEffect, useState} from "react";


const Feedback = ({good, neutral, bad}) => {
	const [totalFeedback, setTotalFeedback] = useState(0);
	const [positiveFeedback, setPositiveFeedback] = useState(0);
	
	useEffect(() => {
		setTotalFeedback( good + neutral + bad);
		setPositiveFeedback(Math.round(((good + neutral) / (good + neutral + bad)) * 100))
		
		}, [good, neutral, bad]
	)
	
	return (
		<div className="feedback">
			{
				good + neutral + bad !== 0
					? <>
						<FeedbackLine value={good}>
							{CONSTANTS.STATE.GOOD}
						</FeedbackLine>
						
						<FeedbackLine value={neutral}>
							{CONSTANTS.STATE.NEUTRAL}
						</FeedbackLine>
						
						<FeedbackLine value={bad}>
							{CONSTANTS.STATE.BAD}
						</FeedbackLine>
						
						<FeedbackLine value={totalFeedback}>
							{CONSTANTS.TOTAL}
						</FeedbackLine>
						
						<FeedbackLine value={`${positiveFeedback}%`}>
							{CONSTANTS.POSITIVE}
						</FeedbackLine>
					</>
					: <p>No feedback yet</p>
			}
		</div>
	)
}

export default Feedback;