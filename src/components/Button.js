import './Calculator.css'

export default function Button(props) {
    return (
        <button className="buttonCalc" style={{ backgroundColor: props.bgColor }}>{props.text}</button>
    )
}