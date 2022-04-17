import React, { Fragment } from "react";
import PageDescription from "../../components/PageDescription";
import ServiceItem from "./components/ServiceItem";
import ClientsLogo from "../../components/ClientsLogo";
import "./OurWork.scss";
import Footer from "../../components/Footer";
import MetaTags from 'react-meta-tags';

const OurWork = () => (
  <Fragment>
  <div className="OurWork">
    <div className="container">
    <MetaTags>
            <title>Our Work | KaGenCy</title>
            <meta name="description" content="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE
        Net, Vala… ." />
            <meta property="og:title" content="About Us | KaGenCy" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
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
        url="https://images.creativemarket.com/0.1.0/ps/6715927/910/607/m2/fpnw/wm1/qlhkdrvnis2hjtwjua6nslqqk2llaczne17xyiikorlxxtur17onfh1exisssct1-.jpg?1563755511&s=1007fd4a52ef0adcab81b3b00125be0c&fmt=webp"
        serviceTitle="Branding"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
        in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, discovered the undoubtable source."
        reverse={true}
      />

      <ServiceItem
        url="https://mcdn.wallpapersafari.com/medium/24/61/tTLH7U.jpg"
        serviceTitle="Digital Makerting"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable"
      />

      <ServiceItem
        url="https://mcdn.wallpapersafari.com/medium/8/35/WEGgt5.jpeg"
        serviceTitle="Web/App"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
        in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, discovered the undoubtable source."
        reverse={true}
      />

      <ServiceItem
        url="https://mcdn.wallpapersafari.com/medium/73/11/RbtEif.jpg"
        serviceTitle="Booking"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable"
      />

      <ServiceItem
        url="https://mcdn.wallpapersafari.com/medium/40/72/xrB0OX.jpg"
        serviceTitle="Become Influencer"
        serviceContent="There are many variations of passages of Lorem Ipsum available, but
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
        in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, discovered the undoubtable source."
        reverse={true}
      />
    </div>
    <ClientsLogo />
    <Footer />
  </div>
  </Fragment>
);

export default OurWork;
