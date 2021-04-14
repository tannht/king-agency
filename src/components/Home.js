import React from 'react';
import HomeBanner from './sub_components/HomeBanner';
import ProjectList from './sub_components/ProjectList';
import ClientsLogo from './sub_components/ClientsLogo';
import NewsList from './sub_components/NewsList'; 
import { NavLink} from "react-router-dom";
function Home() {
  return (
    <div className="">
     <HomeBanner/>
     {/* OUR WORK SECTIONS */}
     <div className="d-flex card-item">
            <img
              alt="null"
              src="https://image.shutterstock.com/image-photo/businessman-showing-computer-screen-coworkers-600w-491401522.jpg"
              className="card-img-top"
              
            />
            <div Name="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              {/* -----------News Item -----------*/}
              <NavLink to="#" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
     <ProjectList />
      <ClientsLogo />
     <h3>News</h3>
     <h4>Our Latest Articles</h4>
     <NewsList/>
    </div>
  );
}

export default Home;
