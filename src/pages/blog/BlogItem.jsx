import { Link } from "react-router-dom";
import "./BlogItem.scss";

const BlogItem = ({ blog }) => (
  <div className="BlogItem">
    <img src={blog.url} alt="" />
    <div className="blog-content">
      <Link to="" ><h3>{blog.title}</h3></Link>
      <div className="blog-description">{blog.description}</div>
    </div>
  </div>
);

export default BlogItem;
