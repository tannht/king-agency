import { Fragment } from "react";
import { useParams } from "react-router";
import BlogData from "./BlogData";
import "./BlogDetailPage.scss";
import { FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import MoreBlog from "./components/MoreBlog";
import ytGrey from "../../assets/images/icons/yt_grey.svg";
import pinGrey from "../../assets/images/icons/pin_grey.svg";
import insGrey from "../../assets/images/icons/ins_grey.svg";
import inlGrey from "../../assets/images/icons/inl_grey.svg";
import MetaTags from 'react-meta-tags';

const BlogDetailPage = () => {
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
        <MetaTags>
            <title>{blog.title}| KaGenCy</title>
            <meta name="description" content="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE
        Net, Vala… ." />
            <meta property="og:title" content="About Us | KaGenCy" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
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
      <div className="BlogDetailPage">
        <BlogHeader />
        <div className="container">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
          <div className="icon-link">
            <img src={ytGrey} alt="" />
            <img src={pinGrey} alt="" />
            <img src={inlGrey} alt="" />
            <img src={insGrey} alt="" />
          </div>
        </div>
        <MoreBlog category={blog.category} />
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default BlogDetailPage;
