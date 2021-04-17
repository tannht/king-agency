import { NavLink } from "react-router-dom";
import "./NewsItem.scss";

const NewsItem = ({ url, tags, title, description }) => {
    const RenderTags = () => {
        return tags.map((item, index) => (
            <span className="new-tag" key={index}>
                {item}
            </span>
        ));
    };

    return (
        <div className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <img src={url} className="card-img-top" alt="" />
            <div className="card-border">
                <div className="tags">
                    <RenderTags />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-description">
                    {description}
                    </div>
                      <div className="read-more">
                      <NavLink to="#" >Read More <i className="fa fa-caret-right" aria-hidden="true"></i></NavLink>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
