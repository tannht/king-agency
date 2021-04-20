import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import PageDescription from "../../components/PageDescription";
import "./Branding.scss";
import BrandingModel from "../models/BrandingModel";
import BrandingList from "./BrandingList";
import ServiceTable from "./ServiceTable";

const Branding = () => {
  const brandingList = [
    new BrandingModel({
      url:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new BrandingModel({
      url:
        "https://goodmockups.com/wp-content/uploads/2020/05/Free-Rounded-Corners-Square-Business-Card-Mockup-PSD-Set-1.jpg",
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new BrandingModel({
      url:
        "https://image.freepik.com/free-photo/businessman-pointing-graphs-symbols_1232-917.jpg",
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new BrandingModel({
      url: "https://i.imgur.com/pxxppF4.jpeg",
      tags: ["Branding", "Strategy", "Digital Marketing"],
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new BrandingModel({
      url: "https://i.imgur.com/3nhGLsk.jpeg",
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
    new BrandingModel({
      url:
        "https://image.freepik.com/free-photo/financial-business-investment_53876-94861.jpg",
      title: "There are many variations of passages of Lorem Ipsum available",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    }),
  ];

  return (
    <div className="Branding">
      <div className="container">
        <PageDescription
          title="Branding"
          titleContent="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
          content={`Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`}
        />
        <BrandingList brandingList={brandingList} />
        <ServiceTable />
      </div>
      <ClientsLogo />
      <Footer />
    </div>
  );
};

export default Branding;
