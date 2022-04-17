import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import PageDescription from "../../components/PageDescription";
import "./Branding.scss";
import BrandingList from "./BrandingList";
import ServiceTable from "./ServiceTable";
import { Fragment } from "react";
import BrandingData from "./BrandingData";
import MetaTags from 'react-meta-tags';

const Branding = () => {
  const data = BrandingData;

  return (
    <Fragment>
      <div className="Branding">
        <div className="container">
        <MetaTags>
            <title>Branding| KaGenCy</title>
            <meta name="description" content="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE
        Net, Vala… ." />
            <meta property="og:title" content="Branding| KaGenCy" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
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
