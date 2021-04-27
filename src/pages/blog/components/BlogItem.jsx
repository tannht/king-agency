import { Link } from "react-router-dom";
import "./BlogItem.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const BlogItem = ({ blog, isMain = false }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollAnimation animateIn='fadeIn'
      delay={500}
      >
    <div style={{cursor:'pointer'}} className={isMain ? "BlogItem active" : "BlogItem"}>
    <Link to={`/blog/${blog.id}`} onClick={scrollToTop}>

      <img src={blog.url} alt={blog.title} />
      <div className="blog-category">{blog.category}</div>
      <h3>
          {blog.title}
      </h3>
      </Link>

    </div>
    </ScrollAnimation>
  );
};

export default BlogItem;
