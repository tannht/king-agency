import { Fragment, useEffect, useState, useReducer } from "react";
import { useParams } from "react-router";
import PageImageDescription from "../../components/PageImageDescription";
import ProjectData from "../../components/projects_components/ProjectData";
import ClientsLogo from "../../components/ClientsLogo";
import Footer from "../../components/Footer";
import "./ProjectDetailPage.scss";
import ProjectSlider from "./components/ProjectSlider";
import axios from "axios";

const reducer = (stateid, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        posts: [],
        error: "Error",
      };
    default:
      return stateid;
  }
};

const ProjectDetailPage = ({ deviceType }) => {
  const { id } = useParams();
  const project = ProjectData[id];
  const projectsRelated = [];

  const [stateid, dispath] = useReducer(reducer, {
    loading: true,
    error: "",
    posts: [],
  });
  useEffect(() => {
    axios.get(`https://kagency-api.herokuapp.com/api/projects/${id}`).then(
      (res) => {
        dispath({ type: "FETCH_SUCCESS", payload: res.data });
      },
      (error) => {
        dispath({ type: "FETCH_ERROR" });
      }
    );
  }, []);
  // console.log(project);
  // console.log(stateid.posts[0].title);

  stateid.posts.forEach((item) => {
    console.log(item);
    // if (item.id !== id) {
    //   projectsRelated.push(item);
    // }
  });

  const createMarkup = () => {
    if (stateid.loading == true) {
      return;
    } else {
      return {
        __html: `<div className="container">${stateid.posts[0].content}</div>`,
      };
    }
  };

  return (
    <Fragment>
      <div className="ProjectDetailPage">
        <PageImageDescription
          url={stateid.loading ? "Loading" : stateid.posts[0].url}
          titleHeader={
            stateid.loading ? "Loading" : stateid.posts[0].project_name
          }
          titleContent={stateid.loading ? "Loading" : stateid.posts[0].title}
          content={stateid.loading ? "Loading" : stateid.posts[0].description}
        />
        <div
          className="project-content"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        <div className="container">
          <ProjectSlider projects={projectsRelated} />
        </div>
        <ClientsLogo />
        <Footer />
      </div>
    </Fragment>
  );
};

export default ProjectDetailPage;
