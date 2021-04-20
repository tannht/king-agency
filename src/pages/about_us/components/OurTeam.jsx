import MemberImages from "./MemberImages";
import "./OurTeam.scss";

const OurTeam = () => {
  return (
    <div className="OurTeam">
      <div className="container">
        <div className="row ourteam-image">
          <div className="col-6">
            <h3>Our Team</h3>
          </div>
          <div className="col-6">
            <p> A boutique team of designers, developers & strategists.</p>
          </div>
          <MemberImages />
        </div>
        <div className="kagency">
            <h4>Why Choose</h4>
            <h3>Kagency?</h3>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
