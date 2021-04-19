import "./PageDescription.scss";

const PageDescription = ({ title, titleContent, content }) => {
  const TitleRender = () => {
    let strArr = title.split(" ");
    console.log(strArr);
  }
  return (
    <div className="PageDescription">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="title">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 content">
            <h3>{titleContent}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDescription;
