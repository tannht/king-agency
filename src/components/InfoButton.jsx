import "./InfoButton.scss";

const InfoButton = ({label, horizontalPadding = false}) => (
    <button className={horizontalPadding ? "InfoButton-padding" : "InfoButton" }>{label}</button>
);

export default InfoButton;