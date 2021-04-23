import React from "react";
import "./MoreBlog.scss";
import BlogItem from "./BlogItem";
import BlogData from "../BlogData";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
const MoreBlog = ({ category }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const data = [];

  BlogData.forEach(blog => {
    if(blog.category === category) {
      data.push(blog);
    }
  });
  return (
    <div className="MoreBlog">
      <div className="container">
        <h3 className="read-more">Read more posts</h3>
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 more-blog-item">
            <BlogItem blog={data[0]}  />
          </div>
          <div className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 more-blog-item">
            <BlogItem blog={data[1]}  onClick={scrollToTop}/>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 more-blog-item">
            <Link to="/blog" onClick={scrollToTop}>
            <div className="btn-all-post">
              <FaTh size={70} />
              <p>All Post</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreBlog;
