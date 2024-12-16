import Button from "../Button/Button.jsx";
import CONSTANTS from "../../constants.js";

const Options = ({updateFeedback, feedbackData}) => {
	const { good, neutral, bad } = feedbackData;
	let totalFeedback = good + neutral + bad;
	
	return (
		<>
			<Button onClick={() => updateFeedback('good')}>
				{CONSTANTS.STATE.GOOD}
			</Button>
			
			<Button onClick={() => updateFeedback('neutral')}>
				{CONSTANTS.STATE.NEUTRAL}
			</Button>
			
			<Button onClick={() => updateFeedback('bad')}>
				{CONSTANTS.STATE.BAD}
			</Button>
			
			{totalFeedback !== 0 && <Button onClick={() => updateFeedback('reset')}>
				{CONSTANTS.RESET}
			</Button>}
		</>
	)
}

export default Options;