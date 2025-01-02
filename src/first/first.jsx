export default function first() {
    return (
        <div>
            <Headers/>
            <Footers/>
            <Summary/>
        </div>
    );
}

function Headers() {
    const name = "Headers";
    return (
        <div>
            <h1>{name.toUpperCase()}</h1>
        </div>
    );
}

function Footers() {
    const name = "Footer";
    return (
        <div>
            <p>{name.toLowerCase()}</p>
        </div>
    );
}

function Summary(){
    const name = "This is my summary";
    const style = {
        color: "red" ,
        backgroundColor: "black"
    };
    return (
        <div>
            <p style={style}>{name}</p>
        </div>
    );
}