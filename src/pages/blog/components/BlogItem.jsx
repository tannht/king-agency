import { Link } from "react-router-dom";
import "./BlogItem.scss";

const BlogItem = ({ blog, isMain = false }) => (
  <div className={isMain ? "BlogItem active" : "BlogItem"}>
    <img src={blog.url} alt={blog.title} />
    <div className="blog-category">{blog.category}</div>
    <h3>
      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
    </h3>
  </div>
);

export default BlogItem;
