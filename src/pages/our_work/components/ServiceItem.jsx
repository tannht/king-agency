import "./ServiceItem.scss";

const ServiceItem = ({
  url,
  serviceTitle,
  serviceContent,
  reverse = false,
}) => (
  <div className="ServiceItem">
    <div className={reverse ? "row service-item reverse-col" : "row service-item"}>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className="service-image" src={url} />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="service-content">
            <h1>{serviceTitle}</h1>
            <p>{serviceContent}</p>
          </div>
        </div>
    </div>
  </div>
);

export default ServiceItem;
