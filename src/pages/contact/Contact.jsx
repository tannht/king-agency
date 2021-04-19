import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Contact.scss";

const Contact = () => (
  <div className="Contact">
    <div className="container">
      <div className="row contact-row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <h1>KAGENCY</h1>
          <p>125/2 Hoa Hung, Ward 12, District 10, Ho Chi Minh City, Vietnam</p>
          <ul>
            <li>
              <p>
                <span>
                  <i className="fas fa-phone" />
                </span>
                0908 999 999
              </p>
            </li>
            <li>
              <p>
                <span>
                  <i className="far fa-paper-plane" />
                </span>
                info@kagency.com
              </p>
            </li>
          </ul>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="location"
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=125/2 Hoa Hung Street, Ward 12, District 10, Ho Chi Minh City&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <NavLink to="https://www.fridaynightfunkin.net/"></NavLink>
            </div>
          </div>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-5">
          <div className="form-contact">
            <form action="action_page.php">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone"
              />

              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email"
              />

              <textarea
                id="message"
                name="message"
                placeholder="Message:"
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer hiddenContact={true} />
  </div>
);

export default Contact;
