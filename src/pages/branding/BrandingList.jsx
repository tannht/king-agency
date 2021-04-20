import BlogItem from "./BlogItem";

const BlogList = ({ blogs = [] }) => {
  var oddBlog = [];
  var evenBlog = [];

  blogs.map((item, index) => {
    if ((index + 1) % 2 === 0) {
      return evenBlog.push(item);
    } else {
      return oddBlog.push(item);
    }
  });
  return (
    <div className="row">
      <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        {oddBlog.map((item, index) => (
          <BlogItem key={index} blog={item} />
        ))}
      </div>

      <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        {evenBlog.map((item, index) => (
          <BlogItem key={index} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
