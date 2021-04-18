import InfoButton from "../../../components/InfoButton";
import SubMenu from "../../../components/sub_components/SubMenu";
import "./Info.scss";

const Info = () => (
  <div className="Info container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-bg-1"></div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info">
        <h4>About Us</h4>
        <h3>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h3>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
        </p>
        <InfoButton label="View More" />
      </div>
    </div>
    <div className="padding"></div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info">
        <h4>Our Work</h4>
        <h3>It is a long established fact that a bla bla bla ...</h3>
        <SubMenu />

        <InfoButton label={"All"} horizontalPadding={true} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-bg-2"></div>
    </div>
  </div>
);

export default Info;
