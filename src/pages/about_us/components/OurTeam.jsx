import MemberImages from "./MemberImages";
import "./OurTeam.scss";
import Slider from "./Slider";

const OurTeam = () => {
  return (
    <div className="OurTeam">
      <div className="container">
        <div className="row ourteam-image">
          <div className="bg"></div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3>Our Team</h3>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p> A boutique team of designers, developers & strategists.</p>
          </div>
          <MemberImages />
        </div>
        <div className="kagency">
          <h4>Why Choose</h4>
          <h3>Kagency?</h3>
          <Slider />
          <div className="detail">
            <h1>CREATIVITY</h1>
            <p>
              Repudiandae esse sit ad aspernatur nulla fuga qui accusanum
              incidunt. Voluptas et sed aspernatur. Error qui odio ut deleni
              autem qui alias. Et dolores vitae voluptabus veniam sunt officia
              doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
