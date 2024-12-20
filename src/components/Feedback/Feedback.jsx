import FeedbackLine from "./FeedbackLine.jsx";
import Notification from "../Notification/Notification.jsx";

const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback}) => {
	return (<div className="feedback">
			{totalFeedback !== 0 ? <>
				<FeedbackLine value={good}>
					{"Good"}
				</FeedbackLine>
				
				<FeedbackLine value={neutral}>
					{"Neutral"}
				</FeedbackLine>
				
				<FeedbackLine value={bad}>
					{"Bad"}
				</FeedbackLine>
				
				<FeedbackLine value={totalFeedback}>
					{"Total"}
				</FeedbackLine>
				
				<FeedbackLine value={`${positiveFeedback}%`}>
					{"Positive"}
				</FeedbackLine>
			</> : <Notification message={"No feedback yet."}/>}
		</div>)
}

export default Feedback;