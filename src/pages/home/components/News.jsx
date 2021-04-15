import React from "react";
import { NavLink } from "react-router-dom";

const News = () => (
  <div>
    <div className="container">
      <div className="row">
      <h3>News</h3>
      <h4>Our Latest Articles</h4>
        <div className="col-6">
          <img
            alt="null"
            src="https://image.shutterstock.com/image-photo/businessman-showing-computer-screen-coworkers-600w-491401522.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            {/* -----------News Item -----------*/}
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <img
            alt="null"
            src="https://image.shutterstock.com/image-photo/businessman-showing-computer-screen-coworkers-600w-491401522.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            {/* -----------News Item -----------*/}
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <img
            alt="null"
            src="https://image.shutterstock.com/image-photo/businessman-showing-computer-screen-coworkers-600w-491401522.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            {/* -----------News Item -----------*/}
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <img
            alt="null"
            src="https://image.shutterstock.com/image-photo/businessman-showing-computer-screen-coworkers-600w-491401522.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-outline-primary btn-lg">
          Primary
        </button>
      </div>
    </div>
  </div>
);

export default News;
