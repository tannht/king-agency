import React from "react";
import "./NewProjectForm.scss";

const NewProjectForm = () => {
  return (
    <>
      <div className="newProjectForm">
        <div className="newProjectForm-left">
          <h1>Let us help you get your project started.</h1>
          <h2>Contact us</h2>
          <div>
            <div className="icon-border">
              <i className="fas fa-phone fa-2x" />
            </div>
            <p>0908 999 999</p>
          </div>
          <div>
            <div className="icon-border">
              <i className="far fa-paper-plane fa-2x" />
            </div>
            <p>info@kagency.com </p>
          </div>
        </div>
        <div className="newProjectForm-right">
          <form>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input
              style={{ gridColumn: "1/3" }}
              type="text"
              placeholder="Your phone"
            />
            <input
              style={{ gridColumn: "1/3" }}
              type="text"
              placeholder="Your email"
            />
            <textarea
              style={{ gridColumn: "1/3", gridRow: "4/7" }}
              type="text"
              placeholder="Your brief:"
            ></textarea>
          </form>
          <button className="newProject-signup">SIGN UP</button>
        </div>
      </div>
      <div className="social-links">
        <div className="icon-border">
          <i class="fab fa-facebook-f fa-2x"></i>
        </div>
        <div className="icon-border">
          <i class="fab fa-tiktok fa-2x"></i>
        </div>
        <div className="icon-border">
          <i className="fas fa-phone fa-2x" />
        </div>
        <div className="icon-border">
          <i class="fab fa-google fa-2x"></i>
        </div>
      </div>
    </>
  );
};

export default NewProjectForm;
