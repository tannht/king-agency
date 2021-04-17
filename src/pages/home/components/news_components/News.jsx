import React from "react";
import "./News.scss";
import NewsItem from "./NewsItem";

const News = () => (
  <div className="News">
    <div className="container">
      <div className="row ">
        <h3>News</h3>
        <h4>Our Latest Articles</h4>
        <NewsItem
          url={
            "https://image.freepik.com/free-photo/digital-increasing-bar-graph-with-businessman-hand-overlay_53876-97640.jpg"
          }
          tags={["Branding", "Strategy", "Digital Marketing"]}
          title={
            "There are many variations of passages of Lorem Ipsum available"
          }
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
          }
        />
        <NewsItem
          url={
            "https://image.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
          }
          tags={["Branding", "Strategy", "Digital Marketing"]}
          title={
            "There are many variations of passages of Lorem Ipsum available"
          }
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
          }
        />
        <NewsItem
          url={
            "https://www.disruptivestatic.com/wp-content/uploads/2018/07/b2b-marketing-blog.jpg"
          }
          tags={["Branding", "Strategy", "Digital Marketing"]}
          title={
            "There are many variations of passages of Lorem Ipsum available"
          }
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
          }
        />
        <div className="btn-more">
          <button className="InfoButton more-post">View More Post</button>
        </div>
      </div>
    </div>
  </div>
);

export default News;
