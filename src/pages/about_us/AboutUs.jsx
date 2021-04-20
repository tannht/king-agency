import "./AboutUs.scss";
import PageDescription from "../../components/PageDescription";
import AboutVideo from "./components/AboutVideo";
import AboutDescription from "./components/AboutDescription";
import AboutImages from "./components/AboutImages";
import ClientsLogo from "../../components/ClientsLogo";


const AboutUs = () => (
  <div className="AboutUs">
    <div className="container">
      <PageDescription
        title="About Us"
        titleContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web"
      />
      <AboutVideo />
      <AboutDescription />
      <AboutImages />
    </div>
    <ClientsLogo />
  </div>
);

export default AboutUs;
