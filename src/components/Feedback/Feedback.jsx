import FeedbackLine from "./FeedbackLine.jsx";

const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback}) => {
	return (<div className="feedback">
			 <>
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
			</>
		</div>)
}

export default Feedback;