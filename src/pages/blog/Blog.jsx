import PageImageDescription from "../../components/PageImageDescription";
import Footer from "../../components/Footer";
import ClientsLogo from "../../components/ClientsLogo";
import BlogItem from "./components/BlogItem";
import { Fragment, useReducer, useEffect } from "react";
import BlogData from "./BlogData";
import InfoButton from "../../components/InfoButton";
import "./Blog.scss";
import MetaTags from "react-meta-tags";
import axios from "axios";

const reducer = (stateBlog, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        blogs: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        blogs: [],
        error: "Error load data",
      };
    default:
      return stateBlog;
  }
};

const Blog = () => {
  const data = BlogData;
  const [stateBlog, setStateBlog] = useReducer(reducer, {
    loading: true,
    blogs: [],
    error: "",
  });

  useEffect(() => {
    axios.get("https://kagency-api.herokuapp.com/api/blogs").then(
      (res) => {
        setStateBlog({ type: "FETCH_SUCCESS", payload: res.data });
      },
      (error) => {
        setStateBlog({ type: "FETCH_ERROR" });
      }
    );
  }, []);
  console.log(stateBlog.blogs);
  const load = stateBlog.loading;
  console.log(load);
  if (stateBlog.loading == true) {
    return (
      <div>
        <p>Loading ..</p>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="Blog">
          <MetaTags>
            <title>Blog| KaGenCy</title>
            <meta
              name="description"
              content="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE
        Net, Vala… ."
            />
            <meta property="og:title" content="About Us | KaGenCy" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <PageImageDescription
            url={"https://wallpaperaccess.com/full/656665.jpg"}
            titleHeader="blog"
            titleContent="News, insights, and creative BLOG culture from KAGENCY."
          />
          <div className="container">
            <div className="blog-content">
              <div className="row">
                <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <div className="col-12 categories">
                    <ul>
                      <li>
                        <div className="category-item active">All </div>
                      </li>
                      <li>
                        <div className="category-item">Category 1 </div>
                      </li>
                      <li>
                        <div className="category-item">Category 2 </div>
                      </li>
                      <li>
                        <div className="category-item">Category 3 </div>
                      </li>
                    </ul>
                  </div>

                  <BlogItem
                    blog={stateBlog.loading ? "" : stateBlog.blogs[0]}
                    isMain={true}
                    test="sksk"
                    loadmain={stateBlog.loading}
                  />
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <BlogItem
                    blog={stateBlog.loading ? "" : stateBlog.blogs[1]}
                  />
                  <BlogItem
                    blog={stateBlog.loading ? "" : stateBlog.blogs[2]}
                  />
                </div>
              </div>
              <div className="row">
                {stateBlog.blogs.map((item, i) => {
                  if (i > 2) {
                    return (
                      <div
                        className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
                        key={i}
                      >
                        <BlogItem blog={item} key={i} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
            <div className="more">
              <InfoButton label="load more" />
            </div>
          </div>

          <ClientsLogo />
          <Footer />
        </div>
      </Fragment>
    );
  }
};

export default Blog;
