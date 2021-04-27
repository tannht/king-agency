import "./ServiceItem.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceItem = ({
  url,
  serviceTitle,
  serviceContent,
  reverse = false,
}) => (
  <ScrollAnimation animateIn='fadeIn'
  delay={500}
  >
  <div className="ServiceItem">
    <div className={reverse ? "row service-item reverse-col" : "row service-item"}>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className="service-image" src={url} alt=""/>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="service-content">
            <h1>{serviceTitle}</h1>
            <p>{serviceContent}</p>
          </div>
        </div>
    </div>
  </div>
  </ScrollAnimation>
);

export default ServiceItem;
