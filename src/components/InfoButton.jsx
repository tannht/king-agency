import { NavLink } from "react-router-dom";
import "./InfoButton.scss";

const InfoButton = ({label, horizontalPadding = false, link}) => (
    <button className={horizontalPadding ? "InfoButton-padding" : "InfoButton" }><NavLink to={link}>{label}</NavLink></button>
);

export default InfoButton;