import React from "react";
import PageDescription from "../../components/PageDescription";
import ServiceItem from "./components/ServiceItem";
import "./OurWork.scss";

const OurWork = () => (
  <div className="OurWork">
    <div className="container">
      <PageDescription
        title="Our Services"
        titleContent="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />

      <ServiceItem
        url="https://space.edu.vn/wp-content/uploads/2018/09/business-background.jpg"
        serviceTitle="Strategy"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable"
      />

      <ServiceItem
        url="https://space.edu.vn/wp-content/uploads/2018/09/business-background.jpg"
        serviceTitle="Strategy"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable"
        reverse={true}
      />
    </div>
  </div>
);

export default OurWork;
