import "./BlogItem.scss";

const BlogItem = ({ url, category, title, isMain = false }) => (
  <div className={isMain ? "BlogItem active" : "BlogItem"}>
      <img src={url} alt={title} />
      <div className="blog-category">{category}</div>
      <h3>{title}</h3>
  </div>
);

export default BlogItem;
