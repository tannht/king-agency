import { Link } from "react-router-dom";
import "./BrandingItem.scss";

const BrandingItem = ({ branding }) => (
  <div className="BrandingItem">
    <img src={branding.url} alt="" />
    <div className="branding-content">
      <Link to="/" ><h3>{branding.title}</h3></Link>
      <div className="branding-description">{branding.description}</div>
    </div>
  </div>
);

export default BrandingItem;
