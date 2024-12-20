import Button from "../Button/Button.jsx";

const Options = ({updateFeedback, totalFeedback}) => {
	
	return (<>
			<Button onClick={() => updateFeedback('good')}>
				Good
			</Button>
			
			<Button onClick={() => updateFeedback('neutral')}>
				Neutral
			</Button>
			
			<Button onClick={() => updateFeedback('bad')}>
				Bad
			</Button>
			
			{totalFeedback >0 && <Button onClick={() => updateFeedback('reset')}>
				Reset
			</Button>}
		</>)
}

export default Options;