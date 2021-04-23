import "./PageImageDescription.scss";

const PageImageDescription = ({ title, titleContent, url }) => {
  const backgroundBanner = {
    background: `linear-gradient(0deg, rgba(8,94,114, 0.4), rgba(8,94,114, 0.4)), 
    url('${url}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "space",
  };

  return (
    <div className="PageImageDescription" style={backgroundBanner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="title">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 content">
            <h3>{titleContent}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageImageDescription;
