import PageImageDescription from "../../components/PageImageDescription";
import Footer from "../../components/Footer";
import ClientsLogo from "../../components/ClientsLogo";
import BlogItem from "./components/BlogItem";
import { Fragment } from "react";
import BlogData from "./BlogData";
import InfoButton from "../../components/InfoButton";
import "./Blog.scss";
import MetaTags from 'react-meta-tags';

const Blog = () => {
  const data = BlogData;
  return (
    <Fragment>
      <div className="Blog">
      <MetaTags>
            <title>Blog| KaGenCy</title>
            <meta name="description" content="Kagency tự hào được lựa chọn bởi các đối tác như: Samsung, Gigabyte, DEE
        Net, Vala… ." />
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

                <BlogItem blog={data[0]} isMain={true} />
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <BlogItem blog={data[1]} />
                <BlogItem blog={data[2]} />
              </div>
            </div>
            <div className="row">
              {data.map((item, i) => {
                if (i > 2) {
                  return (
                    <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={i}>
                      <BlogItem blog={item} key={i}/>
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
};

export default Blog;
