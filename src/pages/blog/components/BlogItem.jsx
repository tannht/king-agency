import { Link } from "react-router-dom";
import "./BlogItem.scss";

const BlogItem = ({ blog, isMain = false }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{ cursor: "pointer" }}
      className={isMain ? "BlogItem active" : "BlogItem"}
    >
      <Link to={`/blog/${blog.id}`} onClick={scrollToTop}>
        <img src={blog.url} alt={blog.title} />
        <div className="blog-category">{blog.category}</div>
        <h3>{blog.title}</h3>
      </Link>
    </div>
  );
};

export default BlogItem;
