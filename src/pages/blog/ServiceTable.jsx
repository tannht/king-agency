import "./ServiceTable.scss";

const ServiceItem = ({ image, title, description }) => (
  <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
    <div className="service-item">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ServiceTable = () => (
  <div className="ServiceTable">
    <div className="row">
      <ServiceItem
        image="./assets/images/icons/inl_grey.svg"
        title="Strategy"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
      <ServiceItem
        image="./assets/images/icons/tik_grey.svg"
        title="Branding"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
      <ServiceItem
        image="./assets/images/icons/tum_grey.svg"
        title="Digital Marketing"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
      <ServiceItem
        image="./assets/images/icons/ins_grey.svg"
        title="Web/App"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
      <ServiceItem
        image="./assets/images/icons/fb_grey.svg"
        title="Booking"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
      <ServiceItem
        image="./assets/images/icons/yt_grey.svg"
        title="Become Influencer"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
      />
    </div>
  </div>
);

export default ServiceTable;
