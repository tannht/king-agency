import { Fragment } from "react";
import { useParams } from "react-router";
import BlogData from "./BlogData";
import "./BlogItemPage.scss";
import { FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import MoreBlog from "./components/MoreBlog";
const BlogItemPage = () => {
  const { id } = useParams();
  const blog = BlogData[id];

  const BlogHeader = () => {
    const backgroundBanner = {
      background: `linear-gradient(0deg, rgba(8,94,114, 0.4), rgba(8,94,114, 0.4)), 
        url('${blog.url}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    };

    return (
      <div className="BlogDetailHeader" style={backgroundBanner}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h1>{blog.title}</h1>
              </div>
              <ul>
                <li>
                  <FaUserCircle /> by {blog.created_by}
                </li>
                <li>
                  <FaRegCalendarAlt /> at {blog.created_date}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const createMarkup = () => {
    return { __html: `${blog.content}` };
  };

  return (
    <Fragment>
      <div className="BlogItemPage">
        <BlogHeader />
        <div className="container">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
          <div className="iconlink">
            <img src="./assets/images/icons/yt_light.svg" alt="" />
            <img src="./assets/images/icons/pin_light.svg" alt="" />
            <img src="./assets/images/icons/ins_light.svg" alt="" />
            <img src="./assets/images/icons/inl_light.svg" alt="" />
          </div>
        </div>
        <MoreBlog />
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default BlogItemPage;
