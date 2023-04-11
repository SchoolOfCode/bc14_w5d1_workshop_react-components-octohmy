import Button from "../Button"


// someText={props.someText}

function Card (props){
    return (
        <div className="card">
        <h1>Card</h1>
        <p>take a peek</p>
        <Button someText={props.someText}/>
        <img alt="soc" width={"100%"} src={"https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg"} />
        </div>

    );
};

export default Card;
