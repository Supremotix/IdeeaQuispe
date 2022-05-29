const Button = (props) => {
    return <button onClick={props.handleClick} style={{ color: 'blue' }}> {props.label}</button>
}

export default Button