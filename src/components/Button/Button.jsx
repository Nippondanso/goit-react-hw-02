const Button = ({ onClick, children, ...rest }) => (
	<button onClick={onClick}>
		{children}
	</button>
)

export default Button;
