import "./Button.css"

function Button (props) {
    return (
        <button className="button">{props.someText}</button>
    )
};

export default Button;
