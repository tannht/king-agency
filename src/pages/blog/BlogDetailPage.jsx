import { Fragment, useReducer, useEffect } from "react";
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
import MetaTags from "react-meta-tags";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        blogsdetail: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        error: "",
        loading: false,
        blogsdetail: {},
      };
    default:
      return state;
  }
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = BlogData[id];
  const [stateblogdetail, dispatch] = useReducer(reducer, {
    loading: true,
    blogsdetail: {},
    error: "",
  });
  const load = stateblogdetail.loading;
  useEffect(() => {
    axios.get(`https://kagency-api.herokuapp.com/api/blogs/${id}`).then(
      (res) => {
        console.log(res.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      },
      (error) => {
        dispatch({ type: "FETCH_ERROR" });
      }
    );
  }, []);
  const BlogHeader = () => {
    const backgroundBanner = {
      backgroundImage: `linear-gradient(0deg, rgba(8,94,114, 0.4), rgba(8,94,114, 0.4)), 
        url('${load ? "Loading" : stateblogdetail.blogsdetail.url}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    };

    return (
      <div className="BlogDetailHeader" style={backgroundBanner}>
        <div className="container">
          <MetaTags>
            <title>
              {load ? "Loading" : stateblogdetail.blogsdetail.title}| KaGenCy
            </title>
            <meta
              name="description"
              content="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE
        Net, Vala… ."
            />
            <meta property="og:title" content="About Us | KaGenCy" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h1>{load ? "Loading" : stateblogdetail.blogsdetail.title}</h1>
              </div>
              <ul>
                <li>
                  <FaUserCircle /> by{" "}
                  {load ? "Loading" : stateblogdetail.blogsdetail.created_by}
                </li>
                <li>
                  <FaRegCalendarAlt /> at{" "}
                  {load ? "Loading" : stateblogdetail.blogsdetail.created_date}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const createMarkup = () => {
    return {
      __html: `${load ? "Loading" : stateblogdetail.blogsdetail.content}`,
    };
  };
  console.log(load ? "Loading" : stateblogdetail.blogsdetail.category_id);
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
        <MoreBlog category={load ? "Loading" : stateblogdetail.blogsdetail} />
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default BlogDetailPage;
