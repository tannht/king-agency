import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import PageDescription from "../../components/PageDescription";
import "./Branding.scss";
import BrandingList from "./BrandingList";
import ServiceTable from "./ServiceTable";
import { Fragment } from "react";
import BrandingData from "./BrandingData";

const Branding = () => {
  const data = BrandingData;

  return (
    <Fragment>
      <div className="Branding">
        <div className="container">
          <PageDescription
            title="Branding"
            titleContent="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            content={`Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`}
          />
          <BrandingList brandingList={data} />
          <ServiceTable />
        </div>
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Branding;
