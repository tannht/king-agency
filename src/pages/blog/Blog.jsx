import PageImageDescription from "../../components/PageImageDescription";
import Footer from "../../components/Footer";
import ClientsLogo from "../../components/ClientsLogo";
import BlogItem from "./BlogItem";
import BlogData from "./BlogData";
import InfoButton from "../../components/InfoButton";
import "./Blog.scss";

const Blog = () => {
  const data = BlogData;
  return (
    <div className="Blog">
      <PageImageDescription
        url={"https://wallpaperaccess.com/full/656665.jpg"}
        title="blog"
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
                url={data[0].url}
                category={data[0].category}
                title={data[0].title}
                isMain={true}
              />
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <BlogItem
                url={data[1].url}
                category={data[1].category}
                title={data[1].title}
              />
              <BlogItem
                url={data[2].url}
                category={data[2].category}
                title={data[2].title}
              />
            </div>
          </div>
          <div className="row">
            {data.map((item, i) => {
              if (i > 2) {
                return (
                  <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <BlogItem
                      url={item.url}
                      category={item.category}
                      title={item.title}
                    />
                  </div>
                );
              } else {
                return;
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
  );
};

export default Blog;
